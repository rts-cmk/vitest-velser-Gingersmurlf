import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { Input, Waiting, getLatest, messages } from "./input-function";

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

describe("get latest", () => {
    it('should get the latest message with a spy', () => {
        const spy = vi.spyOn(messages, 'getLatest')
        expect(spy.getMockName()).toEqual('getLatest')

        expect(messages.getLatest()).toEqual(
            messages.items[messages.items.length - 1],
        )

        expect(spy).toHaveBeenCalledTimes(1)

        spy.mockImplementationOnce(() => 'access-restricted')
        expect(messages.getLatest()).toEqual('access-restricted')

        expect(spy).toHaveBeenCalledTimes(2)
    })

    it('passing down the mock', () => {
        const callback = vi.fn()
        messages.onItem(callback)

        messages.addItem({ message: 'Another test message', from: 'Testman' })
        expect(callback).toHaveBeenCalledWith({
            message: 'Another test message',
            from: 'Testman',
        })
    })
})