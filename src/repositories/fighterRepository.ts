import { connection } from "../databases/database";

export async function insertFighter(username: string) {
  const { rows: result } = await connection.query(
    `
    INSERT INTO "fighters" (username, wins, losses, draws) VALUES ($1, 0, 0, 0)`,
    [username]
  );
  return result[0];
}

export async function findByUsername(username: string) {
  const { rows: result } = await connection.query(
    `
    SELECT * FROM "fighters" WHERE username = $1`,
    [username]
  );
  return result[0];
}
