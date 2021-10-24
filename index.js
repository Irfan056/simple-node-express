const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json())

const port = 5000;
app.get('/', (req, res) => {
    res.send('Welcome to my first node application');
});
const users = [
    { id: 1, name: 'savana', email: 'savana@gmail.com', phone: "018846476859" },
    { id: 2, name: 'popy', email: 'popy@gmail.com', phone: "018846476859" },
    { id: 3, name: 'savnor', email: 'savnor@gmail.com', phone: "018846476859" },
    { id: 4, name: 'Bijli', email: 'bijhli@gmail.com', phone: "018846476859" },
    { id: 5, name: 'Moyuri', email: 'moyuri@gmail.com', phone: "018846476859" },

]
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

//app method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body)
    res.json(newUser);
})

//dynamic Apis
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'apple', 'banana']);
});

app.get('/fruits/mangoes/fajli', (req, res) => {
    res.send('Yummy Tok marka fajli')
});

app.listen(port, () => {
    console.log('listening to port', port);
});