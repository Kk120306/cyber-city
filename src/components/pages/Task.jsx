import { Link } from "react-router-dom";
import { usePlayer } from "../../context/PlayerContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import C1 from "../../assets/char1.png";
import C2 from "../../assets/char2.png";
import C3 from "../../assets/char3.png";

const Task = () => {
    const { playerName } = usePlayer();
    const navigate = useNavigate();


    // useEffect(() => {
    //     if (!playerName) {
    //         navigate("/");
    //     }
    // }, [playerName, navigate]);

    const characters = [
        { src: C1, name: "Three Eye" },
        { src: C2, name: "Fireball" },
        { src: C3, name: "Panther" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center p-6">
            <div className="bg-black border-4 border-pink-500 rounded-xl shadow-cyan-500/30 shadow-lg p-8 w-full max-w-lg text-center">
                <h2 className="text-3xl text-pink-500 font-retro mb-2">Your Task</h2>
                <p className="text-sm text-gray-300 mb-6">Locate these characters in the city!</p>

                <div className="flex flex-col items-center gap-6 mb-6">
                    {characters.map((char, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <img
                                src={char.src}
                                alt={`Character ${index + 1}`}
                                className="w-24 h-24 rounded-full shadow-lg border-2 border-cyan-400"
                            />
                            <span className="text-cyan-300 font-retro text-base">{char.name}</span>
                        </div>
                    ))}
                </div>

                <Link
                    to="/game"
                    className="inline-block mt-4 px-6 py-3 bg-cyan-400 text-black font-retro rounded-lg shadow-cyan-400/40 shadow-md hover:bg-cyan-300 transition-all duration-300"
                >
                    Got it!
                </Link>

                <div className="mt-4">
                    <Link
                        to="/"
                        className="text-cyan-400 hover:text-cyan-300 font-retro transition-all duration-300"
                    >
                        ← Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Task;
