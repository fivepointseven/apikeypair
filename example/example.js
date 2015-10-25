var apikeypair = require('../index');

//Generate sync
console.log(apikeypair.genSync());

//Generate async
apikeypair.gen(function(keypair) {
    console.log(keypair);
});

//Calculate sync
console.log(apikeypair.calcSync('SOME-RANDOM-ID'));

//Calculate async
apikeypair.calc('SOME-RANDOM-ID', function(err, keypair) {
    if(err) throw err;
    console.log(keypair);
});
