import { FaTimes } from 'react-icons/fa'

const Modal = ({handleShow}) => {

    return (
        <div className="bg-black absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 md:max-w-[500px] py-6 px-10 w-full shadow-2xl">
            <button className="block ml-auto" onClick={handleShow}><FaTimes/></button>

            <div className="p-2">
                <h3 className="text-4xl font-bold mb-5 text-[#87ff5c]">How to Play ?</h3>
                <div>
                    <ul className="list-disc text-base p-5">
                        <li className="leading-normal mb-4">If you answer wrong 2 times: <strong className="text-red-600">Game over.</strong></li>
                        <li className="leading-normal mb-4">You pass at least with one wrong  to the next difficulty (max difficulty:<strong className="text-red-600"> Hard</strong>).</li>
                    </ul>
                    <p>Thats it, Enjoy!</p>
                </div>
            </div>
        </div>
    )
}

export default Modal