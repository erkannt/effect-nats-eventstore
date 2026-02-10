import { HttpRouter, HttpServer, HttpServerResponse } from "@effect/platform";
import { NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import { Layer, pipe } from "effect";
import { createServer } from "node:http";
import { landing } from "./views/landing";

const Router = pipe(HttpRouter.empty, HttpRouter.get("/", landing));

const server = pipe(
  Router,
  HttpServer.serve(),
  Layer.provide(NodeHttpServer.layer(createServer, { port: 8080 })),
  Layer.launch,
);

NodeRuntime.runMain(server);
