class BitVector {
  constructor(size) {
      if (size <= 0) {
          throw new Error("Size must be greater than 0");
      }
      this.size = size;
      this.bits = new Array(Math.ceil(size / 32)).fill(0);
  }

  set(bitIndex) {
      if (bitIndex < 0 || bitIndex >= this.size) {
          throw new Error("Invalid bit index");
      }
      const wordIndex = Math.floor(bitIndex / 32);
      const bitOffset = bitIndex % 32;
      this.bits[wordIndex] |= (1 << bitOffset);
  }
  
  reset(bitIndex) {
      if (bitIndex < 0 || bitIndex >= this.size) {
          throw new Error("Invalid bit index");
      }
      const wordIndex = Math.floor(bitIndex / 32);
      const bitOffset = bitIndex % 32;
      this.bits[wordIndex] &= ~(1 << bitOffset);
  }

  get(bitIndex) {
      if (bitIndex < 0 || bitIndex >= this.size) {
          throw new Error("Invalid bit index");
      }
      const wordIndex = Math.floor(bitIndex / 32);
      const bitOffset = bitIndex % 32;
      return (this.bits[wordIndex] & (1 << bitOffset)) !== 0;
  }
}

const bv = new BitVector(64);
bv.set(17);
bv.set(5);
bv.reset(5);

console.log(bv.get(2));
console.log(bv.get(5));
console.log(bv.get(17));
console.log(bv.get(0));
