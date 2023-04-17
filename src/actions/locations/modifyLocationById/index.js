const updateLocationById = require("./queries/updateLocationById");

const modifyLocationById = async ({ ,genre, name}) => {
    const artist = await updateLocationById ({
artistId,
genre,
name
    });

    return {artist}; 
};

module.exports = modifyArtistById; 