const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`App is runnig on port ${PORT} ...`));
