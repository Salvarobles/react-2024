import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

/**
 * @author Salvador Robles Gómez
 * Footer: Contiene el componente del pie de página con el nombre del creador y sus redes
 * sociales.
 */
const Footer = () => {

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <footer className={`${theme}rounded-lg shadow m-4 dark:bg-gray-800`}>
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className={`${theme} text-sm sm:text-center dark:text-gray-400`}>
            Robles Gómez, Salvador
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0" >
            <li>
              <a href="https://www.linkedin.com/in/salvador-robles-g%C3%B3mez-613ba329b/" className="hover:underline me-4 md:me-6">
                <img src="/src/assets/images/linkedin.svg" alt="linkedid" />
              </a>
            </li>
            <li>
            <a href="https://github.com/Salvarobles" className="hover:underline me-4 md:me-6">
                <img src="/src/assets/images/github.svg" alt="linkedid" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;

