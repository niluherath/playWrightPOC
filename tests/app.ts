// app.ts 
import dotenv from 'dotenv'; 
dotenv.config();  // Load environment variables from .env file 
const global_url = process.env.GLOBAL_URL;  // Retrieve the environment variable 
console.log('GLOBAL_URL:', global_url);  // Use the environment variable as needed