import { title } from "process";
import { generateEmail, generateFourDigitNumber, generateRandomName } from "../utils/generateRandomData";

const { firstName, fullName } = generateRandomName();
const email = generateEmail(firstName+'.'+generateFourDigitNumber());

// fixtures/createUser.ts
export const createUserPayload = {

  name: fullName,
  job: 'QA Engineer',
  email: email
};


