'use strict'

// <require a song model>
const Song = require('../models/song')
// < use model methods for getting all songs and one song then send the response back with the data>
//get one song
module.exports.getSong = ({params: { id } },res,next) => {
  Song.getSingleSong(id)
  .then( (song) => {
    res.status(200).json(song);
  })
  .catch( (error) => {
    console.log('error in songctrl for getsong', error)
    next(error)
  })
}
//get all songs
module.exports.getSong = (req,res,next) => {
  Song.getAllSongs()
  .then( (songs) => {
    res.status(200).json(songs);
  })
  .catch( (error) => {
    console.log('error in songctrl for getsong', error)
    next(error)
  })
}
//adding
module.exports.addSong = ({ body }, res, next) => {
Song.forge(body)
.save()
.then( ()=> res.status(201).json({msg:"A Song was nicely posted to the DB"})
  .catch( (error) => {
    console.log('error in addSong in songctrl', error)
    next(error)
  })
})
}
//delete
module.exports.deleteSingleSong = ( { params: { id } }, res, next) => {
  Song.forge({id})
  .destroy()
  .then( (song) => {
    res.status(200).json(song)
  })
  .catch((error)=> {
    console.log("error in deleteSingleSong in song ctrl", error)
    next(error);
  })
}
//editing
// <stretch goal: methods for adding, deleting, editing a song>
