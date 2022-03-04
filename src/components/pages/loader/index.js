import React from 'react';

import Text from '../../text/index';

import '../../styles/index.scss';
import './styles/index.scss';
import { Link } from "react-router-dom";


const LoaderPage = (props) => {

	return (
		<div className="loaderPage">
			<div className="popup">
				<Text
					tag="h2"
					className="popup__heading"
				>
					Отлично!
						Переходим к
						построению графа
				</Text>
				<div>
					<div class = "centered">
						<div class = "blob-1"></div>
						<div class = "blob-2"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(LoaderPage);