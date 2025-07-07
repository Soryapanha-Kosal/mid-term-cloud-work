function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json("Unauthorized");
    }
    next();
  };
}

module.exports = authRole;
