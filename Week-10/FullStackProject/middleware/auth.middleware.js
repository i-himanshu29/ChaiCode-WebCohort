// middleware always use in routes
import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  //token le kar aoo
  //token check karo
  // token se data nikaal lo

  try {
    console.log("cookies..", req.cookies);
    // let token = req.cookies.token || ""
    // or
    let token = req.cookies?.token; // optional chaining
    console.log("Token Found", token ? "YES" : "NO");

    if (!token) {
      console.log("No Token");
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }

    // try catch nested bhi ho sakta hai kabhi kabhi
    // try {
    //     const decoded = jwt.verify(token ,process.env.JWT_SECRET);
    //     console.log("decoded Data",decoded);
    //     req.user = decoded

    //     next()
    // } catch (error) {

    // }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded Data", decoded);
    req.user = decoded;

    next();
  } catch (error) {
    console.log("Auth middleware Failure");
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
