const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/quotes",require('./routes/quotes'));

// Define the static file directory
app.use(express.static(__dirname));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening On port ${PORT}`);
});
