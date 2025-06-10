import './App.css'
import { Outlet } from 'react-router-dom'
import { PlayerProvider } from "./context/PlayerContext";
import { Toaster } from "sonner";


function App() {

    return (
        <>
            <PlayerProvider>
                <Outlet />
            </PlayerProvider>
            <Toaster position="top-center" theme='dark' richColors />
        </>
    )
}

export default App
