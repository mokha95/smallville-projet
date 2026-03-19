const mongoose = require("mongoose");

// Schema utilisateur pour l'inscription et la connexion
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    // Pour l'instant en clair (on va le hasher apres)
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// Modele Mongoose pour acceder a la collection users
module.exports = mongoose.model("User", userSchema);
