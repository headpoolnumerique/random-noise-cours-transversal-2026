# Recap cours HTML/CSS#3


---

## 1) `box-sizing: border-box;` dans `* { }`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

`box-sizing` contrôle la façon dont le navigateur calcule la taille d’un élément.

- Par défaut (`content-box`) : `width` et `height` ne comptent que le contenu. Le `padding` et la `border` s’ajoutent ensuite, ce qui peut “gonfler” la boîte.
- Avec `border-box` : `width` et `height` incluent contenu + padding + border.  
  Résultat : les dimensions deviennent plus faciles à prévoir (utile pour des grilles et des colonnes).

Le mettre dans `* { }` applique cette règle à tous les éléments, pour une mise en page plus stable.

---

## 2) `.bloc-en-bas .colone` : indentation et précision (sélecteur descendant)

```css
.bloc-en-bas .colone {
  color: coral;
}
```

Ce sélecteur se lit :

- Cible tous les éléments ayant la classe `.colone`
- Uniquement s’ils sont à l’intérieur d’un élément `.bloc-en-bas` (descendant, pas forcément enfant direct)

Cela permet de spécialiser un style selon le contexte, sans créer une nouvelle classe.

Exemple HTML du projet :

```html
<section class="bloc-en-bas">
  <section class="colone" id="scroll">Hello</section>
</section>
```

Ici, la section `.colone` est bien dans `.bloc-en-bas`, donc elle reçoit `color: coral;`.

---

## 3) `z-index: 1` et `z-index: 2`

```css
#lazy_cat {
  z-index: 1;
}

#another_lazy_cat {
  position: fixed;
  z-index: 2;
}
```

`z-index` gère l’ordre d’empilement des éléments “superposés” :

- Un z-index plus grand passe au-dessus d’un plus petit.
- Ici, un élément à `z-index: 2` est au-dessus d’un élément à `z-index: 1`.

Point important : `z-index` fonctionne surtout quand l’élément est “positionné” (par exemple `position: relative`, `absolute`, `fixed`, `sticky`).  
`#another_lazy_cat` est en `position: fixed`, donc son `z-index` s’applique clairement.

---

## 4) `max-width: 100%`

```css
#lazy_cat {
  max-width: 100%;
}
```

`max-width: 100%` sert surtout pour les images et médias “responsives” :

- L’élément ne dépassera jamais la largeur de son conteneur.
- Si le conteneur rétrécit (écran plus petit), l’image rétrécit aussi, au lieu de déborder.

C’est une règle simple pour éviter les mises en page cassées dans le design responsif.

---

