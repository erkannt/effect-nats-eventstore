import { Console, Layer, ServiceMap } from "effect";
import { Effect } from "effect";

export type Event = {};

const raiseEvent = (event: Event) => Console.log(event);

export class Eventstore extends ServiceMap.Service<
  Eventstore,
  {
    readonly raiseEvent: (event: Event) => Effect.Effect<void>;
  }
>()("Eventstore", {
  make: Effect.gen(function* () {
    return { raiseEvent };
  }),
}) {
  static readonly layer = Layer.effect(this, this.make);
}
