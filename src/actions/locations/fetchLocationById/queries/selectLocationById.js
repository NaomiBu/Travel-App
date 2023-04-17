const {submitQuery } = require("~root/lib/database");
const selectLocationById = ({locationID}) => submitQuery`
SELECT * FROM locations
WHERE location_id = ${locationID};
`;

module.exports = selectLocationById;