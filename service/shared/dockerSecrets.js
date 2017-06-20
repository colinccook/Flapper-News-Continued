var fs = require('fs');

(function() {
    function getSecret(secretKey) {
        var fileContent = fs.readFileSync('/run/secrets/' + secretKey, 'utf8');
        
        if (fileContent)
            return fileContent.trim();
        
        throw exception('Secret ' + secretKey + ' not defined!');
    }

    module.exports.getSecret = getSecret;
})();