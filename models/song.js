'use strict'
const { bookshelf } = require('../db/database');

// <Define a model using bookshelf that describes a song object
const Song = bookshelf.Model.extend({
      tableName: 'Song',
      },
      {

        getAllSongs: function() {
          return this.forge()
            .fetchAll()
            .then((songs) => {
              return songs
            })
            .catch((error) => {
              console.log("error from getAllSongs", error)
              return error
            })
          }, //getall songs close


          // static methods for getting one or all songs from the db>
          getSingleSong: function (id) {

            return this.forge({ SongId: id })
              .fetch()
              .then((song) => {
                return song;
              })
              .catch((error) => {
                console.log("error from getSingleSong", error)
                return error;
              })

          } //getsinglesong close

      }) //static





    // When adding the 'table' property use your old friend DB Browser for SQLite to
    // open up the musichistory db and inspect the tables. Add the appropriate table name for
    // interfacing with the songs collection
    module.exports = bookshelf.model('Song', Song)
