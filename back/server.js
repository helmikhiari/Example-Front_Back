const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());

app.use(cors());
app.options('http://localhost:3000', cors());
app.get("/", (req, res) => {
    res.json({ taskName: "Go to the gym", done: "Yes" });
})


app.listen(5000, () => {
    console.log("App is running on port ");
})