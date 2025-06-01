import { configureStore } from '@reduxjs/toolkit';
import activityReducer from './features/activitiesSlice';


export default configureStore({
    reducer: {
        activities: activityReducer
    },
})