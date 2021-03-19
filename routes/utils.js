const express = require('express');
const { getClubs, createClub, deleteClub, getClub } = require('../controllers/utilsController');

const router = express.Router();

router.route('/clubs')
        .get(getClubs)
        .post(createClub)
router.route('/clubs/:id')
        .get(getClub)
        .delete(deleteClub)

module.exports = router;