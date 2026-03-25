# Cours #4 — P5.JS —> VARIABLES / OPÉRATEURS / CONDITIONELS 

---

## 1. Les variables

Une variable, c'est une **boîte avec un nom** dans laquelle on stocke une valeur. Cette valeur peut changer au fil du temps — c'est d'ailleurs tout l'intérêt.

### Déclarer une variable

```js
let speed = 1;
let tailleCircle = 50;
let jeRetourne = false;
```

- `let` signifie "je crée une nouvelle variable"
- le nom vient ensuite (`speed`, `tailleCircle`…)
- `=` assigne une valeur initiale
- `;` termine l'instruction

### Les types de valeurs courants

| Type | Exemple | Description |
|---|---|---|
| Nombre entier | `let speed = 1;` | Un chiffre, sans virgule |
| Nombre décimal | `let x = 3.14;` | Un chiffre avec virgule (le point est la virgule en JS) |
| Booléen | `let jeRetourne = false;` | Seulement `true` ou `false` |

### Variables locales vs globales

Les variables déclarées **en dehors** de `setup()` et `draw()` sont **globales** : elles sont accessibles partout dans le programme et persistent d'une frame à l'autre.

```js
let posX = 25; // globale — mémorisée entre chaque frame

function draw() {
  let temp = 10; // locale — existe seulement pendant cette frame
}
```

> Dans notre sketch, `posX` et `tailleCircle` sont globales car on a besoin de se souvenir de leur valeur à chaque nouvelle image.

---

## 2. Les opérateurs

Les opérateurs permettent de **calculer**, **comparer** ou **modifier** des valeurs.

### Opérateurs arithmétiques

| Opérateur | Signification | Exemple |
|---|---|---|
| `+` | Addition | `posX + 10` |
| `-` | Soustraction | `posX - speed` |
| `*` | Multiplication | `taille * 2` |
| `/` | Division | `tailleCircle / 2` |

### Opérateurs d'assignation raccourcis

Au lieu d'écrire `posX = posX + speed`, on peut écrire :

| Raccourci | Équivalent long | Effet |
|---|---|---|
| `posX += speed` | `posX = posX + speed` | Ajoute `speed` à `posX` |
| `posX -= speed` | `posX = posX - speed` | Soustrait `speed` de `posX` |
| `tailleCircle += 5` | `tailleCircle = tailleCircle + 5` | Grossit le cercle de 5 |
| `speed++` | `speed = speed + 1` | Augmente de 1 (très courant) |
| `speed--` | `speed = speed - 1` | Diminue de 1 |

> Dans notre sketch : à chaque aller-retour, `tailleCircle+=5` et `speed++` font grossir le cercle et accélérer l'animation.

### Opérateurs de comparaison

Ces opérateurs **comparent deux valeurs** et retournent `true` ou `false`. On les utilise dans les conditions.

| Opérateur | Signification | Exemple | Résultat |
|---|---|---|---|
| `==` | Égal à | `jeRetourne == false` | `true` si jeRetourne vaut false |
| `!=` | Différent de | `speed != 0` | `true` si speed n'est pas 0 |
| `>` | Supérieur à | `posX > 100` | `true` si posX est plus grand que 100 |
| `<` | Inférieur à | `posX < width` | `true` si posX est plus petit que width |
| `>=` | Supérieur ou égal | `posX >= width` | `true` si posX est ≥ width |
| `<=` | Inférieur ou égal | `posX <= 0` | `true` si posX est ≤ 0 |

> Attention : `=` **assigne** une valeur. `==` **compare** deux valeurs. C'est une erreur très courante.

---

## 3. Les conditionnels

Un conditionnel permet d'**exécuter du code uniquement si une condition est vraie**. C'est la logique de décision du programme.

### If simple

```js
if (condition) {
  // ce bloc s'exécute si la condition est vraie
}
```

Exemple :
```js
if (posX > 500) {
  fill("red"); // le cercle devient rouge s'il dépasse 500px
}
```

### If / else

```js
if (condition) {
  // si la condition est vraie
} else {
  // sinon (dans tous les autres cas)
}
```

### If / else if / else

C'est la structure utilisée dans notre sketch. On teste plusieurs cas dans l'ordre :

```js
if (posX < width - tailleCircle/2 && jeRetourne == false) {
  posX += speed;           // CAS 1 : avancer vers la droite

} else if (posX > tailleCircle/2) {
  jeRetourne = true;
  posX -= speed;           // CAS 2 : reculer vers la gauche

} else {
  jeRetourne = false;
  tailleCircle += 5;
  speed++;                 // CAS 3 : repartir, plus grand et plus vite
}
```

> Le programme teste les conditions **dans l'ordre**. Dès qu'une condition est vraie, il exécute ce bloc et **ignore les suivants**.

### Conditions combinées

On peut combiner plusieurs conditions dans un même `if` avec des opérateurs logiques :

| Opérateur | Signification | Exemple |
|---|---|---|
| `&&` | ET — les deux doivent être vraies | `posX < 590 && jeRetourne == false` |
| `\|\|` | OU — au moins une doit être vraie | `posX < 0 \|\| posX > 600` |
| `!` | NON — inverse la condition | `!jeRetourne` (équivalent à `jeRetourne == false`) |

Exemple du sketch :
```js
if (posX < width - tailleCircle/2 && jeRetourne == false)
```
Cette condition est vraie **seulement si** les deux sont vraies en même temps :
- `posX < width - tailleCircle/2` → le cercle n'a pas atteint le bord droit
- `jeRetourne == false` → le cercle se déplace bien vers la droite

> **Astuce de lecture** : lisez `&&` comme "ET", `||` comme "OU". La phrase doit avoir du sens en français pour être sûr de comprendre la logique.

---

*Référence : sketch.js — Random Noise, cours #4*
