const Authentication = require('./controlers/authentication');

module.exports = function(app) {
    app.post('/signup', Authentication.signup);
    
     
};