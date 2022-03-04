import React from 'react';

import Text from '../../text/index';
import '../../styles/index.scss';
import './styles/index.scss';

import './styles/index.scss';

import { Link, useNavigate } from "react-router-dom";


const GanderPage = (props) => {

	const navigate = useNavigate();

	const [choose, setChoose] = React.useState('');

	const handleChange = (e) => {
		const value = e.target.value;

		setChoose(value);
	};

	const goToBackPage = () => navigate('/purpose');

	return (
		<div className="ganderPage">
			<div className="popup">
				<Text
					tag="h2"
					className="popup__heading"
				>
					Ваш пол?
				</Text>
				<form>
					<div className="popup__radiobtns">
						<div className="popup__radiobtn">
							<label className="popup__radiobtn-label">
								<input 
									type="radio"
									value="man"
									checked={choose === 'man'}
									onChange={handleChange}
									className="popup__radiobtn-input"
								/>
								Мужской
							</label>
						</div>
						<div className="popup__radiobtn">
							<label className="popup__radiobtn-label">
								<input
									type="radio"
									value="girl"
									checked={choose  === 'girl'}
									onChange={handleChange}
									className="popup__radiobtn-input"
								/>
								Женский
							</label>
						</div>
					</div>
				</form>
				<div className="popup__btns-wrapp">
					<div className="popup__btn">
						<a
							className="popup__link"
							onClick={goToBackPage}
						>
							Назад
						</a>
					</div>
					<div className="popup__btn">
						<Link
							className="popup__link"
							to="/humanDesign">Продолжить
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(GanderPage);