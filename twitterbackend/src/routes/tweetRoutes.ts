import { Router } from "express";

const router = Router();


// Tweet Crud
router.post('/', (req, res) => {
    res.status(501).json({ error: 'While Error Not Implemented' })
})

// List Tweet
router.get('/', (req, res) => {
    res.status(501).json({ error: 'While Error Not Implemented' })
})

// get one Tweet
router.get('/:id', (req, res) => {
    const { id } = req.params
    res.status(501).json({ error: `While Error Not Implemented ${id}` })
})

// update one Tweet
router.put('/:id', (req, res) => {
    const { id } = req.params
    res.status(501).json({ error: `While Error Not Implemented ${id}` })
})

// get one Tweet
router.delete('/tweet/:id', (req, res) => {
    const { id } = req.params
    res.status(501).json({ error: `While Error Not Implemented ${id}` })
})


export default router