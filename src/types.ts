export type EnvType = "string" | "number" | "boolean";

export interface EnvRule {
  type: EnvType;
  required?: boolean;
  default?: any;
}

export type EnvSchema = Record<string, EnvRule>;
