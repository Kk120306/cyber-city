import C1 from "./../assets/char1.png";
import C2 from "./../assets/char2.png";
import C3 from "./../assets/char3.png";

const ContextMenu = ({
    gameSize,
    clickCoords,
}) => {

    const contextMenuStyle = {
        '--click-x': `${clickCoords.x}px`,
        '--click-y': `${clickCoords.y}px`,
        '--imgWidth': `${gameSize.x}px`,
        '--imgHeight': `${gameSize.y}px`,
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: 2,
        transform: `translateX(min(var(--click-x), calc(var(--imgWidth) - 100%))) translateY(min(var(--click-y), calc(var(--imgHeight) - 100%)))`,
        boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.8), 0px 3px 1px -2px rgba(0,0,0,0.8), 0px 1px 5px 0px rgba(0,0,0,0.8)'
    };

    return (
        <div
            style={contextMenuStyle}
            className="flex flex-col bg-black/80 rounded-lg overflow-hidden text-xl"
        >
            {[C1, C2, C3].map((charSrc, i) => (
                <div
                    key={i}
                    className="flex items-center transition-colors duration-250 cursor-pointer p-3 gap-3 hover:bg-yellow-400/20"
                >
                    <img
                        src={charSrc}
                        alt={`Character ${i + 1}`}
                        className="border-2 border-cyan-400 rounded-lg w-8 h-8 sm:w-15 sm:h-15"
                    />
                </div>
            ))}
        </div>
    );
};

export default ContextMenu;