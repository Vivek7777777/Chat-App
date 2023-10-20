const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors({origin: true}));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
