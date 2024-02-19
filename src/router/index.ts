import express        from 'express'
import authentication from './authentication'
import users          from './user'
import recipes        from './recipe'

const router = express.Router()

export default (): express.Router => {
    authentication(router)
    users(router)
    recipes(router)

    return router
}