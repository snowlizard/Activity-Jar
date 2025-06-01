import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeActivity, getActivityData, insertActivity } from "../features/activitiesSlice";


export const ActivityEditor = () => {
    const activityContainer = "w-1/3 h-full p-12 overflow-scroll flex flex-col grow justify-start self-start items-center bg-[#eeeeee]";
    const activityInput = "w-full rounded-sm outline-none shadow-xl/30 mb-3 p-2 self-start bg-[#6b6b6b]";
    const activityCard = "w-full h-15 p-2 m-2 flex bg-[#8260a2] hover:bg-[#363232] justify-between items-center shadow-lg";
    
	const activities = useSelector((state) => state.activities.value);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getActivityData());
    }, []);

    const handleAdd = (event) => {
        if(event.key === "Enter"){
            let status = dispatch(insertActivity(event.target.value));
            console.log(status);
            event.target.value = "";
        }
    }

    const handleRemoval = (event) => {
        event.preventDefault();
        let index = parseInt(event.target.id);
        dispatch(removeActivity(index));
    }

    return (
    <div className={activityContainer}>
        <input onKeyDown={handleAdd} className={activityInput} type="text" placeholder="add activty. . ."/>
        {
            activities != null ? activities.map((item) => 
                <div className={activityCard} key={item.index + "-"+ item.activty} >
                    <span>{item.activity}</span>
                    <button onClick={handleRemoval} type="button" className="w-8 h-2/3 hover:brightness-150">
                        <img id={item.index} className="w-full h-full" src="https://img.icons8.com/stickers/100/delete-forever.png" alt="delete-forever"/>
                    </button>
                </div>
            ) : ""
        }
    </div>
    );
}