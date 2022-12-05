export default function Layout({ children }) {
	return (
		<div>
			<marquee style={{ color: "#000", background: "#fff", textAlign: 'center'}} direction='up' behavior="slide">Desarrollado por Alexis Mendez
				<marquee style={{ color: "#000", background: "#fff" }}>
				
					&bull;Javascript &bull; React &bull; HTML &bull; CSS &bull; Node Js
					&bull; PostgreSQL
				</marquee>
			</marquee>

			{children}
		</div>
	);
}
