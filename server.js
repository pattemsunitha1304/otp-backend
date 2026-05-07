const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Root route (test server)
app.get("/", (req, res) => {
  res.send("API Running");
});

// 🔥 Test route (VERY IMPORTANT)
app.get("/test-otp", (req, res) => {
  res.json({
    success: true,
    message: "OTP sent",
    otp: "123456"
  });
});

// OTP API (POST)
app.post("/send-otp", (req, res) => {
  const { mobile } = req.body;

  // Validate mobile
  if (!mobile) {
    return res.status(400).json({
      success: false,
      message: "Mobile number is required"
    });
  }

  console.log("OTP request for:", mobile);

  // Dummy OTP
  const otp = "123456";

  res.json({
    success: true,
    message: "OTP sent successfully",
    otp: otp
  });
});

// Start server (Railway needs process.env.PORT)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
