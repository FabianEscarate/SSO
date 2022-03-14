import { connect, createConnection } from "mongoose";

const ConnectionString: string = process.env.CONNECTIONSTRING!;

const conection = createConnection(ConnectionString).asPromise();

conection.catch((reason) => {
  console.error(reason);
});

export { conection };
