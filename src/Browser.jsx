import { useReducer, useState } from "react";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import {data} from '../src/data/data.jsx'
import Card from "./component/Card";
import ButtonList from "./component/ButtonList.jsx";
import { extentionReducer } from "./Reducer/extentionReducer.jsx";



export default function Browser({toogleDisplayMode,darkMode}) {
    const allIsActive =[ 'All', ...new Set(data.map(dat => dat.isActive))]
    const [isActive, setIsActive] = useState(allIsActive)
    const [extenciones, setExtenciones] = useState(data)
    const [data2, dispatch] = useReducer(extentionReducer,data)
    console.log(allIsActive)
    
    const filterIsActive =(active)=>{
        if(active === 'All'){
            setExtenciones(data)
            return
        }const filteredData = data.filter(extencion => extencion.isActive === active)
        console.log(filteredData)
        setExtenciones(filteredData)
    }
    const handleRemove = (id) =>{
        dispatch({
            type:'remove',
            payload:id,
        })

    }
    return (
        
        <div className="bg-slate-200 dark:bg-gradient-to-b from-slate-900 to-blue-900 ">
            <div className="h-full min-h-screen container">
                <div className="flex justify-between items-center  p-2 bg-white text-slate-800 dark:bg-slate-800  dark:text-white  rounded-lg">
                    <div className="flex justify-start items-center gap-2"><AiFillCodeSandboxCircle className="dark:text-red-500 text-sky-500 size-[40px]" /><h2 className="font-medium text-slate-800 dark:text-white">Extensions</h2></div>
                    <div><button className="ml-2 bg-white border border-slate-700 dark:bg-slate-700  p-3 rounded-lg " onClick={()=>{toogleDisplayMode()}}>
                        {darkMode ? <FaMoon /> : <MdSunny className="text-slate-800 "/>}

                    </button></div>
                </div>
                <div className='flex justify-between items-center text-white mt-6'>
                    <div className="flex justify-start items-center gap-1 md:gap-3">
                        <h2 className="font-medium text-xl text-slate-800 dark:text-white">Extensions List</h2>
                    </div>
                    <div className="flex flex-row">
                        <ButtonList isActive={isActive} filterIsActive={filterIsActive}/>
                             
                    </div>
                </div>
                <div className="mt-4">
                    <div className="grid md:grid-cols-3 md:gap-2 gap-3">
                     {
                        extenciones.map((dat)=>(
                        <Card
                        key={dat.id}
                        id={dat.id}
                        logo={dat.logo}
                        name={dat.name}
                        description={dat.description}
                        isActive={dat.isActive}
                        handleRemove={handleRemove}
                        />
                        ))
                     }
                    </div>
                </div>

            </div>

        </div>
        
    )
}
