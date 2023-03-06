import Footer from "./component/Footer"
import Socials from "./component/Socials"

const GameDisplay = ({ children }) => {
    return (
        <div className=" bg-main-color text-white text-xl">
            <div className='flex flex-col h-screen'>

                {children}

                <div className="flex justify-center">
                    <Socials />
                </div>

                <Footer />
                
            </div>
        </div>
    )
}

export default GameDisplay