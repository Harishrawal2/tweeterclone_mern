import express from 'express'
import userRoutes from './routes/userRoutes'
import tweetRoutes from './routes/tweetRoutes'

const app = express();
app.use(express.json());
app.use(('/api/user'), userRoutes)
app.use('/api/tweet', tweetRoutes)

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(8000, () => {
    console.log("Server is Connencted on Port 8000");

})

