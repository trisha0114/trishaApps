import express from "express";
const router = express.Router();

router.get("/about", (req, res) => {
  res.json({ message: "About Trisha's Application" });
});

export default router;