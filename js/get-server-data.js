var notifications = [];

$(document).ready(function () {
    $.get('/beckend-ljev/obavestenja.json', function (data) {
        notifications = data;
        notifications.forEach(function (data) {
            $('.notification-wrapper').append(returnNotificationsTemplate(data))
        })
    })

})