import express from "express";
const router = express.Router();

// Tumatanggap ng URL query query?q=hello katulad sa screenshot
router.get("/search/query", (req, res) => {
  const query = req.query.q || "";
  res.json({ message: `Search query received: ${query}` });
});

export default router;