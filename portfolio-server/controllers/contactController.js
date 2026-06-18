import Message from "../models/Message.js";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const createMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if ([name, email, subject, message].some((value) => !value?.trim())) {
      res.status(400);
      throw new Error("All contact fields are required");
    }

    if (!isValidEmail(email)) {
      res.status(400);
      throw new Error("A valid email address is required");
    }

    const savedMessage = await Message.create({ name, email, subject, message });
    res.status(201).json({ message: "Message received", data: savedMessage });
  } catch (error) {
    next(error);
  }
};
