


export default function ButtonList({isActive,filterIsActive}) {
  
 
  return (
    <div>
        {
            isActive.map((active) =>(
                <button
                className=" dark:bg-slate-800 bg-white text-slate-800 dark:text-white shadow-sm 
                shadow-slate-400 dark:shadow-none text-sm  px-3  py-1 md:mr-2 rounded-xl dark:hover:bg-red-500 
                dark:hover:text-black translate duration-300 hover:bg-sky-500 hover:text-white"
                onClick={()=>filterIsActive(active)}
                key={active}
                >{active}
                </button>
            ))
        }
    </div>
  )
}
