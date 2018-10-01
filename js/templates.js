function returnNotificationsTemplate(notification) {
    return `
        <div class="notification-container">
            <a href="#" class="notification-text">` + notification.title + `</a>
        </div>
    `
}