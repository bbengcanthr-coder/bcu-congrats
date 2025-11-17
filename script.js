async function searchStudent() {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();

  if (!firstName || !lastName) {
    alert('กรุณากรอกชื่อและนามสกุล');
    return;
  }

  const response = await fetch('data.json');
  const students = await response.json();

  const student = students.find(s => s.firstName === firstName && s.lastName === lastName);

  const resultDiv = document.getElementById('result');
  if (student) {
    resultDiv.innerHTML = `
      <div class="result-card">
        รหัสนักศึกษา: ${student.studentID} <br>
        ${student.firstName} ${student.lastName} <br>
        ขอแสดงความยินดีที่ได้เลื่อนระดับชั้น <br>
        เป็นชั้นปีที่ ${student.year} <br>
        คณะ${student.faculty} สาขาวิชา${student.major}
      </div>
    `;
  } else {
    resultDiv.innerHTML = `
      <div class="result-card error">
        ไม่พบข้อมูลนักศึกษานี้
      </div>
    `;
  }
}
