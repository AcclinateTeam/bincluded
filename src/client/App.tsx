import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
import * as FullStory from '@fullstory/browser';

library.add(fab, fas, far);

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) =>
{
	FullStory.identify('users', {
		displayName: 'binc_user',
		email: 'help@acclinate.com',
		feature_packs: ['MAPS', 'DEV', 'DATA'],
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
					<Route path="/whynow" element={<WhyNow />} />
					<Route path="/resources" element={<Resources />} />
					{/* Blog Paths */}
					<Route path="/blog" element={<Blog />} />
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
