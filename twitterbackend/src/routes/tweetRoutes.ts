import { Router } from "express";
import { PrismaClient } from '@prisma/client'

const router = Router();
const prisma = new PrismaClient();


// Tweet Crud
router.post('/', async (req, res) => {
    const { content, image, userId } = req.body;
    try {
        const result = await prisma.tweet.create({
            data: {
                content,
                image,
                userId
            }
        })
        res.json(result)
    } catch (error) {
        res.status(400).json({ error: "Username and Email should be Unique" })
    }
})

// List Tweet
router.get('/', async (req, res) => {
    const allTweets = await prisma.tweet.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    username: true,
                    image: true,
                }
            }
        }
    });
    res.json(allTweets)
})

// get one Tweet
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const tweet = await prisma.tweet.findUnique({ where: { id: Number(id) } })
    if (!tweet) {
        res.status(404).json({ message: "Tweet Not Found" })
    } else {
        res.json(tweet)
    }
})

// update one Tweet
router.put('/:id', (req, res) => {
    const { id } = req.params
    res.status(501).json({ error: `While Error Not Implemented ${id}` })
})

// get one Tweet
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.tweet.delete({ where: { id: Number(id) } })
    res.sendStatus(200)
})


export default router