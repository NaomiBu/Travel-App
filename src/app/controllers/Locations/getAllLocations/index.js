const handleAPIError = require("~root/utils/handleAPIError");
const fetchAllLocations = require("~root/actions/locations/fetchAllLocations");

const getAllLocations = async (req, res) => {

    try {
        const {locations} = await fetchAllLocations ();
        res.status(201).send({
            locations
        })

    } catch (error) {
        handleAPIError(res, error);
    }
}


module.exports = getAllLocations;
