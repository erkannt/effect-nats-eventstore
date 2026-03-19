import { HttpServerRequest, HttpServerResponse } from "effect/unstable/http";
import { Effect, Schema } from "effect";
import { commands } from "./commands";

const BookFormKeys = {
  bookTitle: "bookTitle",
  bookAuthor: "bookAuthor",
} as const;

const BookFormSchema = Schema.Struct({
  [BookFormKeys.bookAuthor]: Schema.String,
  [BookFormKeys.bookTitle]: Schema.String,
});

export const startGet = Effect.succeed(
  HttpServerResponse.html(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>NATS Event Sourced Bookshelf</title>
</head>
<body>
  <header>
    <h1>Add a book</h1>
  </header>
  <nav>
    <a href="/">Home</a>
  </nav>
  <main>
    <form action="/add-book/start" method="post">
      <label for="${BookFormKeys.bookTitle}">Book Title:</label>
      <input type="text" id="${BookFormKeys.bookTitle}" name="${BookFormKeys.bookTitle}" required>

      <label for="${BookFormKeys.bookAuthor}">Author:</label>
      <input type="text" id="${BookFormKeys.bookAuthor}" name="${BookFormKeys.bookAuthor}" required>

      <button type="submit">Add book to shelf</button>
    </form>
  </main>
</body>
</html>`),
);

export const startPost = Effect.gen(function* () {
  const form = yield* HttpServerRequest.schemaBodyForm(BookFormSchema);

  commands.started(form);

  return HttpServerResponse.redirect("/add-book/start");
});
