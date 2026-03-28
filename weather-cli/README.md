# Weather CLI

A command-line application for getting current weather information for any city, powered by the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- Current weather forecast for a specified city
- Temperature, humidity, and wind speed display
- Weather condition icons in the terminal
- Colored terminal output via Chalk
- Persistent storage of API token and city settings
- Support for environment variables (`CITY`, `TOKEN`)

## Prerequisites

- Node.js v16+
- [OpenWeatherMap API key](https://home.openweathermap.org/api_keys)

## Installation

```bash
cd weather-cli
npm install
npm link
```

After linking, the `weather` command becomes available globally.

## Usage

```bash
# Show help
weather -h

# Save your OpenWeatherMap API token
weather -t YOUR_API_KEY

# Save a default city
weather -s Kyiv

# Get the current weather for the saved city
weather
```

### Example Output

```
WEATHER Weather in the city Kyiv
☀️  clear sky
Temperature: 18 (feels like 17.5)
Humidity: 55%
Wind speed: 3.6
```

## CLI Options

| Flag           | Description                        |
| -------------- | ---------------------------------- |
| `-h`           | Show help                          |
| `-t [API_KEY]` | Save OpenWeatherMap API token      |
| `-s [CITY]`    | Save default city                  |
| _(no flags)_   | Display weather for the saved city |

## Environment Variables

| Variable | Description                              |
| -------- | ---------------------------------------- |
| `TOKEN`  | OpenWeatherMap API key (overrides saved) |
| `CITY`   | City name (overrides saved)              |

## Dependencies

- [axios](https://www.npmjs.com/package/axios) — HTTP client
- [chalk](https://www.npmjs.com/package/chalk) — Terminal styling
- [dedent-js](https://www.npmjs.com/package/dedent-js) — Template literal formatting
