import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { Input, Waiting } from "./input-function";

describe("input", () => {
    it("should validate inputs", () => {

        let thisNumber;

        describe("lave en beforeEach og se om den virker", () => {
            beforeEach(() => {
                thisNumber = 2
            });

            expect(Input(thisNumber)).toEqual(2)
        })

        afterEach(() => {
            thisNumber = null;
        });


        expect(Input("hej med dig")).toEqual(true)
    })

    it("should return an expected error", () => {
        const value = Infinity
        expect(Input(value)).toEqual(value + " is not a valid number")
    })
})

describe("waiting", () => {
    it("should return Done, not a promise", async () => {
        const result = await Waiting()
        expect(result).toEqual("Done")
    })

    // it("should return a promise not Done", () => {
    //     const result = Waiting()
    //     expect(result).toEqual("Done")
    // })
})