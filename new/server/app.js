const express = require("express");
const app = express();
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

app.get("/advice", (req, res) => {
  const adviceSlips = [
    { id: 1, advice: "Always follow your dreams." },
    { id: 2, advice: "Take risks and learn from failures." },
    { id: 3, advice: "Be kind to yourself and others." },
    { id: 4, advice: "You should follow your dreams." },
    { id: 5, advice: "Ensure to take on risks and learn from failures." },
    { id: 6, advice: "Remember to be kind to yourself and others." },
    { id: 4, advice: "Embrace change and be open to new possibilities." },
    {
      id: 5,
      advice: "Practice gratitude daily to cultivate a positive mindset.",
    },
    {
      id: 6,
      advice:
        "Prioritize self-care and make time for activities that bring you joy.",
    },
    {
      id: 7,
      advice: "Surround yourself with supportive and uplifting people.",
    },
    { id: 8, advice: "Believe in your abilities and trust in your intuition." },
    {
      id: 9,
      advice:
        "Learn from your mistakes and use them as opportunities for growth.",
    },
    { id: 10, advice: "Set clear goals and create a plan to achieve them." },
    {
      id: 11,
      advice:
        "Step out of your comfort zone regularly to expand your horizons.",
    },
    { id: 12, advice: "Stay curious and never stop learning." },
    { id: 13, advice: "Practice mindfulness to live in the present moment." },
    {
      id: 14,
      advice: "Practice active listening and seek to understand others.",
    },
    { id: 15, advice: "Cultivate resilience to bounce back from challenges." },
    {
      id: 16,
      advice:
        "Take care of your physical health through regular exercise and a balanced diet.",
    },
    {
      id: 17,
      advice:
        "Practice self-reflection and regularly assess your personal growth.",
    },
    { id: 18, advice: "Embrace failure as a stepping stone to success." },
    { id: 19, advice: "Celebrate your achievements, no matter how small." },
    {
      id: 20,
      advice: "Learn to manage your time effectively and prioritize tasks.",
    },
    { id: 21, advice: "Practice patience and trust in the process." },
    {
      id: 22,
      advice:
        "Surround yourself with positive affirmations and visualize your success.",
    },
    {
      id: 23,
      advice:
        "Remember that happiness comes from within, so focus on cultivating inner peace and contentment.",
    },
    // Add more advice slips here
  ];

  const randomAdvice =
    adviceSlips[Math.floor(Math.random() * adviceSlips.length)];

  res.json(randomAdvice);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
