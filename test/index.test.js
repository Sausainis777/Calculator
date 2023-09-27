import { handleKeyBoardInput } from "../src";
document.getElementById = jest.fn(() => ({textContent: ""}))

describe ('handleKeyBoardInput', () => {
    it('shoild not simulate a click for an invalid key', () => {
        handleKeyBoardInput('A')
        expect(document.getElementById('output').textContent).toBe('');
    })
})
