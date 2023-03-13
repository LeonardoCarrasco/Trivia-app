const URL = 'https://opentdb.com/api.php?'

const getDataFetch = async (diff='') => {

    try{
      const response = await fetch('https://opentdb.com/api.php?' + diff)
      const data = await response.json()
      return data.results
    }
    catch(error){
      console.log(error)
    }

  }

  export default getDataFetch