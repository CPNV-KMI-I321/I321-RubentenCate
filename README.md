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

# Consignes — Foodtruck Starter 1

> Consignes de l'enseignant, reprises du dépôt [I321-StarterCode-1](https://github.com/CPNV-KMI-I321/I321-StarterCode-1). Le starter est déjà fusionné dans ce dépôt : il n'est pas nécessaire de le cloner. Pour le corrigé, voir la section [Corrigé de l'enseignant](#corrigé-de-lenseignant).

Dépôt : `I321-StarterCode-1`. La branche `main` contient le starter. Ce dossier est un point de départ à compléter, pas le corrigé.
Installer Node.js **24 LTS** et Git. Le cours et les consignes restent en français.

## Démarrer

```sh
git clone https://github.com/CPNV-KMI-I321/I321-StarterCode-1.git
cd I321-StarterCode-1
```

```sh
npm ci
npm start
```

API : http://localhost:3000 ; Swagger : http://localhost:3000/docs.
`npm run dev` redémarre le serveur lors des modifications.

Les routes et leur JSON attendu sont décrits dans Swagger. Les bases SQLite sont créées automatiquement.
Pour personnaliser la configuration, copier le `.env.example` de chaque application vers `.env` dans le même dossier.
Les chemins de base sont relatifs au dossier de l'application. Ne pas reprendre une base ou un `.env` d'une autre étape.

## À réaliser

`GET /api/pizzas` est un exemple complet à lire avant de commencer.
Les autres opérations répondent **501** tant qu'elles ne sont pas implémentées.

1. Compléter `findById`, `create`, `update` et `remove` dans `src/entities/Pizza.js` avec du SQL paramétré.
2. Compléter les contrôleurs correspondants dans `src/controllers/pizzasController.js`.
3. Réutiliser `validateId`, `validatePizza` et `fail` depuis `src/validation.js`.
4. Pour POST : répondre 201 avec la pizza et un en-tête Location. Pour DELETE : 204 sans corps.
5. Répondre 400 si les données sont invalides et 404 si une pizza demandée n'existe pas.
6. Produire le diagramme Client → Route → Controller → Entity → SQLite.

Ne mettre aucun SQL dans les routes ou contrôleurs, ni req/res dans les entités.
La configuration SQLite, la table pizzas, les routes, Swagger et la validation sont déjà fournis.

```json
{"name":"Margherita","description":"Classique","price":14.5}
```

## Vérifier son travail

```sh
npm test
npm run test:acceptance
```

`npm test` vérifie uniquement que le point de départ et les fonctionnalités précédemment acquises fonctionnent.
Ces tests ne valident pas la nouvelle étape.
`npm run test:acceptance` vérifie le résultat à atteindre : ses échecs sont attendus avant de terminer les TODO.
Ne pas modifier les assertions pour les faire passer. Avancer fonctionnalité par fonctionnalité et tester aussi avec Swagger.
À l'étape 5, les tests d'acceptation nécessitent Docker démarré.

Le diagramme demandé peut être produit dans `docs/a-completer.puml`.
Ce starter possède un historique indépendant du corrigé. Le corrigé sera publié par l'enseignant en fin de séance.

## Consulter le corrigé

Quand l’enseignant aura publié la branche `solution` :

```sh
git fetch origin
git switch solution
```

Conserver son travail dans des commits avant de changer de branche.

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

# Corrigé de l'enseignant

Le dépôt du starter est enregistré comme remote `starter`. Quand l'enseignant publie la branche `solution` :

```sh
git fetch starter
git diff develop starter/solution -- src
```

Commiter son travail avant de comparer ou de changer de branche.
