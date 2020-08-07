import express from 'express';

const app = express();

app.get('/users', (request, response)  => {
    const users = [
        { name: 'Saymon', age: 22 },
        { mame: 'Macedo', age: 54 },
    ]

    return response.json(users);

});

app.post('/users', (request, response)  => {
    const users = [
        { name: 'Saymon', age: 22 },
        { mame: 'Macedo', age: 54 },
    ]

    return response.json(users);

});
app.listen(3333);