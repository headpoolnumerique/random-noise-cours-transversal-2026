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

@font-face permet d’utiliser une police personnalisée (non installée sur l’ordinateur).  
font-family: Diskus; → nom “interne” qu'on va réutiliser dans le CSS.  
src: url(Diskus.ttf); → chemin vers le fichier de police.  

Ensuite, on l’applique par exemple pour tout le body :

```
body {
  font-family: Diskus;
}
```

## 3) L’unité ```rem```

```
body { font-size: 2rem; }
#scroll { font-size: 3rem; }
```

rem = taille relative à la taille de police de base du document (souvent celle de html).  
En général, une typo chargée de base dans un CSS vaut 16px :  
- 1rem ≈ 16px
- 2rem ≈ 32px
- 3rem ≈ 48px

## 4) ```min-height``` et l’unité ```vh```

```
body {
  min-height: 100vh;
}
```

vh = viewport height → 1vh = 1% de la hauteur de la fenêtre.  
100vh = la hauteur complète de l’écran (visible dans le navigateur).  
min-height: 100vh signifie : “Le body doit faire au minimum la hauteur de l’écran.”  
Même si le contenu est court, le layout occupe tout l’espace vertical.  

## 5) ```display: flex```

```
body { display: flex; }
section { display: flex; }
.colones { display: flex; }
```

```display: flex``` active le mode Flexbox sur un conteneur.  
Ses enfants directs deviennent des éléments flexibles :  
- alignables
- distribuables
- faciles à mettre en colonnes/lignes.

## 6) ```flex: 1```

```
.colones { flex: 1; }
.colone { flex: 1; }
```

flex: 1 veut dire : “prends ta part de l’espace disponible”.  
Sur plusieurs éléments frères, flex: 1 les rend de taille égale.  

Exemple mental :  
Si .colones contient 2 .colone avec flex: 1 :  
chaque colonne prend 50% de la largeur disponible.  

S’il y en a 3 :  
chacune prend ≈ 33%.  

—

