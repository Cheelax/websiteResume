exports.getDate = function() {
    const today = new Date();

    const options = {weekday: 'long',day: 'numeric',month: 'long', year: 'numeric'};

    return today.toLocaleDateString("fr-FR",options);
}

exports.getDay = getDay;
function getDay() {
    const today = new Date();

    const options = {weekday: 'long'};

    return today.toLocaleDateString("fr-FR",options);
}