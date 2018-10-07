function searchNotifications(element) {
    //emptys all notification
    $('.notification-wrapper').empty();
    // If search text isnt empty, it will find notifications includeing text
    if (element.value != '') {
        notifications.searchByAttribute('title', element.value).forEach(function (data) {
            appendNotificationTemplate($('.notification-wrapper'), data)
        })
    }
    // If search text is empty, it will append all notifications
    else {
        notifications.forEach(function (data) {
            appendNotificationTemplate($('.notification-wrapper'), data)
        })
    }
}


// Returns array of all objects that contain text(param)
// in attribute field (also called as a param)
Array.prototype.searchByAttribute = function (attribute, text) {
    var newArray = []
    this.forEach(function (data) {
        if (data[attribute].toLowerCase().includes(text.toLowerCase())) {
            newArray.push(data)
        }
    })
    return newArray
}