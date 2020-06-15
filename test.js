const describe = (describe1) => {
    const expect = (actualResult) => {
        const toBe = (expectedResult) => {
            try {
                if (actualResult === expectedResult) {
                    console.log('✓ : ', describe1);
                }
                else {
                    throw new Error('✗ : Test Case Failed');
                }
            }
            catch (e) {
                console.log(e);
            }
        };
        const toBeTrue = () => {
            try {
                if (actualResult > 0) {
                    console.log('✓ : Result is positive');
                }
                else {
                    throw new Error('✗ : Result is negative');
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        const toBeFalse = (expectedResult) => {
            if (actualResult !== expectedResult) {
                console.log("✗ : wrong expected result");
            }
        }
        const toBeNegative = () => {
            if (actualResult > 0) {
                throw new Error('✗ : Expected Result should be Negative but got Positive');
            }
            else {
                console.log('✓: Expected Result is Negative')
            }
        }
        const toBeNull = (expectedResult) => {
            try {
                if (!expectedResult) {
                    throw new Error('✗ : Null Pointer Exception');
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        return {
            toBe: toBe,
            toBeTrue: toBeTrue,
            toBeFalse: toBeFalse,
            toBeNegative: toBeNegative,
            toBeNull: toBeNull
        }
    }
    return {
        expect: expect
    }
};

module.exports = describe;

