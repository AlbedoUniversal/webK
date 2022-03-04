import React from 'react';

import Text from '../../text/index';

import '../../styles/index.scss';
import './styles/index.scss';

import { Link, useNavigate } from "react-router-dom";

const PurposePage = (props) => {

	const navigate = useNavigate();

	const [choose, setChoose] = React.useState('');

	const handleChange = (e) => {
		const value = e.target.value;

		setChoose(value);
	};

	const goToBackPage = () => navigate('/greeting');

	const cb = () => {
		if (choose === '') return;
		console.log(choose);
	}

	return (
		<div className="purposePage">
			<div className="popup">
				<Text
					tag="h2"
					className="popup__heading"
				>
					Какова ваша главная цель?
				</Text>
				<form>
					<div className="popup__radiobtns">
						<div className="popup__radiobtn">
							<label className="popup__radiobtn-label">
								<input 
									type="radio"
									value="mine"
									checked={choose === 'mine'}
									onChange={handleChange}
									className="popup__radiobtn-input"
								/>
								Узнать больше о себе
							</label>
						</div>
						<div className="popup__radiobtn">
							<label className="popup__radiobtn-label">
								<input
									type="radio"
									value="otherPeople"
									checked={choose  === 'otherPeople'}
									onChange={handleChange}
									className="popup__radiobtn-input"
								/>
								Узнать больше о другом человеке
							</label>
						</div>
						<div className="popup__radiobtn">
							<label className="popup__radiobtn-label">
								<input
									type="radio"
									value="both"
									checked={choose === 'both'}
									onChange={handleChange}
									className="popup__radiobtn-input"
								/>
								И то, и то
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
							onClick={cb}
							className="popup__link"
							to="/gander">Продолжить
						</Link>
					</div>
				</div>
				
			</div>

		</div>
	);
};

export default React.memo(PurposePage);