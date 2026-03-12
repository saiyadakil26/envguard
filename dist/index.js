// src/index.ts
import dotenv from "dotenv";

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
dotenv.config();
var EnvGuard = class {
  static validate(schema) {
    return validateEnv(schema);
  }
};
export {
  EnvGuard
};
