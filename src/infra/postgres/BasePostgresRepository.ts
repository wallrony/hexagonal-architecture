import { Pool, QueryResult } from "pg";

class BasePostgresRepository {
  _client: Pool;

  constructor() {
    this._client = new Pool({
      database: process.env.PGDB_NAME,
      host: process.env.PGDB_HOST,
      user: process.env.PGDB_USER,
      password: process.env.PGDB_PASSWORD,
      port: Number(process.env.PGDB_PORT),
      ssl: process.env.PGDB_SSL_ENABLED === "true",
      connectionTimeoutMillis: 2000,
    });
  }

  async query(query: string, values?: unknown[]): Promise<QueryResult<any>> {
    const client = await this._client.connect();
    const result = await client.query(query, values);
    client.release();
    return result;
  }
}

export default BasePostgresRepository;
