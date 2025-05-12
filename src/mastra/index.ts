import { Mastra } from "@mastra/core";
import { mathSolverAgent } from "./agents/math-solver";
import { weatherAgent } from "./agents/weather";

export const mastra = new Mastra({
  agents: {
    weatherAgent,
    mathSolverAgent,
  },
});
