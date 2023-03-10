import unescape from "lodash.unescape"

const Button = ({answer, onClick}) => {

  const a = answer.replace(/&#039;/g,"'" );
  const strUnescape = unescape(a);
    return (
      <button 
      className='py-4 px-10 font-semibold text-lg md:text-2xl bg-btn-color hover:outline hover:outline-green-400 ease-in-out duration-160 hover:bg-btn-hover'
      onClick={onClick}
      >
        {strUnescape}
      </button>
    )
  }

export default Button