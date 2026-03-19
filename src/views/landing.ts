import { Effect } from "effect";
import { HttpServerResponse } from "effect/unstable/http";

export const landing = Effect.succeed(
  HttpServerResponse.html(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>NATS Event Sourced Bookshelf</title>
</head>
<body>
  <header>
    <h1>NATS Event Sourced Bookshelf</h1>
  </header>
  <nav>
    <a href="/add-book/start">Add Book</a>
  </nav>
  <main>
    <h2>Available Books</h2>
    <ul>
      <li>
        <article>
          <h3>The Great Gatsby</h3>
          <p><strong>Author:</strong> F. Scott Fitzgerald</p>
          <p><strong>Review:</strong> A timeless exploration of wealth and the American Dream.</p>
        </article>
      </li>
      <li>
        <article>
          <h3>1984</h3>
          <p><strong>Author:</strong> George Orwell</p>
          <p><strong>Review:</strong> A chilling dystopian novel about surveillance and control.</p>
        </article>
      </li>
      <li>
        <article>
          <h3>Pride and Prejudice</h3>
          <p><strong>Author:</strong> Jane Austen</p>
          <p><strong>Review:</strong> A witty social commentary on class and marriage in Regency England.</p>
        </article>
      </li>
    </ul>
  </main>
</body>
</html>`),
);
