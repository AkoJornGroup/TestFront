import React, { FC,useState } from 'react'
import LiveSearch from "../components/events/LiveSearch"
import Data from "../components/data/Eventcards.json"
import { type } from 'os';

interface Props{}

const test: FC<Props> = (props): JSX.Element =>{
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
    <div>
        <LiveSearch 
        results={results} 
        onChange={handleChange} 
        renderItem={(item) => <p>{item.name}</p>}
        onSelect={(item) => setSelectBar(item)}
        value={selecbar?.name}
        />
    </div>
    </>
  )
}

export default test