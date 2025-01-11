function toggleHelp() {
  var helpMessage = document.getElementById("helpMessage");

  // เพิ่ม/ลบคลาสเพื่อแสดง/ซ่อนข้อความคำแนะนำ
  if (helpMessage.style.display === "block") {
      helpMessage.style.display = "none"; // ซ่อนข้อความ
  } else {
      helpMessage.style.display = "block"; // แสดงข้อความ
  }
}
