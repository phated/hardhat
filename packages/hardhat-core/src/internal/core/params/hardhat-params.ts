import { HardhatParamDefinitions } from "../../../types";

import * as types from "./argumentTypes";

export const HARDHAT_PARAM_DEFINITIONS: HardhatParamDefinitions = {
  network: {
    name: "network",
    defaultValue: undefined,
    description: "The network to connect to.",
    type: types.string,
    isOptional: true,
    isFlag: false,
    isVariadic: false,
  },
  showStackTraces: {
    name: "showStackTraces",
    defaultValue: false,
    description: "Show stack traces.",
    type: types.boolean,
    isFlag: true,
    isOptional: true,
    isVariadic: false,
  },
  version: {
    name: "version",
    defaultValue: false,
    description: "Shows hardhat's version.",
    type: types.boolean,
    isFlag: true,
    isOptional: true,
    isVariadic: false,
  },
  help: {
    name: "help",
    defaultValue: false,
    description: "Shows this message, or a task's help if its name is provided",
    type: types.boolean,
    isFlag: true,
    isOptional: true,
    isVariadic: false,
  },
  emoji: {
    name: "emoji",
    defaultValue: process.platform === "darwin",
    description: "Use emoji in messages.",
    type: types.boolean,
    isFlag: true,
    isOptional: true,
    isVariadic: false,
  },
  config: {
    name: "config",
    defaultValue: undefined,
    description: "A Hardhat config file.",
    type: types.inputFile,
    isFlag: false,
    isOptional: true,
    isVariadic: false,
  },
  verbose: {
    name: "verbose",
    defaultValue: false,
    description: "Enables Hardhat verbose logging",
    type: types.boolean,
    isFlag: true,
    isOptional: true,
    isVariadic: false,
  },
  maxMemory: {
    name: "maxMemory",
    defaultValue: undefined,
    description: "The maximum amount of memory that Hardhat can use.",
    type: types.int,
    isOptional: true,
    isFlag: false,
    isVariadic: false,
  },
  tsconfig: {
    name: "tsconfig",
    defaultValue: undefined,
    description: "A TypeScript config file.",
    type: types.inputFile,
    isOptional: true,
    isFlag: false,
    isVariadic: false,
  },
  flamegraph: {
    name: "flamegraph",
    defaultValue: undefined,
    description: "Generate a flamegraph of your Hardhat tasks",
    type: types.boolean,
    isOptional: true,
    isFlag: true,
    isVariadic: false,
  },
  typecheck: {
    name: "typecheck",
    defaultValue: false,
    description: "Enable TypeScript type-checking of your scripts/tests",
    type: types.boolean,
    isFlag: true,
    isOptional: true,
    isVariadic: false,
  },
};
