Cours #5 — P5.JS —> LES FONCTIONS

---

## 1. Qu'est-ce qu'une fonction ?

Une fonction, c'est un **bloc de code auquel on donne un nom** pour pouvoir le réutiliser. Au lieu de copier-coller la même logique plusieurs fois, on l'écrit une seule fois dans une fonction, et on l'**appelle** quand on en a besoin.

```js
function direBonjour() {
  console.log("Bonjour !");
}

direBonjour(); // appelle la fonction → affiche "Bonjour !"
direBonjour(); // on peut l'appeler autant de fois qu'on veut
```

> `setup()` et `draw()` sont elles-mêmes des fonctions — p5.js les appelle automatiquement. On peut créer les nôtres.

---

## 2. Nommer une fonction

Le nom doit décrire ce que la fonction **fait**. Par convention, on utilise le **camelCase** (minuscule, puis majuscule à chaque nouveau mot) et souvent un verbe.

| Bon nom | Mauvais nom |
|---|---|
| `moveCircle` | `fonction1` |
| `calculerVitesse` | `truc` |
| `dessinerForme` | `aaa` |

```js
function moveCircle() {
  // code ici
}
```

---

## 3. Les arguments (paramètres)

Une fonction peut recevoir des **informations extérieures** dont elle a besoin pour travailler. On les liste entre les parenthèses au moment de la définir — ce sont les **paramètres**.

```js
function moveCircle(pos, jeRetourne) {
  // "pos" et "jeRetourne" sont des paramètres
  // ils reçoivent leurs valeurs au moment de l'appel
}
```

Quand on **appelle** la fonction, on fournit les valeurs réelles — ce sont les **arguments** :

```js
moveCircle(posX1, jeRetourne1); // posX1 → pos, jeRetourne1 → jeRetourne
moveCircle(posX2, jeRetourne2); // même fonction, données différentes
```

> Le même code s'exécute avec des données différentes à chaque appel. C'est tout l'intérêt : une seule fonction, deux cercles.

### Résumé

| Terme | Où | Rôle |
|---|---|---|
| **Paramètre** | Dans la définition `function f(param)` | Nom local à l'intérieur de la fonction |
| **Argument** | Dans l'appel `f(valeur)` | Valeur réelle transmise à la fonction |

---

## 4. Retourner une valeur

Une fonction peut **calculer un résultat et le renvoyer** avec `return`. Ce résultat peut ensuite être stocké dans une variable.

```js
function additionner(a, b) {
  return a + b;
}

let total = additionner(3, 5); // total vaut 8
```

Dès que `return` est atteint, la fonction s'arrête et renvoie la valeur.

---

## 5. Retourner un objet (plusieurs valeurs à la fois)

`return` ne peut renvoyer qu'**une seule chose**. Pour renvoyer plusieurs valeurs, on les regroupe dans un **objet**.

Un objet, c'est un ensemble de paires `clé: valeur` entre accolades `{}` :

```js
return { position: pos, etat: jeRetourne };
```

On accède ensuite à chaque propriété avec un point `.` :

```js
let etatCircle1 = moveCircle(posX1, jeRetourne1);

posX1    = etatCircle1.position; // récupère la propriété "position"
jeRetourne1 = etatCircle1.etat;  // récupère la propriété "etat"
```

> Dans notre sketch, `moveCircle` calcule deux choses à la fois : la nouvelle position ET le nouvel état de direction. L'objet permet de les renvoyer ensemble.

### Anatomie complète de `moveCircle`

```js
//        nom      paramètres
//         ↓       ↓      ↓
function moveCircle(pos, jeRetourne) {

  if (pos < width - tailleCircle / 2 && jeRetourne == false) {
    pos++;
  } else if (pos > tailleCircle / 2) {
    jeRetourne = true;
    pos--;
  } else {
    jeRetourne = false;
  }

  return { position: pos, etat: jeRetourne }; // ← renvoie un objet
}
```

```js
// Appel et récupération du résultat
let etatCircle1 = moveCircle(posX1, jeRetourne1); // ← argument
posX1       = etatCircle1.position;
jeRetourne1 = etatCircle1.etat;
```

---

## 6. Charger des ressources externes

### Images

On charge une image avec `loadImage()` dans `preload()` — une fonction spéciale de p5.js qui s'exécute **avant** `setup()` et `draw()`, pour s'assurer que tout est prêt avant de commencer.

```js
let monImage;

function preload() {
  monImage = loadImage("photo.jpg"); // chemin relatif au fichier index.html
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  image(monImage, 0, 0);          // affiche l'image à la position (0, 0)
  image(monImage, 0, 0, 300, 200); // avec largeur et hauteur imposées
}
```

| Fonction | Rôle |
|---|---|
| `loadImage("fichier.jpg")` | Charge l'image en mémoire |
| `image(img, x, y)` | Affiche l'image à la position x, y |
| `image(img, x, y, w, h)` | Affiche avec dimensions imposées |
| `imageMode(CENTER)` | L'image est centrée sur x, y (au lieu du coin supérieur gauche) |

> Les formats supportés sont JPG, PNG, GIF et SVG. Le fichier doit être dans le même dossier que le sketch, ou on précise le chemin relatif.

---

### Typographies

On charge une police avec `loadFont()`, également dans `preload()`. p5.js supporte les polices **OTF** et **TTF**, ainsi que les polices Google Fonts via leur URL.

```js
let maPolice;

function preload() {
  maPolice = loadFont("MaPolice.otf");
}

function setup() {
  createCanvas(600, 600);
  textFont(maPolice); // définit la police active
  textSize(32);       // taille en pixels
}

function draw() {
  background(220);
  fill("black");
  text("Bonjour", 50, 100); // affiche le texte à la position x, y
}
```

| Fonction | Rôle |
|---|---|
| `loadFont("fichier.otf")` | Charge la police en mémoire |
| `textFont(police)` | Définit la police active |
| `textSize(n)` | Taille du texte en pixels |
| `text("contenu", x, y)` | Affiche le texte à la position x, y |
| `textAlign(CENTER)` | Aligne le texte (`LEFT`, `CENTER`, `RIGHT`) |

> Pour utiliser une police Google Fonts, on peut aussi l'ajouter dans le fichier `index.html` avec une balise `<link>`, puis appeler `textFont("Nom de la police")` directement sans `loadFont()`.

---

### Son et vidéo

Le son et la vidéo font appel à des bibliothèques complémentaires de p5.js. La logique reste la même (`preload` → `setup` → `draw`), mais les fonctions disponibles sont plus nombreuses.

Consulter la documentation officielle :

- **Son** — `loadSound()`, `play()`, `loop()`, amplitude, effets : [p5js.org/reference/p5.sound](https://p5js.org/reference/p5.sound/)
- **Vidéo** — `createVideo()`, `createCapture()` (webcam) : [p5js.org/reference/p5/createVideo](https://p5js.org/reference/p5/createVideo/)

---

*Référence : sketch.js — Random Noise, cours #5*
