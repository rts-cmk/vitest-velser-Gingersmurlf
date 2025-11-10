export function Input(value) {

    if (value === null) {
        return false;
    }

    if (typeof value === "string") {
        return value.trim().length > 0;
    }

    if (typeof value === "number") {
        if (!isFinite(value) && value >= 0)
            return value + " is not a valid number";
    }
}

export async function Waiting() {
    return "Done";
}