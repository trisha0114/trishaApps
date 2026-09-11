import express from "express";
const router = express.Router();

// Tumatanggap ng ID parameter katulad sa screenshot (/trisha/5)
router.get("/:id", (req, res) => {
  res.json({ message: `You requested item with ID: ${req.params.id}` });
});

export default router;