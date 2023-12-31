import jwt from "jsonwebtoken";

function verify(req, res, next) {
  const authHeader = req.headers.token;
  // console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) return res.status(403).json("Token is not valid");
      req.user = user;
      // console.log(user);
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
}

export default verify;
