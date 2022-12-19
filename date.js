// jshint esversion:6

exports.getDate = function() {
    const today = new Date();

    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    return today.toLocaleDateString("en-US", dateOptions);
};

exports.getDay = function() {
    const today = new Date();

    const dateOptions = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", dateOptions);
};