const handleAPIError = require("~root/utils/handleAPIError");
  const fetchLocationById = require("~root/actions/locations/fetchLocationById"); 


  
const getLocationById = async (req, res) => {
    const {locationID} = req.params; 
    
        try {
            const {location} = await fetchLocationById ({locationID});
            res.status(201).send({
                location
            })
    
        } catch (error) {
            handleAPIError(res, error);
        }
    }
    
    
    module.exports = getLocationById;
    
