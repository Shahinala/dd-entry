const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/delivery', (req, res) => {
  const { deliveries } = req.body;
  const earnings = deliveries * 20;
  const total = earnings + 7000; // মাসিক বেতন + ডেলিভারি আয়
  res.json({ deliveries, earnings, total });
});

app.listen(5000, () => {
  console.log('Backend server running on port 5000');
});