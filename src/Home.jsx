import Footer from "./component/Footer"
import Socials from "./component/Socials"

const Home = ({ setIsStart }) => {
    return (
        <div className=" bg-main-color text-white text-xl">
            <div className='flex flex-col h-screen'>

                <div className="flex justify-center pt-10">
                    <img src="src\assets\Tittle.png" alt="Trivia app logo" />
                </div>

                <div className="flex justify-center my-40">
                    <button 
                    className="px-12 py-4 bg-btn-color hover:bg-gray-800 ease-in-out duration-100 hover:outline-dotted hover:outline-1"
                    onClick={()=>setIsStart((prevs) => !prevs)}>
                        START
                    </button>
                </div>

                <div className="flex justify-center">
                    <Socials />
                </div>

                <Footer />
                
            </div>
        </div>
    )
}

export default Home