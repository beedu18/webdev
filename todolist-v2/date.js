const date = new Date(); 

exports.getDate = function() {
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };
    return date.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
    const options = {
        weekday: "long",
    };
    return date.toLocaleDateString("en-US", options);
}

exports.getFullDate = function() {
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    };
    return date.toLocaleDateString("en-US", options);
}