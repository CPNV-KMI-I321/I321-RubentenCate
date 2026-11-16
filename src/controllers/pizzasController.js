import * as Pizza from "../entities/Pizza.js";
import { fail, validateId, validatePizza } from "../validation.js";

export function list(req, res) {
  res.json(Pizza.findAll());
}

export function get(req, res) {
  const id = validateId(req.params.id);
  const pizza = Pizza.findById(id);
  if (!pizza) fail(404, `Pizza ${id} not found`);
  res.json(pizza);
}

export function create(req, res) {
  const data = validatePizza(req.body);
  const pizza = Pizza.create(data);
  res.status(201).location(`/api/pizzas/${pizza.id}`).json(pizza);
}

export function update(req, res) {
  const id = validateId(req.params.id);
  const data = validatePizza(req.body);
  const pizza = Pizza.update(id, data);
  if (!pizza) fail(404, `Pizza ${id} not found`);
  res.json(pizza);
}

export function remove(req, res) {
  fail(501, "TODO : supprimer la ressource");
}
