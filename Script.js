// clock.js
function updateClock() {
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
    const date = new Date(now);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    document.getElementById('current-time').textContent = timeStr;

    const dateStr = `วันที่: ${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
    document.getElementById('current-date').textContent = dateStr;

    const footerTimeStr = `อัปเดตล่าสุดเวลา: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('footer-time').textContent = footerTimeStr;
}

setInterval(updateClock, 1000);
updateClock();
