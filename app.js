const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()
const jsonWebToken = require('jsonwebtoken')
var { expressjwt: jwt } = require("express-jwt");

const secret = "qsdjS12ozehdoIJ123DJOZJLDSCqsdeffdg123ER56SDFZedhWXojqshduzaohduihqsDAqsdq"

app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(
    jwt({
      secret: secret,
      algorithms: ["HS256"],
    }).unless({ path: ["/login","/"] })
  );


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

app.get('/movie-search', (req, res) => {
    res.render('movie-search')
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

app.get('/login', (req, res) => {
    res.render('login', { title: "Espace membre" })
})

const users = { email: "tsilanmjr@gmail.com", password: "123456789" };
// const secret = "qsdjS12ozehdoIJ123DJOZJLDSCqsdeffdg123ER56SDFZedhWXojqshduzaohduihqsDAqsdq"

app.post('/login', upload.fields([]), (req, res) => {
    console.log("login post", req.body); // Should now print the parsed body
    if (!req.body) {
        res.sendStatus(501);
    } else {
        if (users.email === req.body.email && users.password === req.body.password) {
            const myToken = jsonWebToken.sign({ iss: 'http://localhost:3000', user: 'Sam', scope: 'client' }, secret)
            // res.json({
            //     email: "tsilanmjr@gmail.com",
            //     favoriteMovie: "Deadpool",
            //     lastLoginDate: new Date().toLocaleDateString()
            // });
            res.json(myToken)
        } else {
            res.sendStatus(401);
        }
    }
});

app.listen(PORT, function () {
    console.log(`listening in port ${PORT}`);
})