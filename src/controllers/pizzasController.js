import * as Pizza from '../entities/Pizza.js';
import { fail } from '../validation.js';

export function list(req, res) {
  res.json(Pizza.findAll());
}

export function get(req, res) {
  fail(501, 'TODO : consulter la ressource');
}

export function create(req, res) {
  fail(501, 'TODO : créer la ressource');
}

export function update(req, res) {
  fail(501, 'TODO : modifier la ressource');
}

export function remove(req, res) {
  fail(501, 'TODO : supprimer la ressource');
}
