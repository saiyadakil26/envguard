type EnvType = "string" | "number" | "boolean";
interface EnvRule {
    type: EnvType;
    required?: boolean;
    default?: any;
}
type EnvSchema = Record<string, EnvRule>;

declare class EnvGuard {
    static validate(schema: EnvSchema): Record<string, any>;
}

export { EnvGuard };
