const subjectService = require('../services/subjectServices');


exports.getAllSubjects = (req, res) => {
  subjectService.getAllSubjects((err, subjects) => {
    if (err) {
      res.status(500).json({ error: 'Error del Server' });
    } else {
      res.status(200).json(subjects);
    }
  });
};

exports.getSubjectById = (req, res) => {
  const subjectId = req.params.id;

  subjectService.getSubjectById(subjectId, (err, subject) => {
    if (err) {
      res.status(500).json({ error: 'Error del Server' });
    } else if (!subject) {
      res.status(404).json({ error: 'Subject no encontrado' });
    } else {
      res.status(200).json(subject);
    }
  });
};


exports.createSubject = (req, res) => {
  const newSubject = {
    name: req.body.name,
    description: req.body.description,
    credits: req.body.credits,
    professor: req.body.professor,
  };

  subjectService.createSubject(newSubject, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error del Server' });
    } else {
      res.status(201).json({ message: 'Subject creado de manera Exitosa' });
    }
  });
};

exports.updateSubject = (req, res) => {
  const subjectId = req.params.id;
  const updatedSubject = {
    name: req.body.name,
    description: req.body.description,
    credits: req.body.credits,
    professor: req.body.professor,
  };

  subjectService.updateSubject(subjectId, updatedSubject, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error del Server' });
    } else if (!result.affectedRows) {
      res.status(404).json({ error: 'Subject no encontrado' });
    } else {
      res.status(200).json({ message: 'Subject cambiado de manera Exitosa' });
    }
  });
};


exports.deleteSubject = (req, res) => {
  const subjectId = req.params.id;

  subjectService.deleteSubject(subjectId, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error del Server' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Subject no encontrado' });
    } else {
      res.status(200).json({ message: 'Subject borrado de manera Exitosa' });
    }
  });
};