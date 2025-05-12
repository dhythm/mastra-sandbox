import { Mastra } from "@mastra/core";
import { Memory } from "@mastra/memory";
import { mathSolverAgent } from "./agents/math-solver";
import { weatherAgent } from "./agents/weather";

const memory = new Memory();

export const mastra = new Mastra({
  agents: {
    weatherAgent,
    mathSolverAgent,
  },
  memory,
});
