import React, { useEffect, useState } from 'react';
import Seat from './seat';
import { set } from 'zod';
import Link from 'next/link'

interface SeatingPlanProps {
  nameOfZone: string;
  numRows: number;
  numSeatsPerRow: number;
  pricePerSeat: number;
  objectOfSeat: object;
}

const SeatingPlan: React.FC<SeatingPlanProps> = ({ nameOfZone , numRows, numSeatsPerRow, pricePerSeat, objectOfSeat }) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);


  const handleSeatSelect = (seatId: any) => {

    const updatedSelectedSeats = [...selectedSeats];
    const index = updatedSelectedSeats.indexOf(seatId);
    if (index > -1) {
      updatedSelectedSeats.splice(index, 1);
    }
    else {
      updatedSelectedSeats.push(seatId);
    }

    setSelectedSeats(updatedSelectedSeats);
    setCount(updatedSelectedSeats.length);

  }
    


  // console.log(
  //   'total',total,
  //   'count',count,
  // )
  //console.log('objectOfSeat',objectOfSeat)



  useEffect(() => {
    setTotal(count*pricePerSeat)
  }
  , [count]);

  useEffect(() => {
    setCount(0)
    setSelectedSeats([])
  }
  , [nameOfZone]);

  const renderSeats = () => {
    const seats = [];

    for (let row = 1; row <= numRows; row++) {
      const rowSeats = [];

      for (let seatNumber = 1; seatNumber <= numSeatsPerRow; seatNumber++) {
        const seatId = `${row}-${seatNumber}`; // Generate a unique ID for each seat
        const isSelected = selectedSeats.includes(seatId);
      

        rowSeats.push(
          <Seat
            key={seatId}
            seatId={seatId}
            seatNumber={seatId.split('-')[1] as unknown as number}
            isSelected={isSelected}
            onSelect={() => handleSeatSelect(seatId)}
            isReserved={objectOfSeat.seatNo[seatId]}
          />
        );
      }

      seats.push(
        <div key={row} className="flex space-x-4">
          {rowSeats}
        </div>
      );
    }

    console.log('selected seats',selectedSeats)

    return seats;
  };

  return (
    <div className='flex flex-col gap-10'>
      <div className="space-y-4">
        {renderSeats()}
      </div>
      <div className=' border-2 border-gray-300 rounded-md'>
        <div className='flex flex-col'>
          <div className='grid grid-cols-2 place-items-center mt-5 mb-5'>
            <div className='font-montserrat text-xl'>Total</div>
            <div className='font-montserrat'>{count} items</div>
          </div>
          <hr className='border-[1.5px] border-gray-300 mx-8'></hr>
          <div className='grid grid-cols-2 place-items-center mt-5 mb-5'>
            <div className='font-montserrat font-bold texl-xl'>{total}</div>
            <div className='font-montserrat font-bold text-xl'>฿</div>   
          </div>
        </div>
      </div>
      <Link href={{
          pathname: '/checkout',
          query: selectedSeats as string[] // the data
        }}>
        <button disabled={count===0} className="bg-black hover:bg-black hover:text-white border-2 border-black duration-300 text-white font-bold py-2 rounded mt-2 mb-2 box-content w-full disabled:bg-slate-50 disabled:text-slate-200 disabled:border-slate-200 disabled:shadow-none">
          Check out
        </button>
      </Link>
    </div>
  )
};

export default SeatingPlan;