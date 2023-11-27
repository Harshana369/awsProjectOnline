import express from "express";
import User from "../models/users.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import verify from "../verifyToken.js";

const router = express.Router();

//Register a user
router.post("/signup", verify, async (req, res) => {
  // console.log(req.currentUser)
  if (req.user.isAdmin) {
    // console.log(req.body)
    const newUser = new User(req.body);
    try {
      newUser.password = CryptoJS.AES.encrypt(
        req.body.email,
        process.env.SECRET
      ).toString();
      const user = await newUser.save();
      // console.log(user)
      res
        .status(201)
        .json({ msg: "Succesfully added a new user", variant: "success" });
    } catch (err) {
      res
        .status(201)
        .json({ msg: "Error occured during saving a user", variant: "error" });
    }
  } else {
    res
      .status(403)
      .json({
        msg: "You dont have permission to add a user",
        variant: "error",
      });
  }
});

//Login a user
router.post("/login", async (req, res) => {
  try {
    // console.log("1")
    const user = await User.findOne({ username: req.body.username }).populate({
      path: "company",
      select: "companyName",
    });
    // console.log(user)
    if (!user) return res.json("Wrong password or username!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password)
      return res.json("Wrong password or username!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.adminRights,
        visbilityBasedOn: user.visbilityBasedOn,
        company: user.company,
        userDiv: user.userDiv,
        name: user.name,
      },
      process.env.SECRET,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });

    console.log("User logged in suceesfully - " + user.name);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get Access token for external systems - InfraMs
router.post("/requestAccessToken", async (req, res) => {
  try {
    // console.log("1")
    const user = await User.findOne({ username: req.body.username }).populate({
      path: "company",
      select: "companyName",
    });
    // console.log(user)
    if (!user) return res.json("Wrong password or username!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password)
      return res.json("Wrong password or username!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.adminRights,
        visbilityBasedOn: user.visbilityBasedOn,
        company: user.company,
        userDiv: user.userDiv,
        name: user.name,
      },
      process.env.SECRET,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ accessToken });

    console.log("User logged in suceesfully - " + user.name);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
