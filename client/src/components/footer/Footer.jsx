import "./Footer.css";
import { Link } from "react-router-dom";

const linkedIn = "https://www.linkedin.com/in/brenda-baumann-b74956195/";
const github = "https://github.com/BBrendaBaumann";


export default function Footer() {
	return (
		<footer>
			<div className="container">
				<p>Brenda Baumann | PI Videogames</p>
				<p>CONTACTO</p>
				
				<div className="links">
					<Link to={`${github}`} target="_blank">
						<i className="fa-brands fa-github"></i>
					</Link>
					<Link to={`${linkedIn}`} target="_blank">
						<i className="fa-brands fa-linkedin"></i>
					</Link>
					
				</div>
			</div>
		</footer>
	);
}