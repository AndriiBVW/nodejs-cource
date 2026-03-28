# Worker Threads

A demonstration of [Worker Threads](https://nodejs.org/api/worker_threads.html) in Node.js for parallel execution of CPU-intensive tasks.

## Description

The project compares two approaches to heavy computation (factorial + filling an array with 100 million elements):

- **Single-threaded** (`app.js`) — sequential execution of 4 tasks on the main thread
- **Multi-threaded** (`app-worker.js`) — parallel execution of 4 tasks in separate Worker Threads

## Structure

| File            | Description                                           |
| --------------- | ----------------------------------------------------- |
| `app.js`        | Sequential execution on the main thread               |
| `app-worker.js` | Parallel execution using Worker Threads               |
| `worker.js`     | Worker code — receives data, computes, returns result |
| `factorial.js`  | Recursive factorial function                          |

## Usage

```bash
cd worker-treads

# Single-threaded version
node app.js

# Multi-threaded version
node app-worker.js
```

## How It Works

### Single-threaded (`app.js`)

Runs 4 `compute()` calls sequentially on the main thread. Each call:

1. Fills an array with 100 million elements
2. Calculates the factorial for `[10, 20, 30, 40, 50]`

While the computation is running, the Event Loop is blocked.

### Multi-threaded (`app-worker.js`)

Spawns 4 Worker Threads via `Promise.all`, each performing the same task in parallel. The main thread stays free — `setTimeout` fires on time and the Event Loop is not blocked.

## Result

The multi-threaded version is significantly faster on multi-core processors, as all tasks run in parallel rather than sequentially.

## Prerequisites

- Node.js v12+ (`worker_threads` supported without a flag)
