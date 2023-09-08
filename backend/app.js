const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const pantryid="df703916-0504-4a6a-b267-e21ce2a1e5e6";

const PORT = 9443;

// Create
app.post("/add-item/:pantryid/basket/:basketKey", async (req, res) => {
  try {
    const { pantryid, basketKey } = req.params;
    const payload = req.body;
    const response = await axios.post(
      `https://getpantry.cloud/apiv1/pantry/${pantryid}/basket/${basketKey}`,
      payload
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Read Endpoint

app.get("/get-item/:pantryid/basket/:basketKey", async (req, res) => {
  try {
    const { pantryid, basketKey } = req.params;
    const response = await axios.get(
      `https://getpantry.cloud/apiv1/pantry/${pantryid}/basket/${basketKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/update-item/:pantryid/basket/:basketKey", async (req, res) => {
  try {
    const { pantryid, basketKey } = req.params;
    const payload = req.body;
    const response = await axios.put(
      `https://getpantry.cloud/apiv1/pantry/${pantryid}/basket/${basketKey}`,
      payload
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/delete-item/:pantryid/basket/:basketKey", async (req, res) => {
  try {
    const { pantryid, basketKey } = req.params;
    const response = await axios.delete(
      `https://getpantry.cloud/apiv1/pantry/${pantryid}/basket/${basketKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
