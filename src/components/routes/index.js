import * as React from 'react'
import {
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';

import './styles/index.scss';

import App from '../../App';
import GreetingPage from '../pages/greeting/index';
import PurposePage from '../pages/purpose/index';
import GanderPage from '../pages/gander/index';
import HumanDesignPage from '../pages/humanDesign/index';
import LoaderPage from '../pages/loader/index';

import { TransitionGroup, CSSTransition } from 'react-transition-group'

const PopupRoutes = () => {

	const routes = [
		{ path: '/', name: 'Main', Component: <App /> },
		{ path: 'greeting', name: 'greeting', Component:<GreetingPage /> },
		{ path: 'purpose', name: 'purpose', Component: <PurposePage />},
		{ path: 'gander', name: 'gander', Component: <GanderPage />},
		{ path: 'humanDesign', name: 'humanDesign', Component: <HumanDesignPage />},
		{ path: 'loader', name: 'loader', Component: <LoaderPage />},
	];

	const location = useLocation();

	return (
		<TransitionGroup>
			<CSSTransition
				timeout={500}
				classNames='page'
				key={location.key}
			>
				<Routes>
					{routes.map(({ path, Component }) => (
					<Route 
						key={path}
						exact path={path}
						element={Component} />
					))}
				</Routes>
			</CSSTransition>
		</TransitionGroup>
	)
}

export default React.memo(PopupRoutes);