import express from 'express';
import adminAuthentication from './routes/AdminRoutes/authentication.mjs'
import userAuthentication from './routes/UserRoutes/authentication.mjs'
import dealerAuthentication from './routes/DealerRoutes/authentication.mjs'
import dealerOperations from './routes/DealerRoutes/operations.mjs'
import userOperations from './routes/UserRoutes/operations.mjs'
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors())
// AUTHENTICATION API ROUTES 
app.use('/api/admin/auth', adminAuthentication)
app.use('/api/user/auth', userAuthentication)
app.use('/api/dealer/auth', dealerAuthentication)

// User Specific Endpoints

app.use('/api/user/', userOperations)


// Dealer Specific Endpoints

app.use('/api/dealer/', dealerOperations)



// Admin Specific Endpoints



//====================================================//

export default app;
