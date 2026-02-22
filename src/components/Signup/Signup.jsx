import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./Signup.css";
import { createUser } from "../../apis/users";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
      await createUser(credentials);
      navigate("/Signin");
      clearErrors();
    } catch (message) {
      setError("generic", { type: "generic", message });
    }
  });

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Inscription</h2>
          <p className="auth-subtitle">
            Rejoignez la communauté Smallville et créez votre compte.
          </p>
        </div>
        <form onSubmit={submit} className="auth-form">
          <div className="auth-field">
            <label htmlFor="name" className="auth-label">
              Nom
            </label>
            <input
              id="name"
              type="text"
              className="auth-input"
              placeholder="Votre nom"
              autoComplete="name"
              {...register("name")}
            />
            {errors.name && <p className="auth-error">{errors.name.message}</p>}
          </div>

          <div className="auth-field">
            <label htmlFor="email" className="auth-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="auth-input"
              placeholder="vous@exemple.com"
              autoComplete="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="auth-error">{errors.email.message}</p>
            )}
          </div>

          <div className="auth-field">
            <label htmlFor="password" className="auth-label">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              className="auth-input"
              placeholder="Au moins 6 caractères"
              autoComplete="new-password"
              {...register("password")}
            />
            {errors.password && (
              <p className="auth-error">{errors.password.message}</p>
            )}
          </div>

          {errors.generic && (
            <p className="auth-error auth-error-block">
              {errors.generic.message}
            </p>
          )}

          <button disabled={isSubmitting} className="auth-button">
            Créer mon compte
          </button>

          <p className="auth-footer">
            Déjà un compte ?{" "}
            <Link className="auth-link" to="/Signin">
              Connexion
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
