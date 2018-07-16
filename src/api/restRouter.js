import express from 'express'

import { playlistRouter } from './resources/playlist/playlist.restRouter'
import { userRouter } from './resources/user/user.restRouter'
import { songRouter } from './resources/song/song.restRouter'


export const restRouter = express.Router()

restRouter.use('/playlist', playlistRouter)

restRouter.use('/user', userRouter)

restRouter.use('/song', songRouter)


// mount restRouter onto main app router

