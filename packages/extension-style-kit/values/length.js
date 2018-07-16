import Scalar from "./scalar";

class Length {
    constructor(value, unit = "px") {
        this.value = value;// || 0;
        this.unit = unit;
    }

    equals(other) {
        return (this.value === other.value && this.unit === other.unit);
    }

    toStyleValue({ densityDivisor }) {
        return this.value === 0 ? "0" : `${new Scalar(this.value / densityDivisor).toStyleValue()}${this.unit}`;
    }
}

export default Length;