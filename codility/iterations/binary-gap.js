// Details: https://codility.com/programmers/lessons/1-iterations/binary_gap/

// ES5

function isZeroExistsOrNot(binary) {
    return binary.includes(0);
}
function isOneExistsOrNot(binary) {
    return binary.includes(1);
}

function solution(N) {
    var longestGap = 0;
    var indexOfOnes = [];
    var binary = N.toString(2);
    if (isZeroExistsOrNot == false) {
        return longestGap;
    }else {
        for (var i = 0; i < binary.length; i++) {
            if (isOneExistsOrNot(binary[i])) indexOfOnes.push(i);
         }

        var zeros = binary.split('1');

        for (var i = 1; i < indexOfOnes.length; i++) {
            if (zeros[i] && longestGap < zeros[i].length)
                longestGap = zeros[i].length;
        }
    }
    return longestGap;
}

console.log(solution(15));


// ES6

class BinrayGap {
    constructor() {
        this.longestGap = 0;
        this.indexOfOnes = [];
    }

    isZeroExistsOrNot(binary) {
        return binary.includes(0);
    }

    isOneExistsOrNot(binary) {
        return binary.includes(1);
    }

    solution(N) {
        const binary = N.toString(2);
        if (this.isZeroExistsOrNot == false) {
            return this.longestGap;
        }else {
            for (let i = 0; i < binary.length; i++) {
                if (this.isOneExistsOrNot(binary[i])) this.indexOfOnes.push(i);
            }

            const zeros = binary.split('1');

            for (let i = 1; i < this.indexOfOnes.length; i++) {
                if (zeros[i] && this.longestGap < zeros[i].length)
                    this.longestGap = zeros[i].length;
            }
        }
        return this.longestGap;
    }
}
binaryGap = new BinrayGap();
console.log(binaryGap.solution(1041));
