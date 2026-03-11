# Random Noise 2026

## Cours #2 : Différents éléments CSS

## 1) Le sélecteur universel : `* { }`

```
* {  
  margin: 0;  
  padding: 0;   
}
```

Le * cible tous les éléments de la page (body, titres, paragraphes, images, etc.).  
Ici, on “remet à zéro” les marges (margin) et espacements internes (padding) par défaut des navigateurs.  


## 2) Importer une police : @font-face  

```
@font-face {
  font-family: Diskus;
  src: url(Diskus.ttf);
  font-weight: regular;
}
```

## 3) Importer une police : @font-face  

```
@font-face {
  font-family: Diskus;
  src: url(Diskus.ttf);
  font-weight: regular;
}
```

@font-face permet d’utiliser une police personnalisée (non installée sur l’ordinateur).  
font-family: Diskus; → nom “interne” qu'on va réutiliser dans le CSS.  
src: url(Diskus.ttf); → chemin vers le fichier de police.  

Ensuite, on l’applique par exemple pour tout le body :

```
body {
  font-family: Diskus;
}
```
