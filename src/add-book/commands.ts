import { Effect } from "effect";
import { Eventstore } from "../views/eventstore";

const started = (input: { bookAuthor: string; bookTitle: string }) =>
  Effect.gen(function* () {
    const eventstore = yield* Eventstore;

    yield* eventstore.raiseEvent(input);
  });

export const commands = {
  started,
};
