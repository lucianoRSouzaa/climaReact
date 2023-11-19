import { FaGithub, FaMoon } from "react-icons/fa6";
import { useTheme } from './Theme/ThemeContext';
import { BsSunFill } from "react-icons/bs";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={`d-flex align-items-center justify-content-center ${theme === 'dark' ? 'dark' : ''}`}>
            <h1 className="fw-bold mt-2">Clima React</h1>
            <div className="icons d-flex align-items-center">
                <input onClick={toggleTheme} type="checkbox" className="checkbox" id="chk" />
                <label className="label" htmlFor="chk">
                    <BsSunFill className="icon-sun-theme" />
                    <FaMoon className="icon-moon-theme" />
                    <div className="ball"></div>
                </label>
                <a className="link-gitHub" href="https://github.com/lucianoRSouzaa">
                    <FaGithub className="icon-gitHub" />
                </a>
            </div>
        </header>
    );
}
