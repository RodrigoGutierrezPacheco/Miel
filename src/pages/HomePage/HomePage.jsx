import "./HomePage.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalFooter } from "react-bootstrap";

function HomePage() {
  return (
    <div>
			<Container>
				<img className="img-r-1" src="images/1.png" alt="logo" />
			</Container>
			<p className="hr-l"><a style={{display:'none'}}>.</a></p>
			<Container className="left">
				<h2>¿Quienes somos?</h2>
				<p>Somos una familia de productores de miel originarios de Acapulco,Guerrero. Nos dedicamos a la produccion de miel 100% orgnica, nuestras abejas reciben el mejor trato y nuestro proceso de produccion de miel es el mas adecuado para que puedas consumir la miel todo el año.
				</p>
			</Container>
				<img className="img-r-1 height1" src="images/3.jpg" alt="" />
				<p className="hr-r"><a style={{display:'none'}}>.</a></p>
			<Container className="right">
				<h2>Nuestros Productos</h2>
				<p>Nuestro fuerte es la miel</p>
				<div>
				<li>100% natural</li>
				<li>Organica</li>
				<li>Cosechada y producida bajo los mas altos estandares de calidad e higiene</li>
				<li>Fresca para consumir todos los dias del año</li>
				</div>
			</Container>		
    </div>
  );
}

export default HomePage;
