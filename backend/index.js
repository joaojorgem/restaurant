
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/ReservationController')(app);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Server started on port ${port}`));