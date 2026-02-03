import { NodeRuntime } from "@effect/platform-node";
import { Effect, Console } from "effect";

const program = Console.log("Hello, World!");

NodeRuntime.runMain(program);
