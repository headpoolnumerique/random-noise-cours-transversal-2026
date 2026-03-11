# Random Noise 2026

## Cours #2 : Différents éléments CSS

## 1) Le sélecteur universel : `* { }`

* {
  margin: 0;
  padding: 0;
}

* cible tous les éléments de la page (body, titres, paragraphes, images, etc.).  
Ici, on “remet à zéro” les marges (margin) et espacements internes (padding) par défaut des navigateurs.  


## 2) Importer une police : @font-face

@font-face {
  font-family: Diskus;
  src: url(Diskus.ttf);
  font-weight: regular;
}
