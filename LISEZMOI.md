# Site Massar Algiers Travel Agency

Site une page, bilingue français / arabe, construit d'après la maquette Claude Design (handoff du 23/10/2026).

## Voir le site

Double-cliquer sur `index.html`. Il s'ouvre dans le navigateur, sans rien installer.

## Modifier le contenu

Tout se modifie dans **`contenu.js`** :

| Je veux... | Où |
|------------|-----|
| Changer un prix, une date, un texte d'offre | `OFFRES` |
| Ajouter / retirer une offre | copier ou supprimer un bloc `{ ... }` dans `OFFRES` |
| Mettre à jour la Omra (départs, hôtels, prix) | `OMRA` |
| Ajouter des avis clients | `AVIS` (la section apparaît dès qu'il y a un avis) |
| Changer les lignes maritimes | `MER` |

Pour une nouvelle photo : la mettre dans `assets/photos/` et écrire son nom dans `photo: '...'`.

Les textes fixes de l'interface (menus, boutons, titres) sont dans `app.js`, en haut du fichier.

## À faire avant la mise en ligne

- [ ] Prix réel de Sousse (`contenu.js`, offre `sousse`, aujourd'hui « Prix sur demande »)
- [ ] **Remplacer les 4 avis temporaires** dans `AVIS` : ils viennent de la fiche Google de Riwaya Travel, pas de Massar Algiers. Ne pas publier le site avec
- [ ] Remplacer les photos : celles de `assets/photos/` sont recadrées depuis des captures Facebook (basse résolution, parfois avec du texte d'affiche). Prendre les fichiers originaux des visuels ou de vraies photos HD

## Mettre en ligne (gratuit)

Le dossier peut être publié tel quel sur Vercel, Netlify ou Cloudflare Pages (glisser-déposer du dossier sur netlify.com/drop, par exemple). Un nom de domaine (ex. massar-algiers.com) coûte environ 10 à 15 € par an.

## Fichiers

- `index.html` : page, référencement Google (titre, description, fiche agence)
- `styles.css` : couleurs, polices, mise en page
- `app.js` : affichage, textes d'interface FR / AR, boutons WhatsApp
- `contenu.js` : offres, Omra, avis, lignes maritimes
- `assets/logo/` : symbole du logo (marine, blanc, noir, avatar rond)
- `assets/photos/` : photos
