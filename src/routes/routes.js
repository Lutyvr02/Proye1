
const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');


/**
 * @swagger
 * /api/subjects:
 *   get:
 *     summary: Obtiene una lista de todas las materias disponibles.
 *     tags:
 *       - Subjects
 *     responses:
 *       '200':
 *         description: Lista de materias obtenida correctamente.
 *       '500':
 *         description: Error del servidor.
 */
router.get('/api/subjects', subjectController.getAllSubjects);

/**
 * @swagger
 * /api/subjects/:id :
 *   get:
 *     summary: Obtiene una materia.
 *     tags:
 *       - Subjects
 *     responses:
 *       '200':
 *         description: Se tiene de la materia correctamente.
 *       '500':
 *         description: Error del servidor.
 */
router.get('/api/subjects/:id', subjectController.getSubjectById);

/**
 * @swagger
 * /api/subjects:
 *   post:
 *     summary: Se crea una materia.
 *     tags:
 *       - Subjects
 *     responses:
 *       '200':
 *         description: Se creo la materia.
 *       '500':
 *         description: Error del servidor.
 */
router.post('/api/subjects', subjectController.createSubject);

/**
 * @swagger
 * /api/subjects/:id:
 *   put:
 *     summary: Se modifica una materia.
 *     tags:
 *       - Subjects
 *     responses:
 *       '200':
 *         description: Se modifico la materia.
 *       '500':
 *         description: Error del servidor.
 */
router.put('/api/subjects/:id', subjectController.updateSubject);

/**
 * @swagger
 * /api/subjects/:id:
 *   delete:
 *     summary: Se elimina una materia.
 *     tags:
 *       - Subjects
 *     responses:
 *       '200':
 *         description: Se elimino la materia.
 *       '500':
 *         description: Error del servidor.
 */
router.delete('/api/subjects/:id', subjectController.deleteSubject);


module.exports = router;