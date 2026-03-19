import { HttpRouter, HttpServer, HttpServerResponse } from "@effect/platform";
import { NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import { Layer, pipe } from "effect";
import { createServer } from "node:http";
import { landing } from "./views/landing";
import * as addBook from "./add-book";

const Router = pipe(
  HttpRouter.empty,
  HttpRouter.get("/", landing),
  HttpRouter.get("/add-book/start", addBook.startGet),
  HttpRouter.post("/add-book/start", addBook.startPost),
);

const server = pipe(
  Router,
  HttpServer.serve(),
  Layer.provide(NodeHttpServer.layer(createServer, { port: 8080 })),
  Layer.launch,
);

NodeRuntime.runMain(server);
