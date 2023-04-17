const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");
const postLocation = require("./controllers/Locations/postLocation");
const getLocationById = require("./controllers/Locations/getLocationById");
const getAllLocations = require("./controllers/Locations/getAllLocations")
const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

router.post("/locations", postLocation);
router.get("/location/locationID", getLocationById);
router.get("/locations", getAllLocations)

module.exports = router;
