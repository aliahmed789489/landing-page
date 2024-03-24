"use client"
export default function AccordionSer({ title, children, color, isOpen, onClick }) {
    return (
        <div className="flex ">
      <div className={`${color} shadow overflow-hidden flex-none w-20 `}>
        <div className="h-full flex justify-center items-center">
          <button onClick={onClick} className='w-full transform rotate-90 text-white font-bold text-xl'>
            {title}
          </button>
        </div>
      </div>
      {isOpen && <div className="px-4 py-5 sm:px-6 flex-grow bg-red">{children}</div>}

      </div>
    );
  }
  
    //   {isOpen && <div className="px-4 py-5 sm:px-6 flex-grow bg-red">{children}</div>}
  
