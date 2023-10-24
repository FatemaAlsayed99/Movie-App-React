import { useContext } from "react";
import "./Contact.css"
import { langContext } from "../../Context/language";


export default function Contact() {
  const { language, setLanguage } = useContext(langContext);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
  };

  return (
    <div>
      <h1>Current Language: {language}</h1>
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
    }