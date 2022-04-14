var Web3 = require('web3');
getWeb3 = new Promise(function(resolve) {
    window.addEventListener('load', function() {
        var results;
        var web3 = window.web3;//将window.web3赋值为web3，这样当没有安装metamask并没解锁的时候window.web3的返回值为undefined
        if (typeof web3 !== 'undefined') {
            // Use Mist/MetaMask's provider.
            web3 = new Web3(web3.currentProvider);
            results = {
                web3: web3
            };
            console.log('Injected web3 detected.');
            resolve(results);
        } else {
            alert('请安装MetaMask插件并解锁您的以太坊账户');
        }
    })
});
var web3;
getWeb3.then(function(results) {
    web3 = results.web3;
});