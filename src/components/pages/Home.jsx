import HomeBg from "../../assets/home-bg.png";
import { useState } from "react";
import { usePlayer } from "../../context/PlayerContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const buttonBase = "px-6 py-3 rounded-md text-sm font-bold transition-all duration-300 font-retro";
    const neonGlow = "bg-cyan-400 text-black shadow-lg shadow-cyan-400/50 hover:bg-cyan-300";

    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [name, setName] = useState('');
    const { playerName, setPlayerName } = usePlayer();
    const navigate = useNavigate();

    const handleStart = () => {
        if (name.trim()) {
            setPlayerName(name.trim());
            navigate("/task");
        } else {
            alert("Please enter a valid name to start the game.");
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4"
            style={{ backgroundImage: `url(${HomeBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

            <div className="bg-black border-4 border-cyan-400 rounded-xl p-8 max-w-xl w-full text-center shadow-neon z-10">
                <h1 className="text-2xl text-pink-500 font-retro mb-4">Cyber City Tag</h1>
                <p className="text-sm text-gray-300 mb-6">
                    Find hidden robots in a picture as fast as you can!
                </p>
                <div className="flex flex-col gap-4 justify-center">
                    <input className="px-4 py-2 rounded-md text-sm font-retro bg-gray-700 text-gray-200 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                        value={name} onChange={(e) => setName(e.target.value)} placeholder={`${playerName ? playerName : "Enter your name"}`}/>
                    <button onClick={handleStart} className={`${buttonBase} ${neonGlow}`}>
                        Start Game
                    </button>
                    <button className={`${buttonBase} ${neonGlow}`}
                        onClick={() => setShowLeaderboard(true)}>
                        Leaderboard
                    </button>
                </div>
            </div>



            {/* Implement logic to retrive from backend  */}
            {showLeaderboard && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-20 px-5">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center gap-3">
                        <h2 className="text-xl text-pink-500 font-retro mb-4">Leaderboard</h2>
                        <ul className="text-gray-300">
                            <li>Player 1 - 100 points</li>
                            <li>Player 2 - 90 points</li>
                            <li>Player 3 - 80 points</li>
                        </ul>
                        <button className={`${buttonBase} ${neonGlow} mt-4`} onClick={() => setShowLeaderboard(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
