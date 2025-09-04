// utils/schemaValidator.ts
import Ajv from 'ajv';

export function validateSchema(schema: object, data: any): boolean {
  const ajv = new Ajv({ strict: false });
  const validate = ajv.compile(schema);
  return validate(data);
}
