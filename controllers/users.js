import {v4 as uuidv4} from 'uuid';


let userDatabase =[];

//display all users in the database 
export const displayUsers = (req, res) => {
    res.send(userDatabase);
}

//this route creates a new user
export const createUser = (req, res) => {
    const user = req.body;

    //create a user identifier using uuidv4
    const userId = uuidv4();

    //to add the ID to the user being created
    //create an object and spreed the property
    //of user to include the id.
    const userWithId = { ...user, id: userId}

    //to update the user array with the id,
    userDatabase.push(userWithId);
    //message to the user
    res.send(`User with the name ${user.firstName} created successfully`);
}

//find a user from the user databases
export const findUser = (req, res) => {
    const { id } = req.params;
    const foundUser = userDatabase.find((user) => user.id === id);

    res.send(foundUser);
}

//To delete user from the user databases
export const deleteUser = (req, res) => {
    const { id } = req.params;
    userDatabase = userDatabase.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted successfully`);
}

//To update profile 
export const profileUpdate = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, age } = req.body;

    const userToBeUpdated = userDatabase.find((user) => user.id === id);

    if(firstName) userToBeUpdated.firstName = firstName;
    if(lastName) userToBeUpdated.lastName = lastName;
    if(email) userToBeUpdated.email = email;
    if(age) userToBeUpdated.age = age;

    res.send(`User with the id ${id} has been updated successfully`);

}