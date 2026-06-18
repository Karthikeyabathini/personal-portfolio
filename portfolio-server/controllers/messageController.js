import Message from "../models/Message.js";

export const getMessages = async (_req, res, next) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.json({ messages });
  } catch (error) {
    next(error);
  }
};
