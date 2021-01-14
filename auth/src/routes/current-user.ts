import express from 'express'
import { currentuser } from '@dgptickets/ticketing-common'

const router = express.Router()

router.get(
  '/api/users/currentuser',
  currentuser,

  async (req, res) => {
    return res.send({ currentUser: req.currentUser || null })
  }
)

export { router as currentUserRouter }
