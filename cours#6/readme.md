Cours #6 — P5.JS —> TABLEAUX / OBJETS / BOUCLES FOR

---

## 1. Les tableaux

Un tableau (*array*), c'est une **boîte qui contient plusieurs valeurs dans une seule variable**. Au lieu d'écrire `let cercle1`, `let cercle2`, `let cercle3`… on regroupe tout dans un tableau.

```js
let noms = ["Alice", "Bob", "Chloé"];
let nombres = [10, 42, 7, 99];
let circles = []; // tableau vide — on remplira ça plus tard
```

- Les crochets `[]` délimitent le tableau
- Les éléments sont séparés par des virgules
- Un tableau vide `[]` est parfaitement valide — on peut l'alimenter au fil du programme

### Ajouter des éléments avec `push()`

`push()` ajoute un nouvel élément **à la fin** du tableau :

```js
circles.push("cercle A");
circles.push("cercle B");
// circles contient maintenant ["cercle A", "cercle B"]
```

> Dans notre sketch, on appelle `push()` 100 fois à l'intérieur d'une boucle pour remplir le tableau automatiquement.

---

## 2. Accéder aux éléments d'un tableau

Chaque élément a un **index** (un numéro de position). En JavaScript, **l'index commence toujours à 0**.

```js
let fruits = ["pomme", "banane", "cerise"];

fruits[0]; // "pomme"   ← premier élément
fruits[1]; // "banane"  ← deuxième élément
fruits[2]; // "cerise"  ← troisième et dernier
```

| Propriété | Rôle | Exemple |
|---|---|---|
| `tableau[i]` | Accède à l'élément à l'index `i` | `circles[0]` |
| `tableau.length` | Donne le nombre total d'éléments | `circles.length` → `100` |

> Le dernier élément est toujours à l'index `tableau.length - 1`. Si un tableau a 100 éléments, le dernier est à l'index 99.

---

## 3. La boucle `for`

Une boucle `for` permet de **répéter un bloc de code un certain nombre de fois**. Elle est indispensable pour travailler avec des tableaux.

### Structure

```js
for (let i = 0; i < 100; i++) {
  // ce bloc s'exécute 100 fois
  // à chaque tour, i vaut 0, puis 1, puis 2… jusqu'à 99
}
```

| Partie | Rôle |
|---|---|
| `let i = 0` | On initialise un compteur `i` à 0 |
| `i < 100` | On continue tant que `i` est inférieur à 100 |
| `i++` | À chaque tour, on augmente `i` de 1 |

### Créer des éléments en boucle

Dans notre sketch, on utilise une boucle pour créer 100 cercles d'un coup dans `setup()` :

```js
for (let i = 0; i < 100; i++) {
  circles.push({
    pos: random(tailleCircle / 2, width - tailleCircle / 2),
    jeRetourne: false,
    y: random(height - tailleCircle / 2)
  });
}
```

> Sans boucle, il faudrait écrire 100 fois la même ligne. Avec la boucle, on l'écrit une fois et le programme s'en charge.

### Parcourir un tableau en boucle

Dans `draw()`, on utilise une boucle pour traiter chaque cercle :

```js
for (let i = 0; i < circles.length; i++) {
  let c = circles[i]; // "c" vaut circles[0], puis circles[1], etc.

  let etat = moveCircle(c.pos, c.jeRetourne);
  c.pos = etat.position;
  c.jeRetourne = etat.etat;

  circle(c.pos, c.y, tailleCircle);
}
```

On utilise `circles.length` plutôt que le chiffre `100` directement — si on change le nombre de cercles, la boucle s'adapte automatiquement.

---

## 4. Les objets

Un objet (*object*), c'est un **ensemble de paires clé : valeur** entre accolades `{}`. Chaque propriété a un nom (la clé) et une valeur.

```js
let cercle = {
  pos: 150,
  jeRetourne: false,
  y: 300
};
```

On accède à une propriété avec un **point** `.` :

```js
cercle.pos;        // 150
cercle.jeRetourne; // false
cercle.y;          // 300

cercle.pos = 200;  // on peut aussi modifier une propriété
```

### Objets vs variables séparées

Sans objet, on aurait besoin de trois variables distinctes par cercle :

```js
let posX1 = 150;
let jeRetourne1 = false;
let y1 = 300;

let posX2 = 400;
let jeRetourne2 = true;
let y2 = 80;
// ... et ainsi de suite pour chaque cercle
```

Avec un objet, tout ce qui concerne un cercle est **regroupé en un seul endroit** :

```js
let cercle1 = { pos: 150, jeRetourne: false, y: 300 };
let cercle2 = { pos: 400, jeRetourne: true,  y: 80  };
```

> Les objets agissent comme des fiches — chaque fiche décrit une entité avec toutes ses propriétés. C'est particulièrement utile dès qu'on travaille avec plusieurs entités similaires.

---

## 5. Tableaux d'objets

On peut mettre des objets dans un tableau. C'est le patron utilisé dans notre sketch : chaque élément de `circles` est un objet qui décrit un cercle.

```js
let circles = [
  { pos: 150, jeRetourne: false, y: 300 },
  { pos: 400, jeRetourne: true,  y: 80  },
  // ...
];
```

Pour accéder à une propriété d'un élément du tableau, on combine les deux syntaxes :

```js
circles[0].pos;        // propriété "pos" du premier cercle
circles[0].jeRetourne; // propriété "jeRetourne" du premier cercle
```

Avec une variable intermédiaire (plus lisible) :

```js
let c = circles[i]; // c pointe vers l'objet à l'index i
c.pos;              // accès direct à la propriété
c.jeRetourne = true; // modification de la propriété
```

> Modifier `c.pos` modifie bien la valeur **dans le tableau** — `c` est une référence vers l'objet, pas une copie.

### Le pattern complet

```js
// Déclaration
let circles = [];

// Initialisation (dans setup)
for (let i = 0; i < 100; i++) {
  circles.push({
    pos: random(tailleCircle / 2, width - tailleCircle / 2),
    jeRetourne: false,
    y: random(height - tailleCircle / 2)
  });
}

// Utilisation (dans draw)
for (let i = 0; i < circles.length; i++) {
  let c = circles[i];

  let etat = moveCircle(c.pos, c.jeRetourne); // appel de fonction
  c.pos = etat.position;                       // mise à jour de l'objet
  c.jeRetourne = etat.etat;

  circle(c.pos, c.y, tailleCircle);
}
```

Ce patron — **tableau de données** + **boucle** + **fonction** — est l'un des plus utilisés en programmation créative.

---

## 6. Contrôles natifs du navigateur avec p5.js

p5.js permet de créer des **éléments HTML** (sliders, boutons, champs de texte…) directement depuis le sketch, sans toucher au fichier HTML. Ces éléments s'affichent en dehors du canvas et permettent à l'utilisateur d'interagir avec le programme.

### Slider

```js
let monSlider;

function setup() {
  createCanvas(600, 600);
  monSlider = createSlider(0, 100, 50); // min, max, valeur initiale
  monSlider.position(20, 620);          // position sous le canvas
}

function draw() {
  background(220);
  let taille = monSlider.value(); // lit la valeur actuelle du slider
  circle(width / 2, height / 2, taille);
}
```

| Fonction | Rôle |
|---|---|
| `createSlider(min, max, valeur)` | Crée un slider avec plage et valeur de départ |
| `slider.position(x, y)` | Positionne le slider sur la page |
| `slider.value()` | Retourne la valeur courante |
| `slider.size(largeur)` | Définit la largeur visuelle du slider |

### Bouton

```js
let monBouton;
let couleur = "red";

function setup() {
  createCanvas(600, 600);
  monBouton = createButton("Changer couleur");
  monBouton.position(20, 620);
  monBouton.mousePressed(changerCouleur); // appelle la fonction au clic
}

function draw() {
  background(220);
  fill(couleur);
  circle(300, 300, 100);
}

function changerCouleur() {
  couleur = couleur === "red" ? "blue" : "red"; // alterne entre deux couleurs
}
```

| Fonction | Rôle |
|---|---|
| `createButton("texte")` | Crée un bouton avec l'étiquette indiquée |
| `bouton.position(x, y)` | Positionne le bouton sur la page |
| `bouton.mousePressed(fn)` | Appelle la fonction `fn` à chaque clic |

> Ces éléments sont des balises HTML classiques. On peut les styliser avec du CSS si nécessaire — ils répondent aux mêmes propriétés que n'importe quel élément de la page.

---

*Référence : sketch.js — Random Noise, cours #6*
