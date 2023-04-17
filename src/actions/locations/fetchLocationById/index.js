const selectLocationById = require("./queries/selectLocationById");

 const fetchLocationById = async ({locationID}) => {
    const location = await selectLocationById({locationID}) ;
    return {location}
    };

  
  module.exports = fetchLocationById;