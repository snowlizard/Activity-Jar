import sql from "../hooks.server.js";

export const load = async () => {
    let activities = await sql`SELECT data FROM "Activity-Jar" WHERE "keyname" = 'Activities';`;

    return {
        activityData: activities[0].data.split(',')
    };
}
