import Art from "../../assets/art.jpg";
import { usePlayer } from "../../context/PlayerContext";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from '.././Footer';
import ContextMenu from "../ContextMenu";
import Timer from "../Timer";



const Game = () => {
    const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
    const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
    const [robotCityElement, setRobotCityElement] = useState({});

    const { playerName } = usePlayer();
    const navigate = useNavigate();
    const imgRef = useRef(); 
    const gameRef = useRef();


    // useEffect(() => {
    //     if (!playerName) {
    //         navigate("/");
    //     }
    // }, [playerName, navigate]);

    const contextMenuTrigger = (e) => {
        if (!isContextMenuVisible) {
            setClickCoords({
                x: e.pageX,
                y: e.pageY,
            });
            if (imgRef.current) {
                setRobotCityElement(imgRef.current.getBoundingClientRect());
            }
        }
        toggleContextMenu();
    };


    const toggleContextMenu = () => {
        setIsContextMenuVisible((prevStatus) => !prevStatus);
    };


    const getRelativeCoords = (coords) => {
        return {
            relX:
                (coords.x - robotCityElement.left) / 
                imgRef.current.offsetWidth,
            relY: (coords.y - robotCityElement.top) / 
                imgRef.current.offsetHeight,
        };
    };


    return (
        <div className="w-screen h-screen overflow-auto bg-black"
            ref={gameRef}>
            <img
                src={Art}
                alt="Game Art"
                className="mx-auto block max-w-none
                           cursor-[_crosshair]" 
                onClick={contextMenuTrigger}
                ref={imgRef} 
                style={{
                    width: '100%',
                    height: 'auto',
                    minHeight: '100vh',
                }}
            />
            <Timer />
            {isContextMenuVisible && (
                <ContextMenu
                    gameSize={{
                        x: gameRef.current.offsetWidth,
                        y: gameRef.current.offsetHeight,
                    }}
                    clickCoords={clickCoords}
                />
            )}
            <Footer />
        </div>
    );
};

export default Game;