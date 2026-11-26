# Site Massar Algiers Travel Agency (v2)

Site une page, bilingue français / arabe, construit d'après la maquette Claude Design v2 (handoff du 23/10/2026).

## Voir le site

Double-cliquer sur `index.html`. Il s'ouvre dans le navigateur, sans rien installer.

## Modifier le contenu

Tout se modifie dans **`contenu.js`** :

| Je veux... | Où |
|------------|-----|
| Changer la grande photo du haut | `hero` |
| Changer un prix, une date, un texte d'offre | `OFFRES` |
| Ajouter / retirer une offre | copier ou supprimer un bloc `{ ... }` dans `OFFRES` (les 4 premières apparaissent aussi en vignettes dans le haut) |
| Classer une offre dans un filtre | `cat` : turquie, asie, algerie, tunisie ou omra |
| Mettre à jour la Omra (départs, hôtels, prix) | `OMRA` |
| Billets de bateau (prix, compagnies, lignes) | `MER` |
| Visas et salons | `SERVICES` |
| Avis clients | `AVIS` (la section disparaît si la liste est vide) |

Pour une nouvelle affiche : la mettre dans `assets/offres/` (format .jpg ou .webp) et écrire son nom dans `image: '...'`.

Les textes fixes de l'interface (menus, titres, étapes) sont dans `app.js`, en haut du fichier.

## Page Études (Massar Study)

`etudes.html` est la page du pôle études (lien « Études » dans le menu du site, et lien à mettre dans la bio de @massar.study). Tout son contenu, en français et en arabe, est dans **`etudes.js`**, objet `C` en haut du fichier. Son style complète `styles.css` dans `etudes.css`.

- Les frais de l'agence ne sont **jamais affichés** : ils sont expliqués à l'agence, avant la signature du contrat
- Ne jamais écrire « visa garanti »
- Les frais de scolarité des universités sont indicatifs : les revérifier chaque année
- Le formulaire de diagnostic envoie la demande sur WhatsApp au +213 559 92 37 09
- Après chaque modification de `etudes.js`, `etudes.css` ou `etudes-anim.js`, changer le numéro `?v=` dans `etudes.html` (par exemple la date du jour), sinon les téléphones gardent l'ancienne version en mémoire
- Animations dans `etudes-anim.js` : GSAP 3.13 (gratuit, y compris en commercial), ScrollTrigger, SplitText et défilement fluide Lenis, chargés depuis cdn.jsdelivr.net. Elles se coupent automatiquement si le téléphone demande de réduire les animations. Les chiffres animés et les textes des bandes défilantes sont dans `etudes.js` (`stats`, `defile`, `orbChips`)
- Photos dans `assets/etudes/` : libres de droits (Wikimedia Commons). Les crédits en bas de page sont **obligatoires**, ne pas les retirer. Pour changer une photo, remplacer le fichier et mettre à jour `HERO`, `PHOTOS_PAYS` et `CREDITS` en haut de `etudes.js`
- Galerie « Nos étudiants » : 6 photos de nos arrivées 2020-2021 (Instagram @massar.study), dans `assets/etudes/nos-etudiants/`, liste `NOS_PHOTOS` dans `etudes.js`. Les étudiants reconnaissables doivent avoir donné leur accord

## À faire avant la mise en ligne

- [ ] **Istanbul** : « Prochain départ : 25 octobre » sera dépassé après le 25/10, mettre la date suivante
- [ ] Remplacer les photos basse résolution de `assets/photos/` (visa Espagne, visa Chine, salons Italie) par les originaux

## Mettre en ligne (gratuit)

Le dossier peut être publié tel quel sur Netlify, Vercel ou Cloudflare Pages (glisser-déposer du dossier sur netlify.com/drop, par exemple).

## Fichiers

- `index.html` : page, référencement Google (titre, description, fiche agence)
- `styles.css` : couleurs, polices, mise en page
- `app.js` : affichage, textes d'interface FR / AR, filtres, carrousel, boutons WhatsApp
- `contenu.js` : offres, Omra, billets de bateau, services, avis
- `assets/offres/` : affiches des offres et photo du haut
- `assets/photos/` : photos des services
- `assets/logo/` : symbole du logo (marine, blanc, noir, avatar rond)
