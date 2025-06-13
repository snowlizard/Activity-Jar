import List from "../components/List";
import Filter from "../components/Filter";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeActivity, getActivityData, insertActivity } from "../features/activitiesSlice";

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
    <div className="flex flex-col justify-center items-center w-[90%] h-full m-auto mt-10">
        <Filter />
        <List />
    </div>
    );
}