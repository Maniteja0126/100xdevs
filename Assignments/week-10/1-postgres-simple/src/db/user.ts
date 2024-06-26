import { Query } from "pg";
import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
        const insertQuery =  "INSERT INTO users (username , password , name) VALUES ($1,$2,$3);"
        const values = [username, password, name]
         await client.query(insertQuery , values)
       
}


/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const query = `SELECT * 
    FROM users
    WHERE id = $1
    `
    const response = await client.query(query , [userId])
    const data = response ;
    return response.rows[0]
}
