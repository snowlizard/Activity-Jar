import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const IP = "http://192.168.1.166:5000"

export const getActivityData = createAsyncThunk(
    "activities/get",
    async (temp, thunkAPI) => {
        try {
            const response = await fetch(IP + "/activities", {mode: 'cors'});
            const data = await response.json();
            return data;
        } catch (error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const insertActivity = createAsyncThunk(
    "activities/insert",
    async (value, thunkAPI) => {
        try {
            const response = await fetch(IP + "/activities", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "activity": value }),
                mode: 'cors'
            });

            let status = await response.json();
            return status;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const removeActivity = createAsyncThunk(
    "activities/remove",
    async (value, thunkAPI) => {
        try {
            const response = await fetch(IP + "/activity/" + value, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                mode: 'cors'
            });

            const data = await response.json();
            return data;
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

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getActivityData.fulfilled, (state, action) => {
            state.value = action.payload;
        });

        builder.addCase(insertActivity.fulfilled, (state, action) => {
            state.value = state.value;
        });

        builder.addCase(removeActivity.fulfilled, (state, action) => {

        });
    }

});

export const { } = activitiesSlice.actions;
export default activitiesSlice.reducer;