import express from 'express'
import { addGroup } from '../controllers/group.controller.js'

const router = express.Router()

router.post('/add', addGroup)
export default router