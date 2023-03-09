import Footer from "./component/Footer"
import Socials from "./component/Socials"

const GameDisplay = ({ children }) => {
    return (
            <div className='flex flex-col justify-between h-full'>

                {children}

                <div className="flex justify-center">
                    <Socials />
                </div>

                <Footer />
                
            </div>
    )
}

export default GameDisplay