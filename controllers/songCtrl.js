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
module.exports.getAllSongs = (req,res,next) => {
  Song.getAllSongs()
  .then( (songs) => {
    res.status(200).json(songs);
  })
  .catch( (error) => {
    console.log('error in songctrl for getsong', error)
    next(error)
  })
}


// module.exports.editSong = ({ body }, res, next) => {
//   Song.forge(body)
//   .where('SongId', '=', req.params.id)
//   .save
// }








//adding
//postman
 // { "Title": "john", "SongLength":"24", "ReleaseDate": "thursday", "GenreId": "5", "ArtistId": "5","AlbumId": "5"  }

// curl --request POST --data "{ \"Title\": \"bigSongs\", \"SongLength\":\"24\", \"ReleaseDate\": \"thursday\", \"GenreId\": 5, \"ArtistId\": 5,\"AlbumId\": 5  } "http://127.0.0.1:3000/api/v1/songs/add --header "Content-Type: application/json"

module.exports.addSong = ({ body }, res, next) => {
  console.log("body", body)
Song.forge(body)
.save()
.then((x)=> {
  console.log("x", x.toJSON())
  return res.status(201).json({msg:"A Song was nicely posted to the DB"})
}).catch( (error) => {
    console.log('error in addSong in songctrl', error)
    next(error)
  })
}
//delete
module.exports.deleteSingleSong = ( { params: { SongId } }, res, next) => {

  Song.forge({SongId: SongId})
  .where('SongId','=', SongId)
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
