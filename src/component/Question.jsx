import unescape from "lodash.unescape"

const Question = ({question}) => {

  // console.log(question.replace(/&quot;/g, '"'))
    const a = question.replace(/&#039;/g,"'" );
    const strUnescape = unescape(a);

    return (
      <div className='text-4xl text-center mb-10 mt-5 relative px-10'>
        <h1 className="leading-normal">
          <span className="text-7xl text-green-500 font-bold  absolute left-0 animate-bounce -top-2.5">¿</span>{strUnescape}<span className="text-7xl text-green-500 font-bold animate-bounce absolute right-0">?</span>
        </h1>
      </div>
    )
  }

export default Question