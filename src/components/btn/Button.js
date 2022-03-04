import React from 'react';

import './styles/index.scss';

const Button = (props) => {


	return (
		<button className="button">
			{props.children}
		</button>
	);
};

export default React.memo(Button);