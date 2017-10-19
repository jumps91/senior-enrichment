'use strict';

const api = require('express').Router();
const db = require('../db');

api.get('/campus', (req, res, next) => {
	db.models.campus.findAll()
		.then(data => res.send(data))
		.catch(next);
});

api.get('/campus/:campusId', (req, res, next) => {
	db.models.campus.findOne(
		{ where: { id: req.params.campusId } })
		.then(data => res.send(data))
		.catch(next);
});

api.get('/student', (req, res, next) => {
	db.models.student.findAll()
		.then(data => res.send(data))
		.catch(next);
});

api.get('/student/:studentId', (req, res, next) => {
	db.models.student.findOne(
		{
			where: { id: req.params.studentId },
			include: { all: true }
		})
		.then(data => res.send(data))
		.catch(next);
});

api.get('/student/:campusId/students', (req, res, next) => {
	db.models.student.findAll(
		{ where: { campusId: req.params.campusId } })
		.then(data => res.send(data))
		.catch(next);
});

api.post('/campus', (req, res, next) => {
	db.models.campus.create(req.body)
		.then(created => (res.json(created)))
		.catch(next);
});

api.post('/student', (req, res, next) => {
	db.models.student.create(req.body)
		.then(created => (res.json(created)))
		.catch(next);
});

api.put('/campus/:campusId', (req, res, next) => {
	db.models.campus.update(
		req.body,
		{ where: { id: req.params.campusId } }
	)
		.then(res.sendStatus(202))
		.catch(next);
});

api.put('/student/:studentId', (req, res, next) => {
	db.models.student.update(
		req.body,
		{ where: { id: req.params.studentId } }
	)
		.then(res.sendStatus(202))
		.catch(next);
});

api.delete('/campus/:campusId', (req, res, next) => {
	db.models.campus.destroy(
		{ where: { id: req.params.campusId } }
	)
		.then(res.send('deleted'))
		.catch(next);
});

api.delete('/student/:studentId', (req, res, next) => {
	db.models.student.destroy(
		{ where: { id: req.params.studentId } }
	)
		.then(res.send('deleted'))
		.catch(next);
});


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({ hello: 'world' }))

module.exports = api