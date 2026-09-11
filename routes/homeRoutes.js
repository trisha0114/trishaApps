import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Trisha's routes!" });
});

export default router;