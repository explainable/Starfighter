/* Copyright Explainable Team:
    Mikayla Rose, Olivia Wentzell, 
    Sebastian Coates, John Tagliaferro, Logan Herodes, Aidan Fike
   All Rights Reserved
*/
var express = require('express');
var path = require('path')

/* Project Modules */

/* App Variables */
const DEFAULT_PORT = 8002
var app = express();

/********************************** Routing ***********************************/
app.use(express.static(path.join(__dirname, 'static')));

const html_path = filename => {return (path.join(__dirname, "static", "html", filename))}

const routes = {
    '/': "index.html",
    '/about': "about.html",
    '/how-it-works': "works.html",
}
app.get(Object.keys(routes), (req, res) => {res.sendFile(html_path(routes[req.path]))})
/******************************** End Routing *********************************/

app.listen((process.env.PORT || DEFAULT_PORT), function() {
    console.log('Node app is running on port: ' + (process.env.PORT || DEFAULT_PORT));
});