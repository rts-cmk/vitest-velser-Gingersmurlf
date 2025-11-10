export function Input(value) {

    if (value === null) {
        return false;
    }

    if (typeof value === "string") {
        return value.trim().length > 0;
    }

    if (typeof value === "number") {
        return value;
    }
}