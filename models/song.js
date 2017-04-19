'use strict'
const  { bookshelf } = require('../musichistory.db');

// <Define a model using bookshelf that describes a song object
const Song = bookshelf.Model.extend({
  tableName: 'Song',

  getAllSongs: ()=> {
    return this.forge()
    .fetchAll()
    .then( (songs) => {
      return songs
    })
    .catch( (error) => {
      console.log("error from getAllSongs", error)
      return error
    })
  },
  // static methods for getting one or all songs from the db>
  getSingleSong: (id) => {
    return this.forge({id})
    .fetch()
    .then( (song) => {
      return song;
    })
    .catch( (error) => {
      console.log("error from getSingleSong", error)
      return error;
    })

  }
})




// When adding the 'table' property use your old friend DB Browser for SQLite to
// open up the musichistory db and inspect the tables. Add the appropriate table name for
// interfacing with the songs collection
model.exports = bookshelf.model('Song', Song)
