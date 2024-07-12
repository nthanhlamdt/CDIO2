import express from 'express';
import { AddFriend, acceptFriend, cancelFriend, getAddFriend, getFriend } from '../controllers/friend.controller.js';
import protectRoute from '../middleware/protectRoute.js'

const router = express.Router();

router.post('/', protectRoute, AddFriend);
router.get('/getaddfriend', protectRoute, getAddFriend);
router.patch('/accept', protectRoute, acceptFriend);
router.get('/getfriend', protectRoute, getFriend);
router.delete('/cancelfriend', protectRoute, cancelFriend);


export default router;
