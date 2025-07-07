// Import necessary modules
import express, { Request as ExpressRequest, Response as ExpressResponse, NextFunction } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";
import { verify } from "jsonwebtoken";
dotenv.config();

// Initialize Express app
const app = express();

const port = process.env.PORT || 3001;

function authToken(req: ExpressRequest, res: ExpressResponse, next: NextFunction): void {
  const header = req.headers.authorization;
  const token = header && header.split(" ")[1];

  if (!token) {
    res.status(401).json("Missing token");
    return;
  }

  verify(token, process.env.JWT_SECRET ?? "", (err, user) => {
    if (err) {
      res.status(403).json("Invalid token");
      return;
    }
    (req as any).user = user;
    next();
  });
}

function authRole(role: string) {
  return (req: ExpressRequest, res: ExpressResponse, next: NextFunction): void => {
    const user = (req as any).user;
    if (!user || user.role !== role) {
      res.status(403).json("Unauthorized");
      return;
    }
    next();
  };
}


const proxyMiddleware = createProxyMiddleware({
  target: "http://54.227.73.99:5005/inventory",
  changeOrigin: true,
  ws: true,
});

app.use("/inventory",authToken,authRole("club_leader"), proxyMiddleware);


app.use('/club', createProxyMiddleware({
  target: 'http://54.197.47.51:5002/club',
  changeOrigin: true,
}));

app.use('/auth', createProxyMiddleware({
  target: 'http://18.234.65.70:5001/',
  changeOrigin: true,
}));

app.use('/event', authToken, authRole('club_leader'), createProxyMiddleware({
  target: 'http://54.197.33.111:5003/event',
  changeOrigin: true,
}));

app.use('/budget', authToken, authRole('club_leader'), createProxyMiddleware({
  target: 'http://44.220.143.93:5004/budget',
  changeOrigin: true,
}));


// Start the Express server and listen on the configured port
app.listen(port, () => {
  // Determine the host address based on environment variables or default to localhost
  const hostAddress = process.env.HOST
    ? `${process.env.HOST}${port}`
    : `http://localhost:${port}`;
  // Log the server running address
  console.log(
    `Proxy server running at ${hostAddress}`
  );
});

