import postgres from "postgres";
import { POSTGRES_URL } from "$env/static/private";

const sql = postgres(POSTGRES_URL);

export default sql;