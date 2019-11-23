const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

/** Conection to the Database */
mongoose.connect('mongodb://localhost/crud-mongo')
        .then(db => console.log('DB Connected'))
        .catch(err => console.log(err));

/**Importing Routes */
const webRoutes = require('./routes/web');

/**Settings */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/**middlewares */
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

/**Routes */
app.use('/', webRoutes);
/**Starting the Server */
 
app.listen(app.get('port'), () =>{
     console.log(`Server on port ${app.get('port')}`);
 });