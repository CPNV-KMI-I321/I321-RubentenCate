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
Le projet avance par étapes, à partir des starters de l'enseignant ([étape 1](https://github.com/CPNV-KMI-I321/I321-StarterCode-1), [étape 2](https://github.com/CPNV-KMI-I321/I321-StarterCode-2)), fusionnés dans ce dépôt.

# Consignes — Foodtruck Starter 2

> Consignes de l'enseignant, reprises du dépôt [I321-StarterCode-2](https://github.com/CPNV-KMI-I321/I321-StarterCode-2). Le starter est déjà fusionné dans ce dépôt : il n'est pas nécessaire de le cloner. Pour le corrigé, voir la section [Corrigé de l'enseignant](#corrigé-de-lenseignant).

Dépôt : `I321-StarterCode-2`. La branche `main` contient le starter. Ce dossier est un point de départ à compléter, pas le corrigé.
Installer Node.js **24 LTS** et Git. Le cours et les consignes restent en français.

## Démarrer

```sh
git clone https://github.com/CPNV-KMI-I321/I321-StarterCode-2.git
cd I321-StarterCode-2
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

Le CRUD Pizzas de l'étape 1 est fourni et doit continuer à fonctionner.
La table ingredients et ses routes sont prêtes ; ses opérations répondent **501**.
Utiliser les fichiers Pizzas comme exemple.

1. Compléter `src/entities/Ingredient.js` : lister, consulter, créer, modifier, supprimer.
2. Compléter `src/controllers/ingredientsController.js` et réutiliser `validateIngredient` et `validateId`.
3. Retourner les mêmes codes HTTP que pour les pizzas : 200, 201, 204, 400 et 404.
4. Garder les ingrédients indépendants des pizzas pour cette étape.
5. Dessiner le diagramme de classes et le MLD des deux tables sans association.

```json
{"name":"Mozzarella","price":2}
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

| Couche | Fichiers | Rôle |
|---|---|---|
| Route | `src/routes/index.js`, `pizzas.js`, `ingredients.js` | Associe une méthode HTTP et un chemin à un contrôleur |
| Controller | `src/controllers/pizzasController.js`, `ingredientsController.js` | Lit `req`, valide, choisit le code HTTP et répond avec `res` |
| Entity | `src/entities/Pizza.js`, `Ingredient.js` | Exécute le SQL paramétré, sans `req` ni `res` |
| Base | `src/config/database.js` | Configuration SQLite, tables `pizzas` et `ingredients` |

Diagrammes :
- `docs/etape-1-sequences.puml` : diagrammes de séquence du CRUD Pizzas (étape 1) ;
- `docs/a-completer.puml` : diagramme de classes et MLD (étape 2).

# Routes

Les mêmes routes existent pour `pizzas` et pour `ingredients` :

| Méthode | Chemin | Succès | Erreurs |
|---|---|---|---|
| `GET` | `/api/{ressource}` | 200 | — |
| `GET` | `/api/{ressource}/:id` | 200 | 400, 404 |
| `POST` | `/api/{ressource}` | 201 + en-tête `Location` | 400 |
| `PUT` | `/api/{ressource}/:id` | 200 | 400, 404 |
| `DELETE` | `/api/{ressource}/:id` | 204 sans corps | 400, 404 |

Exemples de corps JSON :

```json
{"name":"Margherita","description":"Classique","price":14.5}
```

```json
{"name":"Mozzarella","price":2}
```

# Corrigé de l'enseignant

Les dépôts des starters sont enregistrés comme remotes `starter` (étape 1) et `starter2` (étape 2). Quand l'enseignant publie la branche `solution` :

```sh
git fetch starter2
git diff Etape-2 starter2/solution -- src
```

Commiter son travail avant de comparer ou de changer de branche.
