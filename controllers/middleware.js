const skills = require('../skillz');

module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    })

    next();
  },

  generateId: function(req, res, next) {
    req.body.id = skills.length+1

    next();
  },

  authorize: function(req, res, next){
    let usernameInput = req.params.username;
    let pinInput = req.params.pin;
    const pin = '123456';
    const username = 'CoolGuy93'
    if (pin == pinInput && username == usernameInput){
      next()
    } else {
      res.status(404).json({"Error Message": "Unauthorized!"})
    }

  }

}
