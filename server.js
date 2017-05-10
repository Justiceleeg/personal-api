const express = require('express');
const bodyParser = require('body-parser');
const user = require('./user');
const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl');

const app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestJob);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyByGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsByName);
app.get('/skillz', mainCtrl.getSkillz)
app.get('/secrets/:username/:pin',middleware.authorize, mainCtrl.getSecrets)

app.put('/name', mainCtrl.changeName)
app.put('/location', mainCtrl.changeLocation)
app.post('/hobbies', mainCtrl.addHobby)
app.post('/occupations', mainCtrl.addOccupation)
app.post('/family', mainCtrl.addFamily)
app.post('/restaurants', mainCtrl.addRestaurant)
app.post('/skillz',middleware.generateId ,mainCtrl.addSkillz)

app.listen(8000,function(){
  console.log('listening on 8000')
})
