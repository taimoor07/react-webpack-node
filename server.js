const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))


// app.get('/', (req, res) => {
//     res.send('App Works !!!!');
// });

app.listen(3000, () =>
    console.log('Express server is running on localhost:3000')
);