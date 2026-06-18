import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const loginAdmin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400);
      throw new Error("Username and password are required");
    }

    const admin = await Admin.findOne({ username: username.toLowerCase() });
    if (!admin || !(await admin.matchPassword(password))) {
      res.status(401);
      throw new Error("Invalid admin credentials");
    }

    res.json({
      token: signToken(admin._id),
      admin: { id: admin._id, username: admin.username }
    });
  } catch (error) {
    next(error);
  }
};
