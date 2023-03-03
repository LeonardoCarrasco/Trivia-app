const Button = ({answer}) => {
    return (
      <button 
      className='py-4 px-10 font-semibold text-2xl bg-btn-color hover:outline hover:outline-green-400 ease-in-out duration-160 hover:bg-btn-hover'
      onClick={() => console.log(answer)}
      >
        {answer}
      </button>
    )
  }

export default Button