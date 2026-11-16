import * as Ingredient from "../entities/Ingredient.js";
import { fail, validateId, validateIngredient } from "../validation.js";

export function list(req, res) {
  res.json(Ingredient.findAll());
}

export function get(req, res) {
  const id = validateId(req.params.id);
  const ingredient = Ingredient.findById(id);
  if (!ingredient) fail(404, `Ingredient ${id} not found`);
  res.json(ingredient);
}

export function create(req, res) {
  const data = validateIngredient(req.body);
  const ingredient = Ingredient.create(data);
  res
    .status(201)
    .location(`/api/ingredients/${ingredient.id}`)
    .json(ingredient);
}

export function update(req, res) {
  const id = validateId(req.params.id);
  const data = validateIngredient(req.body);
  const ingredient = Ingredient.update(id, data);
  if (!ingredient) fail(404, `Ingredient ${id} not found`);
  res.json(ingredient);
}

export function remove(req, res) {
  const id = validateId(req.params.id);
  if (!Ingredient.remove(id)) fail(404, `Ingredient ${id} introuvable.`);
  res.status(204).end();
}
