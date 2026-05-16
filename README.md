# Faramaya Hair — Site one-page premium

> **Statut** : v1 prête à présenter. Génération de modèles éditoriaux Nano Banana en cours.

## Aperçu

Landing one-page boudoir luxe pour vendre des mèches indiennes premium (Wavy, Kinky Curly, Straight Silk). Conversion via WhatsApp direct (placeholder à remplacer).

## Lancer le site

```bash
cd "/Users/ralphmayola/Documents/MR Tech Lab/Projets/Naomy/faramaya-site"
open index.html
# ou pour un serveur local :
python3 -m http.server 8080
```

## Arborescence

```
faramaya-site/
├── index.html        — page unique premium
├── styles.css        — DA boudoir luxe (prune + or champagne)
├── script.js         — reveal au scroll, hover videos, deeplinks WhatsApp
├── README.md
└── assets/
    ├── brand/
    │   └── logo-faramaya.png
    ├── models/
    │   ├── model-01..09.mp4         — vidéos showroom (poster auto-generated)
    │   ├── poster-01..09.jpg        — vignettes pour preload
    │   └── editorial-*.jpg          — modèles Nano Banana Pro (à venir)
    └── testimonials/
        ├── maria-9-10.jpeg
        └── ruth-musombo.jpeg
```

## Personnalisation avant mise en ligne

### 1. Numéro WhatsApp
Remplacer `33XXXXXXXXX` dans :
- `script.js` ligne `const WA_NUMBER = '33XXXXXXXXX'`
- `index.html` : 2 occurrences `wa.me/33XXXXXXXXX` (CTA final + flotteur + footer)

### 2. Prix
Section Collection — adapter dans `index.html` les `<span class="price">` :
- Wavy Natural : `180€`
- Kinky Curly : `195€`
- Straight Silk : `175€`

### 3. Email
`contact@faramayahair.com` apparaît 2 fois dans `index.html`.

### 4. Comptes sociaux
Footer : remplacer `instagram.com/faramayahair` et `tiktok.com/@faramayahair`.

### 5. Témoignages
Section Voix — citations dans `index.html`. Maria et Ruth sont des vraies clientes (témoignages WhatsApp), à conserver.

## Direction artistique

| Élément | Valeur |
|---|---|
| Palette principale | Prune profond `#1a0a12` → `#7a3855` |
| Accent or | Champagne `#c9a96a` / `#e6d4a7` |
| Ivoire texte | `#f7f1e8` |
| Serif (titres) | Cormorant Garamond (italic = élégance) |
| Sans (UI) | Inter |
| Mood | Boudoir luxe sombre, velours, Vogue Italia |

## Déploiement recommandé

**Netlify drag & drop** (le plus rapide) :
1. Aller sur app.netlify.com
2. Glisser le dossier `faramaya-site/` sur la zone de deploy
3. Récupérer l'URL `xxx.netlify.app`
4. Pointer le domaine `faramayahair.com` ensuite

## Roadmap v2

- [ ] Génération des 3 modèles éditoriaux Nano Banana Pro
- [ ] Vraies photos shooting pro (board, lookbook)
- [ ] Configurateur de bundle (longueur × texture × densité)
- [ ] Blog conseils entretien (SEO)
- [ ] Module avis vérifiés (Trustpilot ou Loox)
- [ ] Multi-langue FR / EN
- [ ] Pixel Meta + TikTok pour pub
- [ ] Newsletter Brevo connectée

## Crédits

Conçu et développé pour Naomy par **MR Tech Lab**.
