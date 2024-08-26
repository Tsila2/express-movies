const express = require('express');
const app = express();

app.use('/static', express.static('public'));

const PORT = 3000;
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/movies', (req, res) => {
    const title = "Listes des films";
    const movies = [
        { title: 'Le fabuleux destin d\'Amélie Poulin', year: 2001 },
        { title: 'Buffet froid', year: 1979 },
        { title: 'Le dinner de cons', year: 1998 },
        { title: 'De rouille et d\'os', year: 2012 },
    ];

    // res.send('Bientôt des films ici');
    res.render('movies', { movies: movies, title: title })
})

app.get('/movies/add', (req, res) => {
    res.send(`Bientôt un formulaire ici`);
})

app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    // res.send(`Film numéro ${id}`);
    const title = "Terminator";
    res.render('movies-details', { moviesId: id, title: title })
})

app.get('/', function (req, res) {
    // res.send('Hello <b>world</b>');
    res.render('index');
})

app.listen(PORT, function () {
    console.log(`listening in port ${PORT}`);
})