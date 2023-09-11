import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Introevent from '../components/events/introevent'
import Recommendevent from '../components/events/recommendevent'
import Allevent from '../components/events/allevent'
import Monthlyevent from '../components/events/monthlyevent'
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';


const main= () =>{

  return (
    <>
        <Navbar/>
        <div ><Introevent/></div>
        <div className=' flex justify-center mb-8'>
        <Recommendevent/>
        </div>
        <div className=' flex justify-center'>
        <Allevent/>
        </div>
        <div className=' mt-8'>
            <Monthlyevent/>
        </div>
        <Footer/>
    </>
  )
}

export default main