import { Router } from "express";

const router = Router();


// User Crud
router.post('/', (req, res) => {
    res.status(501).json({ error: 'While Error Not Implemented' })
})

// List User
router.get('/', (req, res) => {
    res.status(501).json({ error: 'While Error Not Implemented' })
})

// get one user
router.get('/:id', (req, res) => {
    const { id } = req.params
    res.status(501).json({ error: `While Error Not Implemented ${id}` })
})

// update one user
router.put('/:id', (req, res) => {
    const { id } = req.params
    res.status(501).json({ error: `While Error Not Implemented ${id}` })
})

// get one user
router.delete('/:id', (req, res) => {
    const { id } = req.params
    res.status(501).json({ error: `While Error Not Implemented ${id}` })
})


export default router