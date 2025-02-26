# ÉVALUATION ROMAIN GILOT

## Structure du projet

Le projet est structuré de cette façon 

````
- Dossier apps qui contient les projets api et web
- Dossier .github avec les workflows
- Dossier env avec les fichiers .env
- Fichier docker compose avec toute la logique de lancement du projet
- fichier package.json avec tous les raccourcies de lancement en dev ou prod
````

Le front est réalisé avec React JS sous vite
-> Affiche les utilisateurs du container DB

Le back est réalisé avec Nest JS

## Lancer le projet
Démarrer pour le developpement

- yarn start:dev
- yarn stop:dev
```
 "start:dev": "docker compose --env-file env/.env.dev up --build",
 "stop:dev": "docker compose --env-file env/.env.dev down",
```

Démarrer pour la production
- yarn start:prod
- yarn stop:prod
```
 "start:prod": "docker compose --env-file env/.env.prod up --build",
 "stop:prod": "docker compose --env-file env/.env.prod down"
```

## Workflows
Il y a 2 workflows, 
- notify = pour notifier via discord lors d'un push
- deploy = pour push le docker image

PS : les variables secret ne fonctionne pas car je l'ai pas mis sur le github