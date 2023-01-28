var express = require('express');
var cors = require('cors')

var ActivitiesRoutes = require('./routes/activities.routes');

// initializations
const app = express();

// settigns
app.set('port', process.env.PORT || 3000);
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// miidlewares
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// routes
app.use(ActivitiesRoutes);


app.get('/', (req, res) => {
    res.send(`API is at http://localhost:${app.get('port')}`)
});

module.exports = app;