export const commands = {
  started: (input: { bookTitle: string; bookAuthor: string }) =>
    console.log("received 'started' command", input),
};
