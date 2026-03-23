import { Console, Layer, pipe, ServiceMap } from "effect";
import { Effect } from "effect";
import { connect, NatsConnection } from "@nats-io/transport-node";
import { jetstream, jetstreamManager } from "@nats-io/jetstream";
import { UnknownError } from "effect/Cause";

const createNatsConnections = Effect.tryPromise(() =>
  connect({ servers: "localhost:4222" }),
);

const createJetstreamManager = (nc: NatsConnection) =>
  Effect.tryPromise(() => jetstreamManager(nc));

export type Event = {};

const raiseEvent = (event: Event) =>
  Effect.gen(function* () {
    const natsConnection = yield* createNatsConnections;
    const jsm = yield* createJetstreamManager(natsConnection);
    const js = jetstream(natsConnection);

    jsm.streams.add({ name: "events" });
    js.publish("events", JSON.stringify(event));

    yield* Console.log(event);
  });

export class Eventstore extends ServiceMap.Service<
  Eventstore,
  {
    readonly raiseEvent: (event: Event) => Effect.Effect<void, UnknownError>;
  }
>()("Eventstore", {
  make: Effect.gen(function* () {
    return { raiseEvent };
  }),
}) {
  static readonly layer = Layer.effect(this, this.make);
}
