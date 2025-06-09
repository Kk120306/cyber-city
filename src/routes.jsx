import App from './App';
import ErrorPage from './components/pages/ErrorPage';
import Home from './components/pages/Home';


const routes = [
    {
        path : '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children : [
            {
                index: true,
                element: <Home />
            }, 
        ]
    }
]

export default routes;