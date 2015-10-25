# apikeypair
Tiny module to generate id and secret pairs.
Output looks like this:
```json
{
  "id": "2210aebae1791f7056ce095db2b7961b6854c1fb",
  "secret": "2f495a1dadfbb84c1e42d9c551a5ace53llcEBA1W7DvF8qXiZGr5dpWDomVp7EDKMZcFIdPpv8="
}
```

##Usage##

Install with:
```bash
npm install --save apikeypair
```

Then require and use like following:
```javascript
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

```

###Methods###

- ```gen(callback)``` - generate random ID and Secret asynchronously
- ```genSync()``` - generate random ID and Secret synchronously
- ```calc(data, callback)``` - generate ID and Secret asynchronously using specific input (i.e. user id)
- ```calcSync(data)``` - generate ID and Secret synchronously using specific input (i.e. user id)
