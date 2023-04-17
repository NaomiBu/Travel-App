const insertLocation = require("./queries/insertLocation");
  
  const createLocation = async ({ name, country, photo, description, date_created }) => {
      const LocationId = await insertLocation({ name, country, photo, description, date_created });
      return { LocationId };
  };
  
  module.exports = createLocation;