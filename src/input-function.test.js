import { describe, expect, it } from "vitest";
import { Input } from "./input-function";

describe("input", () => {
    it("should validate a form", () => {
        expect(Input(2)).toEqual(2)

        expect(Input("hej med dig")).toEqual(true)
    })
})