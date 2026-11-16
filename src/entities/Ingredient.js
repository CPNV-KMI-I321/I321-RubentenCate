import { db } from "../config/database.js";

export function findAll() {
  return db.prepare("SELECT * FROM ingredients ORDER BY id").all();
}

export function findById(id) {
  return db.prepare("SELECT * FROM ingredients where id = ?").get(id);
}

export function create(data) {
  const result = db
    .prepare("INSERT into ingredients (name, price) VALUES (?, ?)")
    .run(data.name, data.price);
  return findById(result.lastInsertRowid);
}

export function update(id, data) {
  db.prepare("UPDATE ingredients SET name = ?, price = ? WHERE id = ?").run(
    data.name,
    data.price,
    id,
  );
  return findById(id);
}

export function remove(id) {
  const result = db.prepare("DELETE FROM ingredients WHERE id = ?").run(id);
  return result.changes > 0;
}
