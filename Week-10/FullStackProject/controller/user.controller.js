import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  console.log("req", req);
  console.log("res", res);
  // get data
  // validate
  // check if user already exists through email
  // create a user in databse
  //create a verification token
  // save token in the db
  // send token as email to user
  // send success status to the user

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  console.log(email);

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);

    user.verificationToken = token;
    await user.save();

    // send email
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDERMAIL, // sender address
      to: user.email, // list of receivers
      subject: "Verify your email✔", // Subject line
      text: `Please Click on the following link :
            ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain text body
      // html: "<b>Hello world?</b>", // html body
    };

    await transporter.sendMail(mailOption);

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "User not registered",
      error,
      success: false,
    });
  }
};

const verifyUser = async (req, res) => {
  // get token from url
  // validate
  //find user based on the token
  // if not
  // set isVarified field to true
  // remove verififcation token
  // save
  // return response

  const { token } = req.params;
  console.log(token);
  if (!token) {
    return res.status(400).json({
      message: "Invalid Token",
    });
  }

  const user = await User.findOne({ verificationToken: token });
  console.log("verificationToken wala user", user);

  if (!user) {
    return res.status(400).json({
      message: "Invalid Token",
    });
  }

  user.isVerified = true;
  user.verificationToken = undefined;

  await user.save();
};

const login = async (req, res) => {
  //
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
    // bcrypt for matching password , it also use to encrypt the password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // user verified or not
    //H.W
    

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("test", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login SuccessFull",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "User not registerd",
      error,
      success: false,
    });
  }
};

// user profile
// logout
// forget password
// reset password

const getMe = async (req, res) => {
  try {
    // const data = req.user;
    // console.log("Reached at profile level");

    const user = await User.findById(req.user.id).select("-password");
    console.log("user hai ji", user);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("Error in get me");
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {
      // expiresIn:new Date(0)// know about why 0
      // new Date(0) = January 1, 1970, 00:00:00 UTC
    });

    res.status(200).json({
      success: true,
      message: "LoggedOut Successfully",
    });
  } catch (error) {}
};

const forgotPassword = async (req, res) => {
  try {
    // get email
    // find user based on email
    // reset token + reset expiry => Date.now()+10*60*1000
    //send email=> design url
  } catch (error) {}
};

const resetPassword = async (req, res) => {
  try {
    // collect token from params
    // password from req.body

    const { token } = req.params;
    const { password, confPassword } = req.body;

    if (password === confPassword) {
    }

    try {
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
      });

      // set password in user
      // resetToken , resetExpiry => reset
      // save
    } catch (error) {}
  } catch (error) {}
};

export {
  registerUser,
  verifyUser,
  login,
  getMe,
  logoutUser,
  resetPassword,
  forgotPassword,
};
