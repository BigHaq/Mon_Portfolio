# Design System: Mohamed Haq Portfolio

Ce document définit les standards visuels et techniques pour le portfolio de Mohamed Haq. Il doit être utilisé comme référence par l'agent IA pour toute génération ou modification d'écran.

## 🎨 Palette de Couleurs (Thème Sombre Premium)

| Rôle | Variable CSS | Valeur Hex | Usage |
|:---|:---|:---|:---|
| **Fond Principal** | `--cream` | `#0B0A08` | Arrière-plan de la page |
| **Texte Principal** | `--ink` | `#FAF6EE` | Titres et textes importants |
| **Accent (Ambre)** | `--amber` | `#E68A00` | CTA, liens, éléments mis en avant |
| **Accent Light** | `--amber-light` | `#FFB347` | Hovers et dégradés |
| **Texte Secondaire** | `--text-muted` | `#A39B8B` | Paragraphes, labels, stats |
| **Surfaces** | `--white` | `#14120F` | Cartes, boîtes techniques |
| **Neutre Sombre** | `--warm-grey` | `#1C1A17` | Sections alternées, icônes |

## Typography

- **Titres (H1, H2, H3) & Logo** : `Syne`, sans-serif (Bold/ExtraBold). Style affirmé, moderne, espacement serré.
- **Corps de texte** : `Outfit`, sans-serif. Moderne, géométrique, très lisible.
- **Labels** : Uppercase, letter-spacing: 1.5px, font-weight: 700.

## 📐 Composants & Styles

- **Radius** : 32px pour les grandes cartes, 16px pour les éléments moyens, 50px pour les boutons "pill".
- **Boutons** :
    - *Primary* : Fond ambre, texte crème, effet de scintillement (shimmer), ombre portée douce.
    - *Secondary* : Soulignement ambre au hover, texte clair.
- **Effets** :
    - Glassmorphisme : `backdrop-filter: blur(20px)` avec fond sombre semi-transparent.
    - Grain/Bruit : Overlay subtil sur tout le body pour un aspect texturé premium.
    - Glow : Cercles radiaux subtils en arrière-plan pour créer de la profondeur.

## 🚀 Principes de Design

1. **Espace de Respiration** : Utiliser des paddings généreux (8rem+ pour les sections) pour un aspect haut de gamme.
2. **Micro-interactions** : Transitions douces (0.3s - 0.5s), effets de survol sur toutes les cartes.
3. **Hiérarchie Claire** : Utiliser l'ambre avec parcimonie pour diriger l'œil vers les actions principales.
