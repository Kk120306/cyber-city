import Art from "../../assets/art.jpg";
import { usePlayer } from "../../context/PlayerContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Game = () => {

    const { playerName } = usePlayer();
    const navigate = useNavigate();

    // Uncomment the following useEffect to redirect if playerName is not set
    // useEffect(() => {
    //     if (!playerName) {
    //         navigate("/"); 
    //     }
    // }, [playerName, navigate]);

    return (
        <div className="w-screen h-screen overflow-auto bg-black">
            <img
                src={Art}
                alt="Game Art"
                className="mx-auto block max-w-none"
                style={{
                    width: '100%',
                    height: 'auto',
                    minHeight: '100vh',
                }}
            />
        </div>
    );
};

export default Game;
