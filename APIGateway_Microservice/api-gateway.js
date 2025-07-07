// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const app = express();
// app.use(express.json());

// const JWT_SECRET = process.env.JWT_SECRET;

// function authToken(req, res, next) {
//   const header = req.headers.authorization;
//   const token = header && header.split(' ')[1];

//   console.log("whatever")
//   if (!token) return res.status(401).json("Missing token");


  
//   console.log("testtest")
//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json("Invalid token");
//     req.user = user;
//     next();
//   });
// }

// function authRole(role) {
//   return (req, res, next) => {
//     if (req.user.role !== role) return res.status(403).json("Unauthorized");
//     next();
//   };
// }

// const proxyMiddleware = createProxyMiddleware({ 
//   target: 'http://localhost:5005/inventory',
//   changeOrigin: true,
// });


// app.use('/test',proxyMiddleware);


// app.use('/inventory',createProxyMiddleware({
//   target: 'http://localhost:5005/inventory',
//   // changeOrigin: true,
//   // pathRewrite: { '^/inventory': '' }
// }));

// // Routes
// app.use('/auth', createProxyMiddleware({
//   target: 'http://localhost:5001/',
//   changeOrigin: true,
//   pathRewrite: { '^/auth': '' } // forwards /auth/register → /register
// }));

// app.use('/club', authToken, authRole('club_leader'), createProxyMiddleware({
//   target: 'http://localhost:5002/',
//   changeOrigin: true,
//   pathRewrite: { '^/club': '' }
// }));

// app.use('/event', authToken, authRole('club_leader'), createProxyMiddleware({
//   target: 'http://localhost:5003/',
//   changeOrigin: true,
//   pathRewrite: { '^/event': '' }
// }));

// app.use('/budget', authToken, authRole('club_leader'), createProxyMiddleware({
//   target: 'http://127.0.0.1:5004/',
//   changeOrigin: true,
//   pathRewrite: { '^/budget': '' }
// }));




// app.listen(4000, () => console.log("🚀 API Gateway running on port 4000"));
