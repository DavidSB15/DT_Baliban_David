var app = new Vue({
    el: '#hamming-encoder',
    data: {
        dataBits: [],
        status: '',
        numberOfDataBits: 8
    },
    created: function () {
        this.initDataBits(8);
    },
    methods: {
        initDataBits: function(){
            this.dataBits=[];

            for(var i=0;i<this.numberOfDataBits;i++){
                var bit = { data: null };
                this.dataBits.push(bit);
            }
        },
        send: function () {
            if (this.validate(this.dataBits) === true){
                var encodedMessage = this.encode(this.dataBits);
                // this.status = encodedMessage + ' encoded sent to server';

                return axios.put("http://localhost:3000/message", {bits: encodedMessage}).then(
                    response => (this.status = response.data)
                );
            } else {
                this.status = 'Input is not valid. Please use 0 or 1 as data bit values';
            }
        },
        encode: function(bits)
        {
          
          var numDataBits = bits.length;
          var numParityBits = Math.ceil(Math.log2(numDataBits + 1)); // Number of parity bits required
          var encodedBits = new Array(numDataBits + numParityBits);

          // Calculate parity bits
          for (var i = 0; i < numParityBits; i++) {
              var parityBitIndex = Math.pow(2, i) - 1; // Index of the parity bit in the encodedBits array
              var sum = 0;
              for (var j = parityBitIndex; j < numDataBits + numParityBits; j += Math.pow(2, i+1)) {
                  for (var k = 0; k < Math.pow(2, i) && j+k < numDataBits + numParityBits; k++) {
                      if (j+k != parityBitIndex) {
                          sum += parseInt(encodedBits[j+k]) || 0;
                      }
                  }
              }
              encodedBits[parityBitIndex] = this.parity(sum);
          }

          // Copy data bits into encodedBits array
          var dataIndex = 0;
          for (var i = 0; i < numDataBits + numParityBits; i++) {
              if (!isPowerOfTwo(i+1)) {
                  encodedBits[i] = parseInt(bits[dataIndex].data);
                  dataIndex++;
              }
          }

          console.log("Control bits: "+encodedBits.slice(0, numParityBits).join(","));
          return encodedBits; // vectorul V (cuvantul de transmis)



            /*
            // This function must be changed to allow any number of data bits

            if (this.numberOfDataBits == 8)
            {
            // Right now it only works for 4 data bits
              var c8=this.parity(parseInt(bits[0].data)+parseInt(bits[1].data)+parseInt(bits[2].data)+parseInt(bits[3].data));
              var c4=this.parity(parseInt(bits[1].data)+parseInt(bits[2].data)+parseInt(bits[3].data)+parseInt(bits[7].data)); // se calculeaza bitul de control de pe pozitia 4
              var c2=this.parity(parseInt(bits[0].data)+parseInt(bits[2].data)+parseInt(bits[3].data)+parseInt(bits[5].data)+parseInt(bits[6].data)); // se calculeaza bitul de control de pe pozitia 2
              var c1=this.parity(parseInt(bits[0].data)+parseInt(bits[1].data)+parseInt(bits[3].data)+parseInt(bits[4].data)+parseInt(bits[6].data)); // se calculeaza bitul de control de pe pozitia 1
              var c0=this.parity(parseInt(bits[0].data)+parseInt(bits[1].data)+parseInt(bits[2].data)+parseInt(bits[3].data)+parseInt(bits[4].data)
               +parseInt(bits[5].data)+parseInt(bits[6].data)+parseInt(bits[7].data)+c1+c2+c4+c8);
              console.log("Control bits: "+c0+","+c1+","+c2+","+c4+","+c8);
              return [c0, c1, c2, parseInt(bits[0].data), c4, parseInt(bits[1].data), parseInt(bits[2].data), parseInt(bits[3].data),c8,parseInt(bits[4].data),parseInt(bits[5].data),parseInt(bits[6].data), parseInt(bits[7].data)]; // vectorul V (cuva
            }

            else if(this.numberOfDataBits == 4)
            {
              var c4=this.parity(parseInt(bits[1].data)+parseInt(bits[2].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 4
              var c2=this.parity(parseInt(bits[0].data)+parseInt(bits[2].data)+parseInt(bits[3].data)); // se calculeaza bitul de control de pe pozitia 2
              var c1=this.parity(parseInt(bits[0].data)+parseInt(bits[1].data)+parseInt(bits[3].data));
              var c0=this.parity(parseInt(bits[0].data)+parseInt(bits[1].data)+parseInt(bits[2].data)+parseInt(bits[3].data)+c1+c2+c4);
              console.log("Control bits: "+c0+" , "+c1+","+c2+","+c4);
              return [c0, c1, c2, parseInt(bits[0].data), c4, parseInt(bits[1].data), parseInt(bits[2].data), parseInt(bits[3].data)];
            }
            */

			  //console.log("Control bits: "+c1+","+c2+","+c4+","+c8);
        //    return [c1, c2, parseInt(bits[0].data), c4, parseInt(bits[1].data), parseInt(bits[2].data), parseInt(bits[3].data),c8,parseInt(bits[4].data),parseInt(bits[5].data),parseInt(bits[6].data), parseInt(bits[7].data)]; // vectorul V (cuvantul de transmis)
        },
        parity: function(number){
            return number % 2;
        },
        validate: function(bits){
            for(var i=0; i<bits.length;i++){
                if (this.validateBit(bits[i].data) === false)
                return false;
            }
            return true;
        },
        validateBit: function(character){
            if (character === null) return false;
            return (parseInt(character) === 0 ||
            parseInt(character) === 1);
        }
    }
})

function isPowerOfTwo(num) {
    return num !== 0 && (num & (num - 1)) === 0;
}
