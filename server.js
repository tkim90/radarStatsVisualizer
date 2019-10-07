const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('./dist'));
app.use(morgan('tiny'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
