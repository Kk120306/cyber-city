import App from './App';
import ErrorPage from './components/pages/ErrorPage';
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import Task from './components/pages/Task';


const routes = [
    {
        path : '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children : [
            {
                index: true,
                element: <Home />
            }, {
                path: '/game',
                element: <Game />
            }, {
                path : '/task',
                element: <Task />
            }
        ]
    }
]

export default routes;