import Text from "./components/text/index";
import './styles/index.scss';
import { Link } from "react-router-dom";

function App(props) {
	return (
		<div className="main">
			<header className="header">
				<div className="header__heading">
					<Text 
						tag="h1"
						className="header__heading-text"
					>
						Навигация по жизни с помощью астрологии
					</Text>
				</div>
				<div className="header__subheading">
					<Text
						className="header__subheading-text"
					>
						Обучение людей путем упрощения астрологии для
							большая осведомленность
					</Text>
				</div>
				<div>
					<Link
						className="header__link"
						to="/greeting">Попробовать
					</Link>
				</div>
			</header>
		</div>
	);
}

export default App;
