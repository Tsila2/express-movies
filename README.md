installation avec npm init 
npm i express 
simple route creation for ('/') then start with node app.js
script creation with npm i -g nodemon

route (app.js) and dynamic route
render (app.js) npm i ejs (view engine) + views

Run "npm run dev" for developpement
Run "npm start" for production

static folder (public) (this is a middleware)
sending data to the views (app.js in /movies)
partials template (app.js) (views/partials/footer.ejs) (views/partials/footer.ejs)and header with navigation
datas iterations , sending complex data (array or json) (movies)
POST form (movies) (app.js) post  , npm i body-parser (this is a middleware)
memory persistency (add the data into the jsonarray) (movies)
using ajax with fetch post  (movies) after npm i multer (this is a middleware)
API Rest from themoviedb.org
using axios npm i axios (movies-search)
login authentification via jwt (login)
storage inside the browser and view condition (footer / header / login )
token decoded and displayed (login/parseJwt)
protected route with express-jwt npm i express-jwt (app)
route error handling (app) + (unauthorized)
authorization header via thunder client header / via axios (member-only / login)

using mongodb with mongoose npm i mongoose (app)
using faker to generate fake data npm install --save-dev @faker-js/faker (app)
form creation for adding data (movies post)
data recuperation (movies)
environnement variable in .env npm install dotenv after config.js
update data using PUT thunder client and findByIdAndUpdate (movies:id put)
update data via a form (movies/:id get) dynamic link (movies)
delete data via axios using DELETE (movies/:id)