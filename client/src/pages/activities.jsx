import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeActivity, getActivityData, insertActivity } from "../features/activitiesSlice";
import { listContainer, listCard, cardButton,
    inputMain, inputChild, inputWrapper, inputElement } from '../css/activityList';
import { activityContainer } from "../css/index.css";


export const Activities = () => {
	const activities = useSelector((state) => state.activities.value);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getActivityData());
    }, []);

    const handleAdd = (event) => {
        if(event.key === "Enter"){
            dispatch(insertActivity(event.target.value))
                .then((res) => dispatch(getActivityData()))
                .catch((error) => { console.log(error)});
            event.target.value = "";
        }
    }

    const handleRemoval = (event) => {
        dispatch(removeActivity(event.target.id));
        dispatch(getActivityData());
    }

    return (
    <div className={activityContainer}>

        <div className={inputMain}>
            <div className={inputWrapper}>
                <input className={inputElement} onKeyDown={handleAdd} type="text" placeholder="add activty. . ."/>
            </div>
        </div>

        <div className={listContainer}>
            {
                activities != null ? activities.map((item) => 
                    <div className={listCard} key={item.index + "-"+ item.activty} >
                        <span>{item.activity}</span>
                        <button onClick={handleRemoval} type="button" className={cardButton}>
                            <img id={item.index} className="w-full h-full" src="https://img.icons8.com/stickers/100/delete-forever.png" alt="delete-forever"/>
                        </button>
                    </div>
                ) : ""
            }
        </div>
    </div>
    );
}