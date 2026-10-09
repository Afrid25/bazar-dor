import { betterAuth } from "better-auth";


const client = new MongoClient(process.env.BETTER_AUTH_DB_URL)
const db = client.db("better-auth-db")

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  }, 
});