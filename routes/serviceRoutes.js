import express from "express";
const router = express.Router();

router.get("/services", (req, res) => {
  res.json({ message: "Services offered by Trisha" });
});

export default router;