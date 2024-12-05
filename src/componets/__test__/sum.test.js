import sum from "../Sum";

test('sum function',() =>{

    const res = sum(4,5);

    expect(res).toBe(9);

});