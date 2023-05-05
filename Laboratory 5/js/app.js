var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBits: [],
        encodedBits1: [],
        encodedBits2: [],
        encodedBits3: [],
        encodedBits4: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        
        encode: function(){
            this.encodedBits = getManchesterLevelEncoding(this.bits);
            this.encodedBits1 = nonreturntozeromark(this.bits);
            this.encodedBits2 = nonreturntozerospace(this.bits);
            this.encodedBits3 = returntozero(this.bits);
            this.encodedBits4 = biphaselevel1(this.bits);
        }
    }
})

console.log('🍓🥑🍏☕🏆⚽✅🚦');