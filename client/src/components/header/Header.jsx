import "./HeaderModules.css";
import { Link } from "react-router-dom";

export default function Header({ exit }) {
	return (
		<header>
			<div className="nav-list">
				<div className="nav-left">
					<Link to="/home">
						<h1>START Videogames TIME</h1>
					</Link>
				</div>
				<div className="nav-right">
					<Link to="/home" className="flex">
						<p>Inicio</p>
					</Link>
					<Link to="./create" className="flex">
						<p>Crear Videojuego</p>
					</Link>
					<button onClick={exit} className="flex">
						<span className="material-symbols-outlined">logout</span>
						<p>Cerrar sesión</p>
					</button>
				</div>
			</div>
		</header>
	);
}