import { activityJar } from "$db/activity.jar.js";
import type {PageServerLoad} from "./$types.js"; 

export const load: PageServerLoad = async function() {
    const data = await activityJar.find({name: "activities"}).toArray();

    return data;
}