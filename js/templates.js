function returnNotificationsTemplate(notification) {
    return `
        <div class="notification-container">
            <a href="#" class="notification-text">` + notification.title + `</a>
        </div>
    `
}

function appendNotificationTemplate(AppendingTo, notification) {
    $(AppendingTo).append(returnNotificationsTemplate(notification))
}

function returnLatestItemTemplate(latest, index) {
    return `
        <div class="latest-container">
            <div class="latest-image">
                <img src="` + latest["main-image"] + `" />
            </div>
            <div class="latest-info">
                <h3 class="latest-title">` + latest.title + `</h3> 
                <p class="latest-description">` + latest.text + `</p>
                <a href="#" class="read-more" onclick="console.log(latest[` + index + `])">Read more -> </span></a>
            </div>
        </div> 
    `
}

function appenLatestTemplate(AppendingTo, latest, index) {
    $(AppendingTo).append(returnLatestItemTemplate(latest, index))
}