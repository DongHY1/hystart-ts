import { foo } from "../src";
import { describe, expect, it } from 'vitest'
describe('should', () => {
    it('exported', () => {
        expect(foo(1, 1)).toEqual(2)
    })
})