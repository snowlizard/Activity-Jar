import jar from '../assets/jar.png';
import banner from '../assets/banner.png';
import { jarContainer, bannerContainer, bannerImg,
    jarWrapper, jarImgDiv, jarImg, jarText, jarBtn } from '../css/jar';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const Jar = () => {
    const activities = useSelector((state) => state.activities.value);
    const [activity, setActivity] = useState("");

    const getRandomIndex = () => {
        setActivity(activities[Math.floor(Math.random() * activities.length)]);
    }
    
    return (
        <div className={jarContainer}>
            <div className={bannerContainer}>
                <img className={bannerImg} src={banner} alt="date nite" />
            </div>

            <div className={jarWrapper}>
                <div className={jarImgDiv}>
                    <img className={jarImg} src={jar} alt="Jar of activties"/>
                </div>
                <span className={jarText} >
                    {activity.activity != null ? activity.activity : "" }
                </span>
                <button onClick={getRandomIndex} className={jarBtn}>Generate Activity</button>
            </div>
        </div>
    );
}