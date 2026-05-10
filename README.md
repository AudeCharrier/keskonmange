# Keskonmange

Application web permettant de trouver des idées de recettes en fonction des envies utilisateur via un quiz interactif. Le projet inclut également des sections de simulation de box-repas et d’espace communautaire.

👉 Démo : [GitHub Pages - Keskonmange](https://audecharrier.github.io/keskonmange/)

<br>

## Contexte

Projet réalisé en équipe (6 personnes) sur une durée de 2 semaines dans le cadre d’une formation en développement web.
Objectifs :
- Passer d’exercices individuels à un projet complet 
- Structurer une interface front de A à Z 
- Intégrer des interactions en JavaScript 
- Expérimenter le travail en équipe sur un code commun 

<br>

## Fonctionnalités

- Quiz de recommandations de recettes basé sur les envies utilisateur 
- Affichage de recettes suggérées 
- Interface box-repas (simulation UI) 
- Espace communauté (simulation UI) 
- Formulaire de contact 
- Site responsive

<br>

## Stack technique

- HTML5  
- CSS3 (Flexbox / Grid)  
- JavaScript  

<br>

## Ma contribution

- Conception UX/UI (mise en page et parcours utilisateur) 
- Développement de la page d’accueil responsive 
- Implémentation d’un carrousel interactif en JavaScript 
- Réutilisation et adaptation de composants (cards) 
- Structuration du layout d’une section avec CSS Grid 
- Reprise et harmonisation du projet après livraison : 
    - uniformisation de la navigation et du footer entre les pages
    (TestPage: choix collectif d'un footer minimaliste pour mettre en valeur le quiz)
    - cohérence visuelle globale (background) 
    - correction d’une version non finale présente sur la branche principale

<br>

<details>
<summary>🔽 Détails techniques</summary>

### Choix d’architecture
- Organisation du projet en pages distinctes par membre de l’équipe 
- Peu de composants mutualisés (hors navigation et footer) 

### Responsive
- Limitation volontaire du nombre de breakpoints (~3) 
- Priorité donnée aux rendus mobile et desktop 
- Version tablette moins optimisée par contrainte de temps 
- Ajustements manuels des espacements et tailles pour éviter les effets de “cassure” visuelle 

### Carrousel
- Implémentation en JavaScript 
- Choix d’éviter une solution CSS récente par souci de compatibilité navigateur 
- Adaptation des cards pour intégration dans le carrousel 

### Cohérence visuelle
- Direction artistique définie en amont (couleurs, styles) 
- Ecarts d’interprétation entre membres de l’équipe 
- Reprise et harmonisation de certains éléments en phase de clean-up 

### Réutilisation de code
- Adaptation de cards existantes pour cohérence globale 
- Ajustements CSS (padding, tailles, imbrication) 

### Limites du projet
- Sections box-repas et communauté non fonctionnelles (UI uniquement) 
- Responsive à perfectionner sur certaines sections
- Cohérence globale imparfaite due au travail distribué 

</details>

## Travail en équipe
- Projet réalisé à 6 sans méthodologie agile formelle 
- Première utilisation de Git et GitHub en équipe 
- Conflits de code et apprentissage des conventions de nommage 
- Mise en place progressive de bonnes pratiques de structuration CSS 

<br>

## Améliorations possibles
- Ajout d’un backend pour les recettes et comptes utilisateurs 
- Amélioration du responsive (header home, about us, menu burger)
- Accessibilité 
- Optimisation du workflow Git

<br>

## Installation

```bash
git clone https://github.com/audecharrier/keskonmange
cd keskonmange
open index.html
``` 
