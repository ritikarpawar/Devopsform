const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // serve HTML

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send("Form submitted successfully!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});