/* eslint-disable no-extend-native */
String.prototype.formatToTimeOrDate = function (format) {
    const date = new Date(this);
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }
    
    const options = format === 'time' 
        ? { hour: '2-digit', minute: '2-digit' }
        : { year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleString('en-US', options);
};

String.prototype.formatDate = function() {
    const date = new Date(this);

    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    return formattedDate;
};

String.prototype.trimWithEllipsis = function(maxLength) {
    if (this.length > maxLength) {
        return this.substring(0, maxLength) + '...';
    }
    return this;
};
