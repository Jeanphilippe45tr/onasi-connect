# Collège ONASI — Connect

Site web officiel du Collège ONASI, établissement d'enseignement secondaire bilingue à Ebolowa, Cameroun.

## Technologies utilisées

- **Vite** — build tool
- **TypeScript** — langage principal
- **React** — framework UI
- **shadcn/ui** — composants UI
- **Tailwind CSS** — styles

## Démarrage du projet

```sh
# Étape 1 : Cloner le dépôt
git clone https://github.com/Jeanphilippe45tr/onasi-connect.git

# Étape 2 : Se placer dans le dossier du projet
cd onasi-connect

# Étape 3 : Installer les dépendances
npm install

# Étape 4 : Lancer le serveur de développement
npm run dev
```

Le serveur démarre sur http://localhost:8080.

## Scripts disponibles

```sh
npm run dev       # Serveur de développement
npm run build     # Build de production
npm run preview   # Prévisualiser le build
npm run lint      # Vérification ESLint
```

## Structure du projet

```
src/
├── assets/         # Images et ressources statiques
├── components/     # Composants réutilisables (Header, Footer, etc.)
│   └── ui/         # Composants shadcn/ui
├── hooks/          # Hooks personnalisés
├── pages/          # Pages de l'application
└── App.tsx         # Composant racine
```

## Contribution

1. Créez une branche depuis `main`
2. Faites vos modifications
3. Ouvrez une Pull Request vers `main`
