// import { useState } from 'react';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
	return (
		<>
			<div id='container'>
				<MainContainer />
			</div>
      <footer id='stickyFooter'>
        <NavBar/>
      </footer>
		</>
	);
}

export default App;
