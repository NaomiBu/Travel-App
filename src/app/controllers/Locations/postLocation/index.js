const handleAPIError = require("~root/utils/handleAPIError");
  const createLocation = require("~root/actions/locations/createLocation"); 
  
  
const postLocation = async (req, res) => {
    const { name, country, photo, description, date_created } = req.body;

    try {
        const { LocationId } = await createLocation({ name, country, photo, description, date_created });

        res.status(201).send({
            LocationId
        });
    } catch (err) {
        handleAPIError(res, err);
    }
};

module.exports = postLocation;