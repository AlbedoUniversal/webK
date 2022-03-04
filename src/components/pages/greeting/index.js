import React from 'react';

import Text from '../../text/index';

import '../../styles/index.scss';
import './styles/index.scss';
import { Link } from "react-router-dom";


const GreetingPage = (props) => {

	return (
		<div className="greetingPage">
			<div className="popup">
				<Text
					tag="h2"
					className="popup__heading"
				>
					Добро пожаловать!
				</Text>
				<Text
					className="popup__descr"
				>
					Это уникальный инструмент для самопознания и реализации твоих скрытах талантов.
				</Text>
				<Text
					className="popup__descr"
				>
					Покажем вам ваш генетический потенциал на уровне биохимии.
				</Text>
				<Text
					className="popup__descr"
				>
					Дадим точнейшие прогнозы на каждый день и поможем найти или укрепить отношения с Любимым человеком.
				</Text>
				<div className="popup__btns-wrapp">
					<div className="popup__btn">
						<Link
							className="popup__link"
							to="/purpose">Начать
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(GreetingPage);