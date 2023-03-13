import getDataFetch from "../services/FetchData"

const set = async (diff = 'amount=6&difficulty=easy') =>{
    const data = await getDataFetch(diff)
    return data
  }

export default set