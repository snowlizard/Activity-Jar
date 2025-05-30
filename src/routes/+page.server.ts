import sql from "$db/postgres.js";

const activitiesData = await sql`SELECT * FROM "Activities";`

console.log(activitiesData);