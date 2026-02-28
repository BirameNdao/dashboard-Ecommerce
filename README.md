# Dashboard Entreprises

Une application de tableau de bord d'entreprise moderne et réactive construite avec React et Syncfusion.

## Description

Dashboard Entreprises est un système de gestion d'entreprise complet qui fournit des outils intégrés pour :
- **Visualisation des données** : graphiques, tableaux et représentations visuelles
- **Gestion des clients** : suivi et gestion de la base de données clients
- **Gestion des commandes** : suivi des commandes et des transactions
- **Gestion des employés** : administration du personnel et des rôles
- **Calendrier** : planification et événements
- **Chat** : communication intégrée
- **Notifications** : alertes et mises à jour en temps réel
- **Editeur de contenu** : création et modification de contenu
- **Sélecteur de couleurs** : personnalisation de l'interface
- **Kanban** : gestion des tâches et des projets

## Fonctionnalités Principales

### 📊 Tableaux de Bord
- Tableau de bord d'accueil avec métriques clés
- Graphiques interactifs (Lignes, Barres, Pie, Zone, etc.)
- Visualisation de données financières

### 📋 Gestion des Données
- **Clients** : Liste et gestion des clients
- **Commandes** : Suivi des commandes
- **Employés** : Annuaire des employés
- **Calendrier** : Événements et planification
- **Kanban** : Tableaux de gestion des tâches

### 🎨 Interface
- Thème clair/sombre
- Personnalisation des couleurs
- Navigation responsive
- Sidebar collapsible

### 🔧 Outils
- Calendrier interactif
- Éditeur de texte enrichi
- Chat en temps réel
- Notifications système

## Technologies Utilisées

- **React** 17.0.2 - Bibliothèque UI
- **Syncfusion** 19.4.x - Composants UI avancés
  - React Calendars
  - React Charts
  - React Dropdowns
  - React Grids
  - React Inputs
  - React Kanban
  - React Rich Text Editor
  - React Schedule
- **Tailwind CSS** - Framework CSS
- **React Router** 6.2.1 - Routage
- **React Icons** 4.3.1 - Icônes
- **Craco** - Configuration Create React App

## Installation

### Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn

### Étapes d'Installation

1. Clonez le repository :
```bash
git clone https://github.com/BirameNdao/Dashboard-Entreprises.git
cd Dashboard-Entreprises
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez l'application en mode développement :
```bash
npm start
```

L'application s'ouvrira à [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du Projet

```
src/
├── components/           # Composants réutilisables
│   ├── Button.jsx
│   ├── Cart.jsx
│   ├── Chat.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── ThemeSettings.jsx
│   ├── UserProfile.jsx
│   └── Charts/          # Composants de graphiques
├── contexts/            # Contexte React (gestion d'état)
├── data/               # Données statiques et dummy
├── pages/              # Pages de l'application
│   ├── Calendar.jsx
│   ├── ColorPicker.jsx
│   ├── Customers.jsx
│   ├── Ecommerce.jsx
│   ├── Editor.jsx
│   ├── Employees.jsx
│   ├── Kanban.jsx
│   ├── Orders.jsx
│   └── Charts/         # Pages de graphiques
├── App.js             # Composant principal
├── index.js           # Point d'entrée
└── index.css          # Styles globaux
```

## Scripts Disponibles

### `npm start`
Lance l'application en mode développement.

### `npm run build`
Construit l'application pour la production.

### `npm test`
Lance les tests.

### `npm run eject`
**Note : cette opération est irréversible.**

## Configuration

### Tailwind CSS
Le projet utilise Tailwind CSS pour le styling. Configuration dans `tailwind.config.js`.

### Craco
Utilisé pour personnaliser la configuration de Create React App sans l'éjecter. Configuration dans `craco.config.js`.

## Routes Principales

- `/` - Tableau de bord principal (Ecommerce)
- `/ecommerce` - Page Ecommerce
- `/orders` - Gestion des commandes
- `/employees` - Gestion des employés
- `/customers` - Gestion des clients
- `/kanban` - Tableau Kanban
- `/editor` - Éditeur de contenu
- `/calendar` - Calendrier
- `/color-picker` - Sélecteur de couleurs
- `/line`, `/area`, `/bar`, `/pie` - Graphiques
- `/financial`, `/color-mapping`, `/pyramid`, `/stacked` - Graphiques avancés
- `/chat` - Chat
- `/notifications` - Notifications

## Gestion de l'État

L'application utilise le Context API React pour la gestion de l'état global, notamment :
- Paramètres de thème
- État de la sidebar
- Contexte utilisateur

Voir [src/contexts/ContextProvider.js](src/contexts/ContextProvider.js) pour plus de détails.

## Données

Les données statiques/dummy sont définies dans [src/data/dummy.js](src/data/dummy.js)

## Contribution

Les contributions sont bienvenues ! Veuillez :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Auteur

**Birame Ndao** - [GitHub](https://github.com/BirameNdao)

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Support

Pour toute question ou rapport de bug, veuillez ouvrir une [issue](https://github.com/BirameNdao/Dashboard-Entreprises/issues) sur GitHub.

---

**Version actuelle :** 0.1.0  
**Dernière mise à jour :** Février 2026
