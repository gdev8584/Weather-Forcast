import React from 'react'
import Loading from './Loading';
import Main from './Main';
import {useGlobalContext} from '../ContextApi/Context'

const  Home = () => {
    const {isLoading} = useGlobalContext()

  return (
    <>
    {isLoading? <Loading /> : <Main />}
    
    </>
  )
}

export default Home