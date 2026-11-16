import { db } from "../config/database.js";
import { fail } from "../validation.js";

export function findAll() {
  return db.prepare("SELECT * FROM pizzas ORDER BY id").all();
}

export function findById(id) {
  return db.prepare("SELECT * FROM pizzas where id = ?").get(id);
}

export function create(data) {
  const result = db
    .prepare(
      "INSERT INTO pizzas (description, name, price, imageUrl) VALUES (?, ?, ?, ?)",
    ).run(data.description, data.name, data.price, data.imageUrl);
  return findById(result.lastInsertRowid);
}

export function update(id, data) {
  db.prepare(
    "UPDATE pizzas SET description = ?, name = ?, price = ?, imageUrl = ? WHERE id = ?",
  ).run(data.description, data.name, data.price, data.imageUrl, id);
  return findById(id);
}

export function remove(id) {
  const result = db.prepare(
    "DELETE FROM pizzas WHERE id = ?",
  ).run(id);
  return result.changes > 0;
}
