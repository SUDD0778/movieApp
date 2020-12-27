"use strict";
// const AUTH = require('./services/auth.controller');
const cors = require('cors');

module.exports = (app)=>{

	app.use('/api/v1/user',require('./user'));
	app.use('/api/v1/movies',require('./movies'));
	app.use('/api/v1/userActivity',require('./userActivity'));

}
