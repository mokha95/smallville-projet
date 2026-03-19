const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/Users");
// Charge les variables d'environnement depuis .env
require("dotenv").config();

const app = express();
// Permet de lire le JSON dans le body des requetes
app.use(express.json());

// Donnees en memoire pour l'apprentissage
const personnages = [
  { id: 1, nom: "Clark Kent", role: "Hero" },
  { id: 2, nom: "Lois Lane", role: "Journaliste" },
  { id: 3, nom: "Lex Luthor", role: "Rival" },
];

// Route de test pour verifier que le serveur repond
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Retourne tous les personnages
app.get("/api/characters", (req, res) => {
  res.json(personnages);
});

// Route simple pour valider que l'app tourne
app.get("/", (req, res) => {
  res.send("Smallville backend OK");
});

// Port du serveur
const PORT = 3001;

// Connexion a MongoDB puis demarrage du serveur
mongoose
  .connect(process.env.MONGODB_URI, { dbName: process.env.DB_NAME })
  .then(() => {
    console.log("MongoDB connected");
    // Le serveur demarre seulement si la base est OK
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    // Affiche l'erreur si la connexion echoue
    console.error("MongoDB connection error:", err.message);
  });
