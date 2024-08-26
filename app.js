const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

app.use('/static', express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }))

const PORT = 3000;
app.set('views', './views');
app.set('view engine', 'ejs');

let movies

app.get('/movies', (req, res) => {
    const title = "Listes des films";
    movies = [
        { title: 'Le fabuleux destin d\'Amélie Poulin', year: 2001 },
        { title: 'Buffet froid', year: 1979 },
        { title: 'Le dinner de cons', year: 1998 },
        { title: 'De rouille et d\'os', year: 2012 },
    ];

    // res.send('Bientôt des films ici');
    res.render('movies', { movies: movies, title: title })
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.post('/movies', urlencodedParser, (req, res) => {
//     console.log(req.body)

//     const newMovie = { title: req.body.movietitle, year: req.body.movieyear }
//     // movies.push(newMovie)
//     movies = [...movies, newMovie]
//     console.log(movies)

//     res.sendStatus(201)
// })

app.post('/movies', upload.fields([]), (req, res) => {
    if (!req.body) {
        return res.sendStatus(501)
    } else {
        const formData = req.body
        console.log('formData : ', formData)
        const newMovie = { title: req.body.movietitle, year: req.body.movieyear }
        movies = [...movies, newMovie]
        console.log(movies)

        res.sendStatus(201)
    }
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