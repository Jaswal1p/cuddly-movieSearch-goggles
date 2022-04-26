const { Schema } = require('mongoose');


const movieSchema = new Schema(
  {
    externalMovieId: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    voteCount: {
      type: Number
    },
    rating: {
      type: Number
    },
    releaseDate: {
      type: String,
    },
    overview: {
      type: String,
      required: true,
    },
    trailer: {
      type: String,
    },
    poster: {
      type: String,
    },
    likedUsers: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
      validate: (arr) => {
        return arr.filter(v => v === null).length === 0;
      }
    }],
    dislikedUsers: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
      validate: (arr) => {
        return arr.filter(v => v === null).length === 0;
      }
    }]
   
  }
  
);

const Movie = model('Movie', movieSchema);

module.exports = movieSchema;
