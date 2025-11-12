export function Input(value) {

  if (!value) {
    return false;
  }

  if (typeof value === "object") {
    return "This is not a number or a string";
  }

  if (typeof value === "string") {
    return value.trim().length > 0;
  }

  if (typeof value === "number") {
    if (!isFinite(value)) {
      return value + " This is not a valid number";
    }
    else {
      return value;
    }
  }

  return false;
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