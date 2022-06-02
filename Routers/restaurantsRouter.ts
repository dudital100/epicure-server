const restaurantsRouter = require('express').Router();
const {restaurantsController} = require('../Controllers/restaurantsController');

// authRouter.post('/signup' , authController.signUp);
restaurantsRouter.get('/' , restaurantsController.getAllRestaurants);
restaurantsRouter.get('/:id' , restaurantsController.getRestaurant);
restaurantsRouter.post('/add-restaurant' ,restaurantsController.addRestaurant );
restaurantsRouter.put('/update-restaurant' ,restaurantsController.updateRestaurant );
restaurantsRouter.delete('/delete-restaurant' ,restaurantsController.deleteRestaurant );

export default restaurantsRouter;