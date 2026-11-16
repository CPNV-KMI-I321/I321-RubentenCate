<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/CPNV-KMI-I321/I321-RubentenCate/blob/main/assets/signature-dark-animated.svg?raw=true">
    <img src="https://github.com/CPNV-KMI-I321/I321-RubentenCate/blob/main/assets/signature-light-animated.svg?raw=true" alt="Ruben ten Cate" width="260">
  </picture>
  <br>
  <sub><b>I321</b> · Programmer des systèmes distribués</sub>
  <br>
  <sub>CPNV · CFC Informaticien · 2026</sub>
</p>

# Description
Pizza &amp; Tomato Sauce

API REST du Foodtruck : le pizzaïolo consulte et gère sa carte des pizzas.
Le projet part du starter de l'enseignant ([I321-StarterCode-1](https://github.com/CPNV-KMI-I321/I321-StarterCode-1)), fusionné dans ce dépôt.

# Prérequis

- Node.js **24 LTS** (voir `.nvmrc`)
- Git

# Démarrer

```sh
npm ci
npm start
```

- API : http://localhost:3000
- Swagger : http://localhost:3000/docs

`npm run dev` redémarre le serveur à chaque modification.
La base SQLite est créée automatiquement. Pour personnaliser la configuration, copier `.env.example` vers `.env`.

# Architecture

```text
Client → Route → Controller → Entity → SQLite
```

| Couche | Fichier | Rôle |
|---|---|---|
| Route | `src/routes/pizzas.js` | Associe une méthode HTTP et un chemin à un contrôleur |
| Controller | `src/controllers/pizzasController.js` | Lit `req`, valide, choisit le code HTTP et répond avec `res` |
| Entity | `src/entities/Pizza.js` | Exécute le SQL paramétré, sans `req` ni `res` |
| Base | `src/config/database.js` | Configuration SQLite et table `pizzas` |

Le diagramme de l'architecture se trouve dans `docs/a-completer.puml`.

# Routes

| Méthode | Chemin | Succès | Erreurs |
|---|---|---|---|
| `GET` | `/api/pizzas` | 200 | — |
| `GET` | `/api/pizzas/:id` | 200 | 400, 404 |
| `POST` | `/api/pizzas` | 201 + en-tête `Location` | 400 |
| `PUT` | `/api/pizzas/:id` | 200 | 400, 404 |
| `DELETE` | `/api/pizzas/:id` | 204 sans corps | 400, 404 |

Exemple de corps JSON :

```json
{"name":"Margherita","description":"Classique","price":14.5}
```

# Tests

```sh
npm test
npm run test:acceptance
```

- `npm test` vérifie le point de départ et les fonctionnalités déjà acquises.
- `npm run test:acceptance` vérifie le résultat à atteindre de l'étape en cours.

# Corrigé de l'enseignant

Le dépôt du starter est enregistré comme remote `starter`. Quand l'enseignant publie la branche `solution` :

```sh
git fetch starter
git diff develop starter/solution -- src
```

Commiter son travail avant de comparer ou de changer de branche.
