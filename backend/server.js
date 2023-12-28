const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Middlewares
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Data Schema
const gameSchema = new mongoose.Schema({
  title: String,
  genre: String,
  time: Number,
  difficulty: Number,
});

const Game = mongoose.model('Game', gameSchema);

// Create Endpoint
app.post('/api/v1/games', async (req, res) => {
  const { title, genre, time, difficulty } = req.body;

  try {
    const newGame = await Game.create({
      title,
      genre,
      time,
      difficulty
    });
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read Enpoint
app.get('/api/v1/games', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

// Update Endpoint
app.put('/api/v1/game/:id', async (req, res) => {
  const gameId = req.params.id;
  const { title, genre, time, difficulty } = req.body;

  try {
    const updatedGame = await Game.findByIdAndUpdate(gameId, {
      title,
      genre,
      time,
      difficulty
    }, {
      new: true
    });

    if (!updatedGame)
      return res.status(404).json({ message: 'Game not found '});
    res.json(updatedGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Endpoint
app.delete('/api/v1/game/:id', async (req, res) => {
  const gameId = req.params.id;

  try {
    const deletedGame = await Game.findByIdAndDelete(gameId);
    if (!deletedGame)
      return res.status(404).json({ message: 'Game not found' });
    res.json({ message: 'Game Deleted Successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Handling Generic Errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong')
})

// Run Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})