import {
  HttpApi,
  HttpApiBuilder,
  HttpApiEndpoint,
  HttpApiGroup,
  HttpServerResponse,
} from "@effect/platform";
import { NodeHttpServer, NodeRuntime } from "@effect/platform-node";
import { Effect, pipe, Schema, Layer } from "effect";
import { createServer } from "node:http";

const UserFacingRoutes = HttpApiGroup.make("UserFacing").add(
  HttpApiEndpoint.get("landing")`/`.addSuccess(Schema.String),
);
const MainApi = HttpApi.make("MainApi").add(UserFacingRoutes);

const UserFacingApiGroupImplementation = HttpApiBuilder.group(
  MainApi,
  "UserFacing",
  (handlers) =>
    handlers.handle("landing", () =>
      Effect.succeed(HttpServerResponse.html("Hello, world!")),
    ),
);

const MainApiImplementation = pipe(
  HttpApiBuilder.api(MainApi),
  Layer.provide(UserFacingApiGroupImplementation),
);

const server = pipe(
  HttpApiBuilder.serve(),
  Layer.provide(MainApiImplementation),
  Layer.provide(NodeHttpServer.layer(createServer, { port: 8080 })),
  Layer.launch,
);

NodeRuntime.runMain(server);
