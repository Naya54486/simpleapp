var express = require('express');
var router = express.Router();


// Require our controllers.
var teamyusuf_controller = require('../controllers/teamyusufController'); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/create
router.post('/create', teamyusuf_controller.create_post); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/destroy
router.get('/:user_id/destroy', teamyusuf_controller.delete_user_get); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamyusufs/create
router.post('/:user_id/teamyusufs/create', teamyusuf_controller.create_teamyusuf_post);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamyusufs/:teamyusuf_id/destroy
router.get('/:user_id/teamyusufs/:teamyusuf_id/destroy', teamyusuf_controller.delete_user_teamyusuf_get);

module.exports = router;