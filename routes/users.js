import express from 'express';
import { displayUsers, createUser, findUser, deleteUser, profileUpdate} from '../controllers/users.js';


const router = express.Router();



/*all routes here starts 
with slash users so no need to include it.
This route displays all users */
router.get('/', displayUsers);

//creates a new user
router.post('/', createUser);

//to get a particular user from the database
router.get('/:id', findUser);

//to delete a user 
router.delete('/:id', deleteUser);

//to update a profile
router.patch('/:id', profileUpdate);


export default router;