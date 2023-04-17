const { submitQuery} = require("~root/lib/database");
  
const insertLocation = ({ name, country, photo, description, date_created}) => submitQuery`
INSERT INTO locations (name, country, photo, description, date_created)
VALUES (${name}, ${country}, ${photo}, ${description}, ${date_created});
`;

module.exports = insertLocation;
