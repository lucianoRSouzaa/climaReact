import { FaGithub } from "react-icons/fa6";

export default function Header() {
    return (
        <header className="d-flex align-items-center justify-content-center">
            <h1 className="fw-bold mt-2">Clima React</h1>
            <div className="icons">
                <FaGithub className="fa-xl" />
            </div>
        </header>
    );
}
