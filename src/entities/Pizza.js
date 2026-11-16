import { db } from '../config/database.js';
import { fail } from '../validation.js';

export function findAll() {
  return db.prepare('SELECT * FROM pizzas ORDER BY id').all();
}

export function findById(id) {
  fail(501, 'TODO : SELECT par identifiant');
}

export function create(data) {
  fail(501, 'TODO : INSERT paramétré');
}

export function update(id, data) {
  fail(501, 'TODO : UPDATE paramétré');
}

export function remove(id) {
  fail(501, 'TODO : DELETE paramétré');
}
