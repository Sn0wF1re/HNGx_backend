const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

// connect to MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// mount the routes
const personRoutes = require('./routes/personRoutes');

app.use('/api', personRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
