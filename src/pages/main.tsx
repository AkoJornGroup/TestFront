import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Introevent from '../components/events/introevent'
import Recommendevent from '../components/events/recommendevent'
import Allevent from '../components/events/allevent'
import Monthlyevent from '../components/events/monthlyevent'
import React, { FC,useState } from 'react'
import LiveSearch from "../components/events/LiveSearch"
import Data from "../components/data/Eventcards.json"
import { type } from 'os';


interface Props{}
const main : FC<Props> = (props): JSX.Element =>{
  const[results,setResults] = useState<{id:string; name :string}[]>
  ();
  const [selecbar, setSelectBar] = useState<{id:string ; name : string}>();

type changeHandle = React.ChangeEventHandler<HTMLInputElement>;
  const handleChange: changeHandle = (e) => {
    const {target} = e;
    if (!target.value.trim()) return setResults([]);

    const filteredValue = Data.filter((d) => 
      d.name.toLocaleLowerCase().match(target.value)
    );
    setResults(filteredValue);
  }

  return (
    <>
        <Navbar/>
        <div><Introevent/></div>
        <div> 
        <LiveSearch
         results={results} 
         onChange={handleChange} 
         renderItem={(item) => <p>{item.name}</p>}
         onSelect={(item) => setSelectBar(item)}
         value={selecbar?.name}
        />
        </div>
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