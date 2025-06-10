import './App.css'
import { Outlet } from 'react-router-dom'
import { PlayerProvider } from "./context/PlayerContext";

function App() {

    return (
        <>
            <PlayerProvider>
                <Outlet />
            </PlayerProvider>
        </>
    )
}

export default App
