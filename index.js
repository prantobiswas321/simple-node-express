const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello from my second node');
})

const users = [
    { id: 0, name: 'Gia', email: 'Gia@chipThrills.com', phone: '0101010' },
    { id: 1, name: 'Sia', email: 'sia@chipThrills.com', phone: '0101010' },
    { id: 2, name: 'Mia', email: 'Mia@chipThrills.com', phone: '0101010' },
    { id: 3, name: 'Jia', email: 'Jia@chipThrills.com', phone: '0101010' },
    { id: 4, name: 'Tia', email: 'Tia@chipThrills.com', phone: '0101010' },
    { id: 5, name: 'Snia', email: 'Nia@chipThrills.com', phone: '0101010' },
    { id: 6, name: 'lia', email: 'Lia@chipThrills.com', phone: '0101010' }
];

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    res.send(users);
});

// app METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body);
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    // const id = users[req.params.id];
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    // console.log(req.params.id);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy mango');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})
