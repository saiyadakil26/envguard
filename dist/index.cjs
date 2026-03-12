"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  EnvGuard: () => EnvGuard
});
module.exports = __toCommonJS(index_exports);
var import_dotenv = __toESM(require("dotenv"), 1);

// src/validator.ts
function validateEnv(schema) {
  const result = {};
  for (const key in schema) {
    const rule = schema[key];
    let value = process.env[key];
    if (!value) {
      if (rule.required) {
        throw new Error(`Missing environment variable: ${key}`);
      }
      if (rule.default !== void 0) {
        value = rule.default;
      }
    }
    if (value) {
      if (rule.type === "number") {
        const num = Number(value);
        if (isNaN(num)) {
          throw new Error(`${key} must be a number`);
        }
        value = num;
      }
      if (rule.type === "boolean") {
        value = value === "true";
      }
    }
    result[key] = value;
  }
  return result;
}

// src/index.ts
import_dotenv.default.config();
var EnvGuard = class {
  static validate(schema) {
    return validateEnv(schema);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EnvGuard
});
