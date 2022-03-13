import { App } from "../app";
import { Server, createServer } from "http";

const server: Server = createServer(App);

const port = () => () => {
  return 3000;
};

server.listen(port, () => {
  console.log("Running server.");
});
