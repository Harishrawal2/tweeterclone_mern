import { Router } from "express";
import { PrismaClient } from '@prisma/client'

const router = Router();
const prisma = new PrismaClient();


// User Crud
router.post('/', async (req, res) => {
    const { email, name, username } = req.body;

    try {
        const result = await prisma.user.create({
            data: {
                email,
                name,
                username,
                bio: "Hello, I'm on Twitter",
            }
        })
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Username and Email should be Unique" })
    }
})

// List User
router.get('/', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

// get one user
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id: Number(id) } })
    res.json(user)
})

// update one user
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { bio, name, image } = req.body;
    try {
        const result = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                bio, name, image
            }
        })
        res.json(result)
    } catch (error) {
        res.status(400).json({ error: "Faild update the User" })
    }
    res.status(501).json({ error: `While Error Not Implemented ${id}` })
})

// get one user
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: Number(id) } })
    res.sendStatus(200).json({ messgae: `User Deleted Successfully` })
})


export default router