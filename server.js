const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cors = require('cors')
const morgan = require('morgan')
const { connectDB } = require('./config/db')
const helmet = require('helmet');

// rest object
const app = express();
dotenv.config();

//MongoDB Connection
connectDB();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
app.use(helmet());
//routes
//1 test server
app.use('/api/v1', require('./routes/testRoutes'))
app.use('/api/v1/auth', require('./routes/authRoutes'))
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'))
app.use('/api/v1/analytics', require('./routes/AnalyticsRoutes'));
app.use('/api/v1/admin', require('./routes/AdminRoutes'));
// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });
//Port
const PORT = process.env.PORT || 8080
//listen
app.listen(PORT,()=>{
    console.log(`Server is running ${process.env.DEV} on port ${process.env.PORT}`.bgYellow.white);
})