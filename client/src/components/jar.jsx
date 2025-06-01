import jar from '../assets/jar.png';
import banner from '../assets/banner.png';
import { useSelector } from 'react-redux';
import { act, useState } from 'react';

export const Jar = () => {
    const jarContainer = "h-full flex flex-col items-center grow bg-[#f4b5eb]";
    const rndBtnStle = "absolute mt-25 cursor-pointer transition-all bg-[#8260a2] px-6 py-2 " +
        "rounded-lg border-[#3c383e] border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] " + 
        "hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]";
    const bannerStyle = "w-full h-1/2 align-start flex justify-center items-center overflow-hidden"
    
    const activities = useSelector((state) => state.activities.value);
    const [activity, setActivity] = useState("");

    const getRandomIndex = () => {
        setActivity(activities[Math.floor(Math.random() * activities.length)]);
    }
    
    return (
        <div className={jarContainer}>
            <div className={bannerStyle}>
                <img className='w-full h-2/3 p-2' src={banner} alt="date nite" />
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <img className='w-full' src={jar} alt="Jar of activties"/>
                <span className="absolute font-sans text-2xl" >{activity.activity}</span>
                <button onClick={getRandomIndex} className={rndBtnStle}>Generate Activity</button>
            </div>
        </div>
    );
}