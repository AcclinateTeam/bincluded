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
import Home from './pages/Home/Home';
import Resources from './pages/resources/Resources';
import Health from './pages/resources/Health';
import Family from './pages/resources/Family';
import Careers from './pages/resources/Careers';
import Covid from './pages/covid/Covid';
import ToolKit from './pages/subpages/ToolKit';
import NotFound from './pages/NotFound';
// PARTNER PAGES
import Partners from './pages/partners/Partners';
import SinglePartner from './pages/partners/SingleParnter';
// SUBPAGES
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
// THEME STYLES
import Header from './theme/Header';
import Footer from './theme/Footer';
/* COMPONENT IMPORTS */
import RecipeSearch from './pages/recipes/RecipeSearch';
import Recipe from './pages/recipes/Recipe';
import Submit from './pages/recipes/Submit';
import Stories from './pages/blog/Stories';
import SingleStory from './pages/blog/SingleStory';
import Articles from './pages/blog/Articles';

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
					<Route path="/resources" element={<Resources />} />
					<Route path="/resources/health" element={<Health />} />
					<Route path="/resources/family" element={<Family />} />
					<Route path="/resources/careers" element={<Careers />} />
					<Route path="/covid" element={<Covid />} />

					{/* Partner Page Paths */}
					<Route path="/partners" element={<Partners />} />
					<Route path="/partners/:slug" element={<SinglePartner />} />

					{/* SubPage Paths */}
					<Route path="/whynow" element={<WhyNow />} />
					<Route path="/toolkit" element={<ToolKit />} />
					
					{/* Blog Paths */}
					<Route path="/blog" element={<Blog />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/articles/:slug" element={<SinglePost />} />

					{/* Stories Paths */}
					<Route path="/stories" element={<Stories />} />
					<Route path="/stories/:slug" element={<SingleStory />} />

					{/* Recipe Paths */}
					{/* <Route path="/recipes" element={<RecipeSearch />} />
					<Route path="/recipes/:id" element={<Recipe />} />
					<Route path="/submit" element={<Submit />} /> */}

					{/* Trial Paths */}
					<Route path="/trials" element={<Trials />} />
					<Route path="/trials/results/:text" element={<Results />} />
					<Route path="/trials/results/study/:text/:id" element={<FullStudy />} />
					<Route path="/trials/study/:id" element={<FullStudy />} />

					{/* Utils Paths */}
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/terms" element={<Terms />} />
					{/* <Route path="*" element={<NotFound />} /> */}
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

interface AppProps { }

export default App;
