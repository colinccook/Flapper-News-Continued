var fs = require('fs');

(function() {
    function getSecret(secretKey) {
        // first try Docker container (docker cloud)
        if (process.env[secretKey])
            return process.env[secretKey].trim();

        // then try secret file (docker compose v3)
        var fileContent = fs.readFileSync('/run/secrets/' + secretKey, 'utf8');
        
        if (fileContent)
            return fileContent.trim();
        
        throw exception('Secret ' + secretKey + ' not defined!');
    }

    module.exports.getSecret = getSecret;
})();