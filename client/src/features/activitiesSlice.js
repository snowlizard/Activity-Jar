import { createSlice } from "@reduxjs/toolkit";

export const activitiesSlice = createSlice({
    name: "activities",
    initialState: {
        value: ["eat ramen", "go to woodward"],
    },
    reducers: {
        addActivity: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        
        removeActivity: (state, action) => {
            state.value = state.value.filter((activity, index) => index != action.payload);
        }
    }
});

export const { addActivity, removeActivity } = activitiesSlice.actions;
export default activitiesSlice.reducer;