class SmartCalculator {
    constructor(initialValue) {
        this.initialValue = initialValue.toString();
        return this;
    }

    add(number) {
        this.initialValue += ('+' + number);
        return this;
    }

    subtract(number) {
        this.initialValue += ('-' + number);
        return this;
    }

    multiply(number) {
        this.initialValue += ('*' + number);
        return this;
    }

    devide(number) {
        this.initialValue += ('/' + number);
        return this;
    }

    pow(number) {
        this.initialValue += ('^' + number);
        return this;
    }

    valueOf() {
        let value = this.initialValue;
        let result = 0;
        value = value.match(/\+|\*|\^|\/|\d+|\-/g);

        while (value.indexOf('^') !== -1) {
            let index = value.lastIndexOf('^');
            result = Math.pow(value[index - 1], value[index + 1]);
            calculation(index);
        }

        while (value.indexOf('*') !== -1) {
            let index = value.indexOf('*');
            result = value[index - 1] * value[index + 1];
            calculation(index);
        }

        while (value.indexOf('/') !== -1) {
            let index = value.indexOf('/');
            result = value[index - 1] / value[index + 1];
            calculation(index);
        }

        while (value.indexOf('-') !== -1) {
            let index = value.indexOf('-');
            result = Number(value[index - 1]) - Number(value[index + 1]);
            calculation(index);
        }

        while (value.indexOf('+') !== -1) {
            let index = value.indexOf('+');
            result = Number(value[index - 1]) + Number(value[index + 1]);
            calculation(index);
        }

        function calculation(index) {
            value[index - 1] = result;
            value.splice(index, 2);
        }

        return result;
    }
}

module.exports = SmartCalculator;
