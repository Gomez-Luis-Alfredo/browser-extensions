

export default function Card({ logo, name, description, id,handleRemove  }) {
   

    return (
        <div >
            <div key={id} className='bg-white  dark:bg-slate-800 border border-slate-700 rounded-lg p-3 flex-grow-1 w-full h-full grid grid-cols-1 content-between  dark:shadow-none shadow-md shadow-slate-400'>
                <div className='grid grid-cols-4 justify-center items-center gap-2 mb-3'>
                    <div><img src={logo} className=""/></div>
                    <div className='grid col-span-3'>
                        <h1 className='text-sm font-medium text-slate-800 dark:text-white'>{name}</h1>
                        <p className='text-xs text-slate-800 dark:text-slate-300'>{description}</p>
                    </div>
                </div>
                <div className='mt-1 flex justify-between items-center '>
                    <button className=" dark:bg-slate-700 bg-white border border-slate-600 text-slate-800 dark:text-white shadow-sm 
                shadow-slate-400 dark:shadow-none text-sm  px-3  py-1 md:mr-2 rounded-xl dark:hover:bg-red-500 
                dark:hover:text-black translate duration-300 hover:bg-sky-500 hover:text-white" onClick={handleRemove }>Remove</button>
                    <label htmlFor={id}  className='bg-slate-500 w-6 h-3 rounded-full relative cursor-pointer  '>
                    <input type="checkbox" id={id} className='sr-only peer' />
                    <span className='w-2/5 h-5/5 bg-white absolute rounded-full left-0 inset-y-0 dark:peer-checked:bg-rose-500 peer-checked:bg-sky-500 peer-checked:left-3  transition-all duration-500'></span>
                    </label>
                    </div>
            </div>
        </div>
    )
}
