import React, { FC,useState } from 'react'
import Searchbartest from "../components/events/testseachbar"


const test = () => {
  return(
    <>
    <div className=' bg-white h-100vh w-100vw '>
      <div className=' pt-20  m-auto flex flex justify-center'>
        <Searchbartest/>
      </div>
      <div>SearchResult</div>
    </div>
    </>
  )
}
export default test