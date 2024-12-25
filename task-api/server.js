const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/offer", async (req, res) => {
  try {
    const response = await axios.get(
      "https://stg-catalyst-external-distributor-api.pulseid.com/offer",
      {
        headers: {
          "x-api-key":
            "9a5d051cd43717f66a4c375e47ae5b86fcabc70a6eab8fa588a8a627944542716d73741433853995f85514a907b65f7710546a831144c95126f44815c014d012",
          "x-api-secret":
            "059813a8b9973dad7eaa5d9118f8a1ea2f2235abb7446dac7eba88a86d3b90b4b3841bf4df27303b5039f5ab3e670ec3494f50e6afb3e54c00ce106a89e38036",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
