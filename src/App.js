// App.js
import React from 'react';
import './css/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StockPage from './pages/StockPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ErrorPage from './pages/ErrorPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/services',
		element: <ServicesPage />,
	},	{
		path: '/portfolio',
		element: <PortfolioPage />,
		children: [
			{
				path: "/portfolio/:page",
				element: <PortfolioPage />
			},
		]
	},
	{
		path: '/contact',
		element: <ContactPage />,
	},
	{
		path: '/stocks',
		element: <StockPage />,
	},
	{
		path: "*", // Catch-all route for 404
		element: <ErrorPage />,
	}
]);


function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
