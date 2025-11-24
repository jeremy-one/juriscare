# Juriscare - Plateforme de médiation

Juriscare est une plateforme moderne au service de la médiation, développée avec Next.js 16, TypeScript et Tailwind CSS.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
juriscare/
├── app/                      # Pages Next.js (App Router)
│   ├── page.tsx             # Page d'accueil
│   ├── mediateurs/          # Page Médiateurs
│   ├── mediation/           # Page Médiation
│   ├── contact/             # Page Contact
│   ├── layout.tsx           # Layout principal
│   └── globals.css          # Styles globaux
├── components/
│   ├── layout/              # Composants de mise en page
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/                  # Composants UI réutilisables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── FAQ.tsx
│   │   └── Section.tsx
│   └── sections/            # Sections de page
│       └── Hero.tsx
└── public/                  # Assets statiques
    └── juriscare.svg        # Logo
```

## 🎨 Design

Le design s'inspire de la charte graphique Juriscare avec :
- Palette de couleurs : bleu gris (#3d5a6c), vert secondaire (#8b9a85), beige accent (#b8a07e)
- Typography moderne et lisible
- Design responsive mobile-first
- Animations subtiles et transitions fluides

## 📄 Pages

### 1. Page d'accueil (/)
- Hero avec 3 CTA principaux
- Présentation de Juriscare
- Pourquoi la médiation est indispensable
- Section médiateurs
- FAQ
- CTA de conversion

### 2. Page Médiateurs (/mediateurs)
- Hero dédié aux professionnels
- Avantages de rejoindre le réseau
- Section formations avec liens vers ressources
- FAQ spécifique médiateurs

### 3. Page Médiation (/mediation)
- Hero pour justiciables et entreprises
- Pourquoi choisir la médiation
- 3 niveaux de service détaillés
- Points forts de Juriscare
- FAQ

### 4. Page Contact (/contact)
- Formulaire de contact complet
- Informations de contact
- Option de rappel

## 🛠️ Technologies

- **Next.js 16** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Framework CSS utility-first
- **React 19** - Bibliothèque UI

## 🎯 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Navigation fluide avec menu mobile
- ✅ Composants réutilisables
- ✅ FAQ interactives
- ✅ Formulaire de contact
- ✅ SEO optimisé
- ✅ Performance optimale avec Next.js

## 🔧 Configuration

### Variables CSS personnalisées

Les couleurs de la marque sont définies dans `app/globals.css` :

```css
--primary: #3d5a6c;
--primary-dark: #2c4352;
--secondary: #8b9a85;
--accent: #b8a07e;
```

## 📝 À faire

- [ ] Intégrer un véritable backend pour le formulaire de contact
- [ ] Ajouter l'intégration LinkedIn pour les actualités
- [ ] Ajouter les profils des médiateurs avec photos
- [ ] Mettre en place un système de réservation/prise de RDV
- [ ] Ajouter des animations avancées
- [ ] Optimiser les images avec next/image

## 🚀 Déploiement

Le projet est prêt pour être déployé sur :
- Vercel (recommandé)
- Netlify
- Tout hébergeur supportant Node.js

```bash
npm run build
```

## 📧 Contact

Pour toute question sur le projet : contact@juriscare.fr

---

Développé avec Next.js et Tailwind CSS
