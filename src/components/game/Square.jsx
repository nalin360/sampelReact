    
export default function Square({ value, onSquareClick }) {
    return (
      <button 
      className="bg-white border border-solid border-gray-500 float-left text-2xl font-bold h-9 -mr-[1px] -mt-[1px] p-0 text-center w-9 "
       onClick={onSquareClick}>
        {value}
      </button>
    );
  }
  