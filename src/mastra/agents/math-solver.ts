import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import * as mathjs from "mathjs";
import { z } from "zod";

export const mathSolverAgent = new Agent({
  name: "Math Solver Agent",
  instructions: "You are a helpful assistant that can solve math problems.",
  model: openai("gpt-4o-mini"),
  tools: {
    calculate: {
      description: "Calculator for mathematical expressions",
      parameters: z.object({ expression: z.string() }),
      schema: z.object({ expression: z.string() }),
      execute: async ({ expression }) => {
        return mathjs.evaluate(expression);
      },
    },
  },
});

const response = await mathSolverAgent.generate(
  [
    {
      role: "user",
      content:
        "If a taxi driver earns $9461 per hour and works 12 hours a day, how much does they earn in one day?",
    },
  ],
  {
    maxSteps: 5,
    onStepFinish: (step) => {
      console.log("Stream complete:", { step });
    },
  }
);
