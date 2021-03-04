const app = require('express');
const todoCtrl = require('../controllers/todo')
const router = app.Router()

// 

router.get("/", todoCtrl.getTodos)
router.post("/create", todoCtrl.createItem)

module.exports = router