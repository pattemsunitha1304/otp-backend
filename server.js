const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

app.post("/send-otp", (req, res) => {
  const { mobile } = req.body;

  res.json({
    success: true,
    message: "OTP sent",
    otp: "123456"
  });
});

app.listen(PORT, "0.0.0.0", () => console.log(`Server started on port ${PORT}`));
