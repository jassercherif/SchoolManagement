#!/bin/bash

# Démarrage du frontend
echo "Démarrage du frontend..."
cd schoolmanagementfront || { echo "Le dossier 'schoolmanagementfront' est introuvable."; exit 1; }
npm run dev &
cd ..

# Démarrage du backend
echo "Démarrage du backend..."
cd schoolmanagementback || { echo "Le dossier 'schoolmanagementback' est introuvable."; exit 1; }
./mvnw spring-boot:run &
cd ..

# Instructions pour arrêter les serveurs
echo "Les deux serveurs sont démarrés."