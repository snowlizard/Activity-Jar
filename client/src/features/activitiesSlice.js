import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getActivityData = createAsyncThunk(
    "activities/get",
    async (temp, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:5000/activities");
            const data = await response.json();
            return data;
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const insertActivity = createAsyncThunk(
    "activities/insert",
    async (temp, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:5000/activities", {
                method: "POST",
                headers: { "Content-Type:": "application/json" },
                body: JSON.stringify(activity)
            });

            return response.status;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const activitiesSlice = createSlice({
    name: "activities",
    initialState: {
        value: null,
    },

    reducers: {
        addActivity: async (state, action) => {
            const activity = {
                index: Math.floor(Math.random() * 10000),
                activity: action.payload
            }
            state.value = [...state.value, activity];
        },
        
        removeActivity: (state, action) => {
            state.value = state.value.filter((activity) => {
                return activity.index != action.payload;
            });
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getActivityData.fulfilled, (state, action) => {
            state.value = action.payload;
        });
    }

});

export const { addActivity, removeActivity } = activitiesSlice.actions;
export default activitiesSlice.reducer;