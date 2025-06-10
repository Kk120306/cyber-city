import C1 from "./../assets/char1.png";
import C2 from "./../assets/char2.png";
import C3 from "./../assets/char3.png";

const Footer = () => {
    return (
        <div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-6 bg-black bg-opacity-60
     px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-cyan-400 shadow-[0_0_15px_#0ff]
     w-[calc(100%-10rem)] max-w-md justify-center"
        >
            {[C1, C2, C3].map((charSrc, i) => (
                <img
                    key={i}
                    src={charSrc}
                    alt={`Character ${i + 1}`}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-cyan-400 shadow-md shadow-cyan-500/70
         transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/70"
                    style={{ cursor: 'pointer' }}
                />
            ))}
        </div>
    )};

export default Footer;