import "../styles/globals.css"
import Navigation from "./components/Navigation";
import { font } from "./fonts.js";

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<title>App with Next 13 🖤 </title>
			</head>
			<body className={font.className} >
				<Navigation/>
				{children}
			</body>
		</html>
	);
}
