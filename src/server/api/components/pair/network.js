const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
/**
 * @swagger
 * /api/pair:
 *   get:
 *     description: Consulta deuda de Arnet para un número de línea
 *     tags: [Arnet]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/pair'
 */
router.get('/', list)

// Internal functions
function list(req, res, next) {
    Controller.list()
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch(next);
}

module.exports = router;