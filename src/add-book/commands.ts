import { Effect, Layer, ServiceMap } from "effect";

type Methods = {
  readonly started: (params: { bookTitle: string; bookAuthor: string }) => void;
};

const make: Effect.Effect<Methods> = Effect.gen(function* () {
  return {
    started: (input) => {
      console.log("received 'started' command", input);
    },
  };
});

export class Commands extends ServiceMap.Service<Commands, Methods>()(
  "Commands",
  { make },
) {
  static readonly layer = Layer.effect(this, this.make);
}
