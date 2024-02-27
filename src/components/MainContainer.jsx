import { Route, Routes } from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Black from './Black';
import Green from './Green';
import Home from './Home';

export default function MainContainer() {
	return (
		<div id='main-section'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/blue' element={<Blue />} />
				<Route path='/red' element={<Red />} />
				<Route path='/black' element={<Black />} />
				<Route path='/green' element={<Green />} />
			</Routes>
		</div>
	);
}
