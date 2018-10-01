var notifications = [];

$(document).ready(function () {
    //Fetching notifications from database
    $.get('/beckend-ljev/obavestenja.json', function (data) {
        //adding a global containing notifications
        notifications = data;
        //Appending a notification template for each notification
        notifications.forEach(function (data) {
            $('.notification-wrapper').append(returnNotificationsTemplate(data))
        })
    })

})