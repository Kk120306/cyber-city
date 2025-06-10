import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();
export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
    const [playerName, setPlayerName] = useState("");
    return (
        <PlayerContext.Provider value={{ playerName, setPlayerName }}>
            {children}
        </PlayerContext.Provider>
    );
};
