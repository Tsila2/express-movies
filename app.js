const express = require('express');
const app = express();

app.use('/static', express.static('public'));

const PORT = 3000;
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req, res) => {
    res.send('Bientôt des films ici');
})

app.get('/movies/add', (req, res) => {
    res.send(`Bientôt un formulaire ici`);
})

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Film numéro ${id}`);
})

app.get('/', function (req, res) {
    // res.send('Hello <b>world</b>');
    res.render('index'); 
})

app.listen(PORT, function () {
    console.log(`listening in port ${PORT}`);
})