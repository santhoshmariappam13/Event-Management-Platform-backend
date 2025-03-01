require('dotenv').config(); 

const express = require('express');
const app = express();
const connectDB = require('./src/config/db');
const paymentRoutes = require('./src/routes/paymentRoutes');

connectDB();


app.use(express.json()); 


app.use('/api', paymentRoutes); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
