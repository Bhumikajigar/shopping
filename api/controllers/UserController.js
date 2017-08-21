/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	'new' :function(req, res)
	{
		res.view();
	
	},
	
	'show': function (req, res, next){
		Movie.findOne({'id': req.params['id']}, function(err, movie) {
          res.view({
          	Static: show
          });
    	});	
	},
};

