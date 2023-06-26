import express from 'express'
import {getAllMembers} from '../controllers/members.controller.js'

const app = express.Router()

app.get('/',getAllMembers)

export default app