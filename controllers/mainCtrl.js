var user = require('../user');
var skills = require('../skillz');
var secrets = require('../secrets')

module.exports = {

    getName: function(req, res, next) {

        res.status(200).json({
            name: user.name
        });
    },

    getLocation: function(req, res, next) {
        res.status(200).json({
            location: user.location
        });
    },

    getOccupations: function(req, res, next) {
        let results;
        if (req.query.order == 'asc') {
            result = user.occupations.sort();
        } else if (req.query.order == 'desc') {
            result = user.occupations.reverse();
        } else {
            result = user.occupations;
        }

        res.status(200).json({
            occupations: result
        });
    },

    getLatestJob: function(req, res, next) {
        res.status(200).json({
            latestOccupation: user.occupations[user.occupations.length - 1]
        });
    },

    getHobbies: function(req, res, next) {
        res.status(200).json({
            hobbies: user.hobbies
        });
    },

    getHobbiesByType: function(req, res, next) {
        let type = req.params.type,
            results;
        results = user.hobbies.filter(a => a.type == type)
        res.status(200).json({
            matchingHobbies: results
        });

    },

    getFamily: function(req, res, next) {
        if (req.query.relation) {
            let FAM = [];
            let relation = req.query.relation;
            for (let i = 0; i < user.family.length; i++) {
                if (user.family[i].relation == relation) {
                    FAM.push(user.family[i])
                }
            }
            res.status(200).json({
                family: FAM
            })
        } else {
            res.status(200).json({
                family: user.family
            });
        }
    },

    getFamilyByGender: function(req, res, next) {
        let gender = req.params.gender,
            results;
        results = user.family.filter(a => a.gender == gender)
        res.status(200).json({
            matchingFamily: results
        });

    },

    getRestaurants: function(req, res, next) {
        if (req.query.rating) {
            let YUM = [];
            let rating = parseInt(req.query.rating);
            for (let i = 0; i < user.restaurants.length; i++) {
                if (user.restaurants[i].rating >= rating) {
                    YUM.push(user.restaurants[i])
                }
            }
            res.status(200).json({
                restaurants: YUM
            })
        } else {
            res.status(200).json({
                restaurants: user.restaurants
            });
        }
    },

    getRestaurantsByName: function(req, res, next) {
        let result, name = req.params.name;
        for (let i = 0; i < user.restaurants.length; i++) {
            if (user.restaurants[i].name == name) {
                result = user.restaurants[i]
            }
        }
        res.status(200).json({
            restaurant: result
        });
    },

    changeName: function(req, res, next) {
        const newName = req.body.name;
        user.name = newName;
        res.status(200).json({
            name: newName
        });
    },

    changeLocation: function(req, res, next) {
        const newLocation = req.body.location;
        user.location = newLocation;
        res.status(200).json({
            location: newLocation
        });
    },

    addHobby: function(req, res, next) {
        const newHobby = req.body;
        user.hobbies.push(newHobby)
        res.status(200).json({
            hobbies: user.hobbies
        });

    },

    addOccupation: function(req, res, next) {
        const newOccupation = req.body;
        user.occupations.push(newOccupation)
        res.status(200).json({
            occupations: user.occupations
        });
    },

    addFamily: function(req, res, next) {
        const newFamily = req.body;
        user.family.push(newFamily)
        res.status(200).json({
            family: user.family
        });
    },

    addRestaurant: function(req, res, next) {
        const newRestaurant = req.body;
        user.restaurants.push(newRestaurant)
        res.status(200).json({
            restaurants: user.restaurants
        });
    },

    getSkillz: function(req, res, next) {

        if (req.query.experience) {
            var results = [];

            for (let i = 0; i < skills.length; i++) {
                if (skills[i].experience == req.query.experience) {
                    results.push(skills[i])
                }
            }
        } else {
            var results = skills
        }
        res.status(200).json({
            skillz: results
        });
    },

    addSkillz: function(req, res, next) {
      let newSkill = req.body;

      skills.push(newSkill);

      res.status(200).json({
          skillz: skills
      });
    },
    
    getSecrets: function(req, res, next){
      res.status(200).json({
          secrets: secrets[Math.floor(Math.random()*secrets.length)]
      });
    }
}
