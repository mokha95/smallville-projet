import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./Signup.css";
import { createUser } from "../../apis/users";
import { useNavigate } from "react-router-dom";

// composant Inscription
export default function Signup() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("il faut préciser votre nom")
      .min(2, "un vrai nom"),
    email: yup
      .string()
      .required("il faut préciser votre email")
      .email("l'email n'est pas valide"),
    password: yup
      .string()
      .required("il faut préciser votre mot de passe")
      .min(6, "Mot de passe trop court"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const submit = handleSubmit(async (credentials) => {
    console.log(credentials);
    try {
      const user = await createUser(credentials);
      // navigate("/signin");
      clearErrors();
    } catch (message) {
      setError("gneric", { type: "generic", message });
    }
  });

  return (
    <div className="text-center p-4 text-white">
      <form onSubmit={submit}>
        <div className="d-flex flex-column justify-content-center align-items-center mb-4">
          {" "}
          {/* Ajout de d-flex et align-items-center */}
          <h2>Inscription</h2>
          <label htmlFor="name" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-control inputForm"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-danger mt-2">{errors.name.message}</p>
          )}
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center mb-4">
          {" "}
          {/* Appliqué à toutes les divs */}
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control inputForm"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-danger mt-2">{errors.email.message}</p>
          )}
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center mb-4">
          {" "}
          {/* Appliqué à toutes les divs */}
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control inputForm"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-danger mt-2">{errors.password.message}</p>
          )}
        </div>
        {errors.generic && (
          <p className="text-danger">{errors.password.message}</p>
        )}
        <div className="d-flex justify-content-center">
          {" "}
          {/* Pour centrer le bouton */}
          <button disabled={isSubmitting} className="btn btn-primary">
            Inscription
          </button>
        </div>
      </form>
    </div>
  );
}
