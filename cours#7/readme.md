Cours #7 — P5.JS —> INTÉGRER UN CANVAS DANS UNE PAGE HTML EXISTANTE

---

## 1. Télécharger le sketch depuis l'éditeur p5.js

Dans l'éditeur en ligne [editor.p5js.org](https://editor.p5js.org), cliquer sur **Fichier → Télécharger**. Cela génère un fichier `.zip` contenant :

```
mon-sketch/
├── index.html      ← page HTML avec les références aux bibliothèques
├── sketch.js       ← le code p5.js
└── libraries/
    └── p5.min.js   ← (parfois inclus localement)
```

Décompresser l'archive. On va piocher dans ce dossier les éléments dont on a besoin.

---

## 2. Copier les références de bibliothèques et de script

Ouvrir le fichier `index.html` téléchargé et repérer les balises `<script>` dans le `<head>` ou en bas du `<body>`. Elles ressemblent à ceci :

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/addons/p5.sound.min.js"></script>
```

Copier ces lignes et les coller dans le `<head>` de **votre** fichier HTML, **avant** la balise de fermeture `</head>` :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Mon site</title>
  <link rel="stylesheet" href="style.css">

  <!-- Bibliothèques p5.js copiées depuis le sketch téléchargé -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/addons/p5.sound.min.js"></script>
</head>
<body>
  <!-- contenu de votre page -->
</body>
</html>
```

> Vérifier que les numéros de version dans les URLs correspondent bien à ceux du sketch téléchargé. Les différentes versions de p5.js peuvent se comporter différemment.

---

## 3. Placer le fichier sketch.js dans votre dossier

Copier le fichier `sketch.js` téléchargé dans le dossier de votre projet HTML. Il doit être **au même niveau** que votre `index.html`, ou dans un sous-dossier `js/` selon l'organisation choisie.

```
mon-site/
├── index.html
├── style.css
├── sketch.js       ← copié ici depuis le dossier téléchargé
└── images/
```

Puis ajouter la balise `<script>` qui charge votre sketch dans le HTML, **après** les balises des bibliothèques p5.js :

```html
  <!-- Bibliothèques p5.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.min.js"></script>

  <!-- Votre sketch -->
  <script src="sketch.js"></script>
</head>
```

> Si `sketch.js` est dans un sous-dossier `js/`, écrire `src="js/sketch.js"` à la place.

---

## 4. Attacher le canvas à un élément parent

Par défaut, p5.js ajoute le canvas directement au `<body>`. Pour l'intégrer proprement dans votre page, il faut :

**a) Ajouter un élément conteneur dans votre HTML**

Choisir l'endroit où le canvas doit apparaître et y placer une `<div>` avec un `id` unique :

```html
<body>
  <header>...</header>

  <main>
    <p>Mon texte d'introduction.</p>

    <div id="canvas-conteneur"></div>  ← le canvas ira ici

    <p>Suite du contenu.</p>
  </main>
</body>
```

**b) Attacher le canvas à ce parent dans `sketch.js`**

Dans la fonction `setup()`, utiliser `parent()` après `createCanvas()` pour indiquer à p5.js où insérer le canvas :

```js
function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("canvas-conteneur"); // ← l'id de la div dans le HTML
}

function draw() {
  background(220);
  circle(width / 2, height / 2, 100);
}
```

| Fonction | Rôle |
|---|---|
| `createCanvas(w, h)` | Crée le canvas et retourne une référence à l'élément |
| `canvas.parent("id")` | Insère le canvas dans l'élément HTML dont l'id est `"id"` |

> Sans `parent()`, le canvas s'ajoute en dehors de votre mise en page, souvent tout en bas de la page ou là où p5.js décide de le placer. Avec `parent()`, il obéit à votre structure HTML.

---

## 5. Styliser le conteneur en CSS

Le conteneur `<div id="canvas-conteneur">` se comporte comme n'importe quel élément HTML. On peut le styliser dans `style.css` pour contrôler sa position, ses dimensions, ses marges, etc.

```css
#canvas-conteneur {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
```

---

## Récapitulatif

| Étape | Action | Où |
|---|---|---|
| 1 | Télécharger le sketch | Éditeur p5.js → Fichier → Télécharger |
| 2 | Copier les `<script>` des bibliothèques | Du `index.html` téléchargé → votre `<head>` |
| 3 | Copier `sketch.js` dans votre dossier | Et ajouter `<script src="sketch.js">` dans votre HTML |
| 4 | Ajouter une `<div id="...">` dans votre HTML | Et appeler `canvas.parent("...")` dans `setup()` |
| 5 | Styliser le conteneur | Dans `style.css` avec le sélecteur `#id` |

---
