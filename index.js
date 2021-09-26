import express from 'express';
import bodyParser from 'body-parser';
import usersRoute from './routes/users.js';

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

//to use the userRoutes from users in route folders
app.use('/users', usersRoute);


//response to the browser from the server for a get homepage
app.get('/', (req, res) => res.send("Hello from Homepage"));
  


//The port on which the server is listening
app.listen(PORT, () => {
    console.log(`The server is listening on port: http://localhost:${PORT}`)
}) 