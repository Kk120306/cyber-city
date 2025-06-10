
const Timer = () => {
    return (
        <div className="timer">
            <div className="bg-black/80 backdrop-blur-md border-2 border-cyan-400 rounded-lg shadow-lg p-4 absolute top-0 z-20">
                <span className="text-3xl text-cyan-400 font-retro">00:00</span>
            </div>
        </div>
    )
}

export default Timer;