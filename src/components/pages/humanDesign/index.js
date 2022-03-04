import React from 'react';

import Text from '../../text/index';
import '../../styles/index.scss';
import './styles/index.scss';

import './styles/index.scss';

import { Link, useNavigate } from "react-router-dom";


const HumanDesignPage = (props) => {

	const navigate = useNavigate();

	const [choose, setChoose] = React.useState('');

	const handleChange = (e) => {
		const value = e.target.value;

		setChoose(value);
	};

	const goToBackPage = () => navigate('/gander');

	return (
		<div className="ganderPage">
			<div className="popup">
				<Text
					tag="h2"
					className="popup__heading"
				>
					Насколько хорошо вы разбираетесь в Дизайне Человека?
				</Text>
				<form>
					<div className="popup__radiobtns">
						<div className="popup__radiobtn">
							<label className="popup__radiobtn-label">
								<input 
									type="radio"
									value="new"
									checked={choose === 'new'}
									onChange={handleChange}
									className="popup__radiobtn-input"
								/>
								Новичок
							</label>
						</div>
						<div className="popup__radiobtn">
							<label className="popup__radiobtn-label">
								<input
									type="radio"
									value="middle"
									checked={choose  === 'middle'}
									onChange={handleChange}
									className="popup__radiobtn-input"
								/>
								Средне
							</label>
						</div>
						<div className="popup__radiobtn">
							<label className="popup__radiobtn-label">
								<input
									type="radio"
									value="expert"
									checked={choose  === 'expert'}
									onChange={handleChange}
									className="popup__radiobtn-input"
								/>
								Эксперт
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
							to="/loader">Продолжить
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(HumanDesignPage);