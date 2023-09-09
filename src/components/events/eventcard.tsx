import React from 'react';
import { EventitemProps } from './eventitem';

const Card: React.FC<EventitemProps> = ({ date,name,place,image}) => {

  return (
    <div className="w-60 rounded overflow-hidden ">
        <img src={image} alt="event" className=" w-full h-96 rounded-xl shadow-xl"/>
        <div className="w-2/4">
        <h2 className="text-[#D40000] text-xl font-bold mb-2">{date}</h2>
        <h2 className="text-[#000000] text-xl font-bold mb-2">{name}</h2>
        <p className="text-[#A7A7A7]">{place}</p>
        </div>
    </div>
  );
};

export default Card;