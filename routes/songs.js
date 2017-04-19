'use strict';

// <require the express Router>
// <require the songCtrl to get access to its methods>
const { Router } = require('express');
const router = Router();
const {getSong, getAllSongs, addSong, deleteSingleSong } = require('../controllers/songCtrl');
// <define routes for getting all songs and a single song>
router.get('/songs', getAllSongs);
router.post('/songs/add', addSong);
router.get('/songs/:id', getSong);
router.delete('/songs/:id', deleteSingleSong);

// <stretch: define routes for posting, deleting, editing a song>
