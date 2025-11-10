export function Input(value) {

    if (value === null) {
        return false;
    }

    if (typeof value === "string") {
        return value.trim().length > 0;
    }

    if (typeof value === "number") {
    // Non-finite numbers (Infinity, -Infinity, NaN) should return an error
    if (!isFinite(value)) {
      return value + " is not a valid number";
    }

    // For valid numbers return the number itself (tests expect this)
    return value;
    }
}

export async function Waiting() {
    return "Done";
}

export const messages = {
  items: [
    { message: 'Simple test message', from: 'Testman' },
    // ...
  ],
  callbacks: [],
  addItem(item) {
    this.items.push(item)
    // call registered callbacks
    this.callbacks.forEach(callback => callback(item))
  },
  onItem(callback) {
    // register a callback to be called when an item is added
    this.callbacks.push(callback)
  },
  getLatest, // can also be a `getter or setter if supported`
}

export function getLatest(index = messages.items.length - 1) {
  return messages.items[index]
}