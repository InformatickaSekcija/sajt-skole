var notifications = [];
var latest = []
$(document).ready(function () {
    //Fetching notifications from database
    $.get('/beckend-ljev/obavestenja.json', function (data) {
        //adding a global containing notifications
        notifications = data;
        //Appending a notification template for each notification
        notifications.forEach(function (data) {
            appendNotificationTemplate($('.notification-wrapper'), data)
        })
    })
    $.get('/beckend-ljev/aktualnosti.json', function (data) {
        //adding a global containing notifications
        latest = data;
        //Appending a notification template for each notification
        latest.forEach(function (data, index) {
            if (index % 2 == 0) {
                appenLatestTemplate($('.upper-wrapper'), data, index)
            } else {
                appenLatestTemplate($('.lower-wrapper'), data, index)
            }
        })
    })
})