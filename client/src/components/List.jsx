import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivityData, removeActivity } from "../features/activitiesSlice";


export default () => {
    const activities = useSelector((state) => state.activities.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActivityData());
    }, []);

    const handleRemoval = (event) => {
        dispatch(removeActivity(event.target.id));
        dispatch(getActivityData());
    }

    return (
        <div className="w-full h-2/3 p-6 bg-[var(--kuromi-gray)] mt-5 rounded-lg shadow-xl/30 overflow-scroll">
            {
                activities != null ? activities.map((item) => 
                    <div className="w-full h-15 p-2 mb-2 flex justify-between items-center shadow-lg text-[#fff] bg-[var(--kuromi-purple)] hover:bg-[var(--kuromi-black)]" key={item.index + "-"+ item.activty} >
                        <span>{item.activity}</span>
                        <button onClick={handleRemoval} className="w-8 h-2/3 hover:brightness-150" type="button">
                            <img id={item.index} className="w-full h-full" src="https://img.icons8.com/stickers/100/delete-forever.png" alt="delete-forever"/>
                        </button>
                    </div>
                ) : ""
            }
        </div>
    );
}