const express = require("express");
const app = express();
let etudiants = []; // le tableau d'étudiants
let compteur = 0; // servira comme compteur d'étudiants

app.get("/etudiants", (req, res) => {
  console.log("### récupérer tous les étudiants");
});

app.get("/etudiants/:id", (req, res) => {
  console.log(`### récupérer l'étudiant d'id ${req.params.id}`);
});

app.post("/etudiants", (req, res) => {
  console.log("### ajouter un étudiant");
});

app.put("/etudiants/:id", (req, res) => {
  console.log(`### modifier l'étudiant d'id ${req.params.id}`);
});

app.delete("/etudiants/:id", (req, res) => {
  console.log(`### supprimer l'étudiant d'id ${req.params.id}`);
});

app.listen(3001, () => {
  console.log("Serveur écoute sur port 3001");
});