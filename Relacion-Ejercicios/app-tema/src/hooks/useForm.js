import { useState } from "react";

const useForm = () => {
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  const userForm = {
    username,
    email,
    text,
  };

  const hanleSubmit = () => {
    const newErrors = {};

    if (username && typeof username !== "string") {
      newErrors.username = "Error en el usuario";
    }

    if (email && !email.includes("@")) {
      newErrors.email = "Error en el email";
    }

    if (text && text.length > 50) {
      newErrors.text =
        "Error, longitud del texto superado (máximo 50 caracteres)";
    }

    setError(newErrors);
  };

  const handleChangeUsername = (e) => (setUsername(e.target.value));
  const handleChangeEmail = (e) => (setUsername(e.target.value));
  const handleChangeText = (e) => (setUsername(e.target.value));  

  return (handleChangeUsername, handleChangeText, handleChangeEmail, hanleSubmit);
};

export default useForm;
