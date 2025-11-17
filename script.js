// ตัวอย่างข้อมูลนักศึกษา
const students = [
  {
    firstName: "บรรเจิด",
    lastName: "เปรมปรีดิ์",
    year: 4,
    faculty: "วิจิตรศิลป์",
    major: "ประติมากรรม"
  },
  {
    firstName: "สมเดช",
    lastName: "สุขสวัสดิ์",
    year: 3,
    faculty: "วิศวกรรมศาสตร์",
    major: "คอมพิวเตอร์"
  }
];

function checkStudent() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const resultSection = document.getElementById("resultSection");
  const resultText = document.getElementById("resultText");

  const student = students.find(s => s.firstName === firstName && s.lastName === lastName);

  if(student) {
    resultText.textContent = `${student.firstName} ${student.lastName} ขอแสดงความยินดีที่ได้เลื่อนระดับชั้น เป็นชั้นปีที่ ${student.year} คณะ${student.faculty} สาขาวิชา${student.major}`;
  } else {
    resultText.textContent = "ไม่พบข้อมูลนักศึกษาคนนี้";
  }

  resultSection.style.display = "block";
}
