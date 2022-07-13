import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

/* FONT AWESOME IMPORTS */
import { library } from '@fortawesome/fontawesome-svg-core'; // import fa library
import { fab } from '@fortawesome/free-brands-svg-icons'; // import fa brand icons
import { fas } from '@fortawesome/free-solid-svg-icons'; // import fa solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // import fa regular icons

/* PAGE IMPORTS */
// CORE PAGES
import Home from './pages/Home';
import Health from './pages/Health';
import Family from './pages/Family';
import Careers from './pages/Careers';
import Covid from './pages/Covid';
import NotFound from './pages/NotFound';
import Resources from './pages/Resources';
// SUBPAGES
import Partners from './pages/subpages/Partners';
import WhyNow from './pages/subpages/WhyNow';
// BLOG PAGES
import Blog from './pages/blog/Blog';
import SinglePost from './pages/blog/SinglePost';
// TRIALS PAGES
import Trials from './pages/trials/Trials';
import Results from './pages/trials/Results';
import FullStudy from './pages/trials/FullStudy';
// UTILS PAGES
import Privacy from './pages/utils/Privacy';
import Terms from './pages/utils/Terms';

/* COMPONENT IMPORTS */
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeSearch from './pages/recipes/RecipeSearch';
import Recipe from './pages/recipes/Recipe';
import Submit from './pages/recipes/Submit';
import Angelica from './pages/blog/Angelica';
import Calanda from './pages/blog/Calanda';
import Jasmine from './pages/blog/Jasmine';
import Mariam from './pages/blog/Mariam';
import Angela from './pages/blog/Angela';
import Gaynell from './pages/blog/Gaynell';
import PMJ from './pages/blog/PMJ';
import Willy from './pages/blog/Willy';
import JBrooklere from './pages/blog/JBrooklere';
import Celeste from './pages/blog/Celeste';
import Danny from './pages/blog/Danny';
import Sonja from './pages/blog/Sonja';
import Walladean from './pages/blog/Walladean';
import CooperGreen from './pages/subpages/partners/CooperGreen';
import LHSA from './pages/subpages/partners/LHSA';
import Viva from './pages/subpages/partners/Viva';
import UWay from './pages/subpages/partners/UWay';

library.add(fab, fas, far);

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) =>
{

	useEffect(() =>
	{
		ReactGA.pageview(window.location.pathname + window.location.search);
	});

	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* Core Paths */}
					<Route path="/" element={<Home />} />
					<Route path="/health" element={<Health />} />
					<Route path="/family" element={<Family />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/covid" element={<Covid />} />
					<Route path="/resources" element={<Resources />} />
					{/* SubPage Paths */}
					<Route path="/partners" element={<Partners />} />
					<Route path="/partners/coopergreen" element={<CooperGreen />} />
					<Route path="/partners/lhsa" element={<LHSA />} />
					<Route path="/partners/vivahealth" element={<Viva />} />
					<Route path="/partners/unitedway" element={<UWay />} />
					<Route path="/whynow" element={<WhyNow />} />
					<Route path="/resources" element={<Resources />} />
					{/* Blog Paths */}
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/angelica" element={<Angelica />} />
					<Route path="/blog/calanda" element={<Calanda />} />
					<Route path="/blog/jasmine" element={<Jasmine />} />
					<Route path="/blog/mariam" element={<Mariam />} />
					<Route path="/blog/angela" element={<Angela />} />
					<Route path="/blog/gaynell" element={<Gaynell />} />
					<Route path="/blog/pmj" element={<PMJ />} />
					<Route path="/blog/willy" element={<Willy />} />
					<Route path="/blog/jbrooklere" element={<JBrooklere />} />
					<Route path="/blog/celeste" element={<Celeste />} />
					<Route path="/blog/danny" element={<Danny />} />
					<Route path="/blog/sonja" element={<Sonja />} />
					<Route path="/blog/walladean" element={<Walladean />} />
					<Route path="/blog/single/:id" element={<SinglePost />} />
					{/* Recipe Paths */}
					<Route path="/recipes" element={<RecipeSearch />} />
					<Route path="/recipes/:id" element={<Recipe />} />
					<Route path="/submit" element={<Submit />} />
					{/* Trial Paths */}
					<Route path="/trials" element={<Trials />} />
					<Route path="/trials/results/:text" element={<Results />} />
					<Route path="/trials/results/study/:text/:id" element={<FullStudy />} />
					<Route path="/trials/study/:id" element={<FullStudy />} />
					{/* Utils Paths */}
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/terms" element={<Terms />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

interface AppProps { }

export default App;
