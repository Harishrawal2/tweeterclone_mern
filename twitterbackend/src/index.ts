import express from 'express'
import userRoutes from './routes/userRoutes'
import tweetRoutes from './routes/tweetRoutes'
import authRoutes from './routes/authRoutes'
import { authenticationToken } from './middlewares/middleware'

const app = express();
app.use(express.json());
app.use(('/api/user'), authenticationToken, userRoutes)
app.use('/api/tweet', authenticationToken, tweetRoutes)
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(8000, () => {
    console.log("Server is Connencted on Port 8000");

})

