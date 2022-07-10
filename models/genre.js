var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: {type: String, required: true, minLength: 3, maxLength: 100},
    }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
    return '/catalog/genre/' + this._id;
});

GenreSchema
.virtual('genre_name')
.get(function () {
    var genre_name = '';
    if (this.name) {
        genre_name += this.name;
    }
    return genre_name
})

// Export model
module.exports = mongoose.model('Genre', GenreSchema);