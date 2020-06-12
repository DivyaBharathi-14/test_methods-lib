const describe = (describe1) => {
    const it = (itShouldBeWhat) => {
        const expect = (actualResult) => {
            const toBe = (expectedResult) => {
                if (actualResult === expectedResult) {
                    console.log(describe1,itShouldBeWhat,' :✓');
                } else {
                    throw 'Fail :✗';
                }
            };
            return {
                toBe: toBe
            }
        };
        return {
            expect: expect
        }
    };
    return {
        it: it
    }
};
module.exports = describe;