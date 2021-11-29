import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* FONT AWESOME IMPORTS */
import { library } from '@fortawesome/fontawesome-svg-core'; // import fa library
import { fab } from '@fortawesome/free-brands-svg-icons'; // import fa brand icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // import fa solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // import fa regular icons

/* PAGE IMPORTS */
import Home from './pages/Home';
import Health from './pages/Health';
import Family from './pages/Family';
import Careers from './pages/Careers';
import Covid from './pages/covid';

/* COMPONENT IMPORTS */
import Header from './components/Header';
import Footer from './components/Footer';

library.add(fab, fas, far);

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) =>
{


	return (
		<>
			<BrowserRouter>				
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/health" element={<Health />} />
					<Route path="/family" element={<Family />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/covid" element={<Covid />} />
					<Route path="*" element={<Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

interface AppProps { }

export default App;
