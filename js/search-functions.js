function searchNotifications(element) {
    //emptys all notification
    $('.notification-wrapper').empty();
    // If search text isnt empty, it will append a notification for
    // each element that contains search string in title
    if (element.value != '') {
        notifications.searchByAttribute('title', element.value).forEach(function (data) {
            $('.notification-wrapper').append(returnNotificationsTemplate(data))
        })
    }
    // If search text is empty, it will append all notifications
    else {
        notifications.forEach(function (data) {
            $('.notification-wrapper').append(returnNotificationsTemplate(data))
        })
    }
}




// Returns array of all objects that contain text(param)
// in attribute field (also called as a param)
Array.prototype.searchByAttribute = function (attribute, text) {
    var newArray = []
    this.forEach(function (data) {
        if (data[attribute].includes(text)) {
            newArray.push(data)
        }
    })
    return newArray
}