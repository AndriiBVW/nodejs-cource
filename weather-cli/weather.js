#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token not provided");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token saved");
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City not provided");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("City saved");
  } catch (error) {
    printError(error.message);
  }
};

const getForecast = async () => {
  try {
    const weather = await getWeather("Kyiv");
    console.log(weather);
  } catch (error) {
    if (error?.response?.status === 404) {
      printError("City not found");
    } else if (error?.response?.status === 401) {
      printError("Invalid token");
    } else {
      printError(error.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
    return saveCity(args.s);
  }

  if (args.t) {
    return saveToken(args.t);
  }

  getForecast();
};

initCLI();
