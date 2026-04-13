import { v4 as uuidv4, validate as uuidValidate } from "uuid";

export function generateUuid() {
    return uuidv4();
}

export function validateUuid(value) {
    return uuidValidate(value);
}