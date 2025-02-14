const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//Error handling middleware should be placed after all other route handlers
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.get('/users/:id', (req, res, next) => {
    const userId = req.params.id;
    // Simulate an error for demonstration purposes
    if (userId === 'error') {
        next(new Error('User not found')); // Pass the error to the error handling middleware
    } else {
        res.send(`User ID: ${userId}`);
    }
});