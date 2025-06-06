# Mastra Sandbox

## Prerequisites

- Node.js `v20.0` or higher

## Installation

```sh
npx create-mastra@latest

┌  Mastra Create
│
◇  What do you want to name your project?
│  mastra-sandbox
│
◇  Project created
│
◇  npm dependencies installed
│
◇  mastra installed
│
◇  Dependencies installed
│
◇  .gitignore added
│
└  Project created successfully


┌  Mastra Init
│
◇  Where should we create the Mastra files? (default: src/)
│  src/
│
◇  Choose components to install:
│  Agents
│
◇  Add tools?
│  No
│
◇  Select default provider:
│  OpenAI
│
◇  Enter your openai API key?
│  Skip for now
│
◇  Add example
│  No
│
◇  Make your AI IDE into a Mastra expert? (installs Mastra docs MCP server)
│  Cursor (project only)
│
│
│  Note: you will need to go into Cursor Settings -> MCP Settings and manually enable the installed Mastra MCP server.
│
│
◇
│
◇   ─────────────────────────────────────────────────────────╮
│                                                            │
│                                                            │
│        Mastra initialized successfully!                    │
│                                                            │
│        Add your OPENAI_API_KEY as an environment variable  │
│        in your .env.development file                       │
│                                                            │
│                                                            │
├────────────────────────────────────────────────────────────╯
│
└
   To start your project:

    cd mastra-sandbox
    npm run dev
```

## Development

### Create a Tool

```sh
mkdir -p src/mastra/tools/ && touch src/mastra/tools/weather-tool.ts
```

### Create an Agent

```sh
touch src/mastra/agents/weather.ts
```

### Register Agent

## Start the Mastra Server

### Run server

```sh
npm run dev
```

### Call the endpoint

```sh
curl -X POST http://localhost:4111/api/agents/weatherAgent/generate \
-H "Content-Type: application/json" \
-d '{"messages": ["What is the weather in London?"]}'
```

## Run from the command line

```sh
npx tsx src/index.ts
```

## Integrate Mastra in Next.js project \[WIP\]

### Separate Backend Integration

1. Install MastraClient:

```sh
npm install @mastra/client-js@latest
```

2. Use MastraClient:

```sh
mkdir lib && touch lib/mastra.ts
```

3. Use mastraClient in a React component:

```sh
mkdir -p app/components && touch app/components/SimpleWeather.tsx
```

## Creating and Calling Agents

```sh
curl -X POST http://localhost:4111/api/agents/mathSolverAgent/generate \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      { "role": "user", "content": "If a taxi driver earns $9461 per hour and works 12 hours a day, how much does they earn in one day?" }
    ]
  }'
```

## Agent Memory

```sh
npm install @mastra/memory@latest
```

## Agent Tool Selection
