function showNotification(city, message) {
    const container = document.getElementById('notification-container');
    
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `<strong>${city}</strong>: ${message}`;
    
    container.appendChild(notification);
    
    // ลบการแจ้งเตือนหลังจาก 5 วินาที
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function startRecurringNotifications() {
    const cities = [
        { city: 'แจ้งเตือน', message: 'สามารถย้าย/ปรับขนาดเวลาได้ ' },
        { city: 'แจ้งเตือน', message: 'กิจกรรมพิเศษเริ่มต้นแล้วอย่าลืมกดรับ!' },
        { city: 'แจ้งเตือน', message: 'อ่านประกาศได้ที่กล่องจดหมาย' },
    ];

    let index = 0;

    // แสดงแจ้งเตือนแรกหลังจากเปิดเว็บ 5 วินาที
    setTimeout(() => {
        const { city, message } = cities[index];
        showNotification(city, message);
        index++;

        // เริ่มการแจ้งเตือนถัดไปทุก 10 วินาที
        const intervalId = setInterval(() => {
            const { city, message } = cities[index];
            showNotification(city, message);

            index++;
            if (index >= cities.length) {
                clearInterval(intervalId); // หยุดการวนลูปแจ้งเตือน
                setTimeout(startRecurringNotifications, 20000); // วนลูปใหม่หลัง 20 วินาที
            }
        }, 10000);
    }, 5000);
}

// เริ่มการแจ้งเตือน
startRecurringNotifications();

