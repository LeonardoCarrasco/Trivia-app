
const Question = ({question}) => {

  console.log(question.replace(/&quot;/g, '"'))
    return (
      <div className='text-4xl text-center mb-10 mt-5 relative px-10'>
        <h1 className="leading-normal">
          <span className="text-7xl text-green-500 font-bold  absolute left-0 animate-bounce -top-2.5">¿</span>{question}<span className="text-7xl text-green-500 font-bold animate-bounce absolute right-0">?</span>
        </h1>
      </div>
    )
  }

export default Question