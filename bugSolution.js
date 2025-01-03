const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    // ... code to fetch user data ...
    // Simulate a database error if userId is invalid
    if (isNaN(userId) || parseInt(userId) < 1) {
      throw new Error('User not found');
    }
    const user = { id: userId, name: 'John Doe' }; // Replace with actual database fetching
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    if (error.message === 'User not found') {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});
app.listen(3000, () => console.log('Server started on port 3000'));