import { Effect, Layer, ServiceMap } from "effect";

export class Commands extends ServiceMap.Service<
  Commands,
  {
    readonly started: (params: {
      bookTitle: string;
      bookAuthor: string;
    }) => void;
  }
>()("Commands", {
  make: Effect.gen(function* () {
    return {
      started: (input) => {
        console.log("received 'started' command", input);
      },
    };
  }),
}) {
  static readonly layer = Layer.effect(this, this.make);
}
