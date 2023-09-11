const mysql = require('mysql');


const dbConfig = {
  host: 'localhost',
  user: 'luty',
  password: 'password',
  database: 'subjectsty',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

const Subject = {
  getAllSubjects: (callback) => {
    connection.query('SELECT * FROM subjects', callback);
  },
  getSubjectById: (id, callback) => {
    const query = 'SELECT * FROM subjects WHERE id = ?';
    connection.query(query, [id], (err, subject) => {
      if (err) {
        console.error('Error fetching subject by ID:', err);
        callback(err, null);
      } else {
        if (subject.length === 0) {
          callback(null, null); // La materia no fue encontrada
        } else {
          callback(null, subject[0]); // Devuelve la primera materia encontrada (debería ser única por ID)
        }
      }
    });
  },
  createSubject: (newSubject, callback) => {
    const query = 'INSERT INTO subjects SET ?';

    connection.query(query, newSubject, (err, result) => {
      if (err) {
        console.error('Error creating subject:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  updateSubject: (id, updatedSubject, callback) => {
    const query = 'UPDATE subjects SET ? WHERE id = ?';

    connection.query(query, [updatedSubject, id], (err, result) => {
      if (err) {
        console.error('Error updating subject:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },

  deleteSubject: (id, callback) => {
    const query = 'DELETE FROM subjects WHERE id = ?';

    connection.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error deleting subject:', err);
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },
};

module.exports = Subject;