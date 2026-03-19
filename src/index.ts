import { NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import { HttpRouter } from "effect/unstable/http";
import { createServer } from "node:http";
import { Layer, pipe } from "effect";
import { landing } from "./views/landing";
import * as addBook from "./add-book";

const app = pipe(
  HttpRouter.addAll([
    HttpRouter.route("GET", "/", landing),
    HttpRouter.route("GET", "/add-book/start", addBook.startGet),
    HttpRouter.route("POST", "/add-book/start", addBook.startPost),
  ]),
  HttpRouter.serve,
  Layer.provide(NodeHttpServer.layer(createServer, { port: 8080 })),
  Layer.launch,
);

NodeRuntime.runMain(app);
