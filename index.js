const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('API is up and running');
});

// routes

// User registration
app.post('/api/auth/register', (req, res) => {
    res.status(201).json({ message: 'Registration successful' });
});

// User login 
app.post('/api/auth/login', (req, res) => {
    res.status(200).json({ message: 'Login successful' });
});

// Get user data 
app.get('/api/auth/me', (req, res) => {
    res.status(200).json({ message: 'User data retrieved successfully' });
});

// Get all items 
app.get('/api/items', (req, res) => {
    res.status(200).json({ message: 'Items list fetched successfully' });
});

// Get a specific item by ID
app.get('/api/items/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Item with ID retrieved successfully` });
});

// Get reviews for a specific item 
app.get('/api/items/:id/reviews', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Reviews for item with ID ` });
});

// Get a specific review for an item 
app.get('/api/items/:id/reviews/:reviewId', (req, res) => {
    const { id, reviewId } = req.params;
    res.status(200).json({ message: `Review with an ID for item with an ID` });
});

// Add a review for an item
app.post('/api/items/:id/reviews', (req, res) => {
    const { id } = req.params;
    res.status(201).json({ message: `Review added for item with an ID` });
});

// Get reviews written by the user
app.get('/api/reviews/me', (req, res) => {
    res.status(200).json({ message: 'List of reviews written by the user' });
});

// Update a specific review 
app.put('/api/users/:userId/reviews/:reviewId', (req, res) => {
    const { userId, reviewId } = req.params;
    res.status(200).json({ message: `Review with ID by user with an ID  updated` });
});

// Add a comment on a review
app.post('/api/items/:id/reviews/:reviewId/comments', (req, res) => {
    const { id, reviewId } = req.params;
    res.status(201).json({ message: `Comment added to review with an ID for item with an ID` });
});

// Get comments written by the user 
app.get('/api/comments/me', (req, res) => {
    res.status(200).json({ message: 'List of comments written by the user' });
});

// Update a specific comment
app.put('/api/users/:userId/comments/:commentId', (req, res) => {
    const { userId, commentId } = req.params;
    res.status(200).json({ message: `Comment with ID by user with ID updated successfully` });
});

// Delete a user's comment
app.delete('/api/users/:userId/comments/:commentId', (req, res) => {
    const { userId, commentId } = req.params;
    res.status(204).json({ message: `Comment with ID by user with ID  deleted successfully` });
});

// Delete a user's review 
app.delete('/api/users/:userId/reviews/:reviewId', (req, res) => {
    const { userId, reviewId } = req.params;
    res.status(204).json({ message: `Review with ID by user with ID  deleted successfully` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
