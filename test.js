const describe = (describe1) => {
    const expect = (actualResult) => {
        const toBe = (expectedResult) => {
            try {

                if (actualResult === expectedResult) {
                    console.log(describe1, ' :✓');
                }
                else {
                    throw new Error();
                }
            }
            catch (e) {
                console.log(e,'Test Case Failed:✗');
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

module.exports = describe; 

