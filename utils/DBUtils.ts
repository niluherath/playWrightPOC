import { expect, APIRequestContext  } from "@playwright/test"
const {Client} = require('pg');
import { Pool, PoolClient, QueryResult } from "pg";

export class DBUtils{


  private pool: Pool;
  private client: any 

  private DBConfig = {
    user: "postgres",
    host: "localhost",
    database: "TestingBridge",
    password: "nilu123",
    port: 5434,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    allowExitOnIdle: false,
  };

  async getDBConnection(): Promise<PoolClient> {
    if (!this.pool) {
      this.pool = new Pool(this.DBConfig);
      this.client = await this.pool.connect();
      console.log(`---------> √ DB connection has been established! <---------`);
      return this.client;
    } else {
      return this.pool.connect();
    }
  }

  async executeQuery(query: string): Promise<void> {
    try {
      const client: PoolClient = await this.getDBConnection();
      const result: QueryResult = await client.query(query);
      console.log(result.rows);
    } catch (error) {
      console.error("Error executing query:", error);
    }
  }

  async endConnection() {
    this.client.end()
  }
   
 

}
