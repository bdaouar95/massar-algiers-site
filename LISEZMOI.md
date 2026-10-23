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

## À faire avant la mise en ligne

- [ ] **Remplacer les 4 avis temporaires** dans `AVIS` : ils viennent de la fiche Google de Riwaya Travel, pas de Massar Algiers. Ne pas publier le site avec
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
