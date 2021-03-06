const Handlebars = require('handlebars');
module.exports = function(req, res, next) {
    Handlebars.registerHelper('numberFormat', function (value, options) {
        // Helper parameters
        var dl = options.hash['decimalLength'] || 0;
        var ts = options.hash['thousandsSep'] || ',';
        var ds = options.hash['decimalSep'] || '.';
    
        // Parse to float
        var value = parseFloat(value);
    
        // The regex
        var re = '\\d(?=(\\d{3})+' + (dl > 0 ? '\\D' : '$') + ')';
    
        // Formats the number with the decimals
        var num = value.toFixed(Math.max(0, ~~dl));
    
        // Returns the formatted number
        return (ds ? num.replace('.', ds) : num).replace(new RegExp(re, 'g'), '$&' + ts);
    });
    next();
}


  