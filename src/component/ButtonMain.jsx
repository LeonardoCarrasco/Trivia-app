
const ButtonMain = ({text, setIsStart}) =>{
    return (
        <div className="flex justify-center py-10">
        <button 
        className="px-12 py-4 bg-btn-color hover:bg-gray-800 ease-in-out duration-100 hover:outline-dotted hover:outline-1"
        onClick={()=>setIsStart((prevs) => !prevs)}>
            {text}
        </button>
    </div>
    )
}

export default ButtonMain