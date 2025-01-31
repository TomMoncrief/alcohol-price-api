const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Default route for root URL
app.get("/", (req, res) => {
  res.send("Welcome to the Alcohol Price Comparison API! Use /api/get-prices?query=your_search_term to search.");
});

// API endpoint to get alcohol prices
app.get("/api/get-prices", async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) return res.status(400).json({ error: "Query parameter is required" });
    
    const sampleData = [
      { store: "Tesco", item: "Smirnoff Vodka 70cl", price: 16, abv: 37.5 },
      { store: "Asda", item: "Smirnoff Vodka 70cl", price: 15, abv: 37.5 },
      { store: "Sainsbury's", item: "Smirnoff Vodka 70cl", price: 17, abv: 37.5 }
    ];
    
    const results = sampleData.filter(item => item.item.toLowerCase().includes(query.toLowerCase()));
    res.json(results);
  } catch (error) {
    console.error("Error fetching alcohol prices:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
