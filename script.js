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
        resultDiv.innerHTML = `นาย${student.firstName} ${student.lastName} ขอแสดงความยินดีที่ได้เลื่อนระดับชั้น เป็นชั้นปีที่ ${student.year} คณะ${student.faculty} สาขาวิชา${student.major}`;
    } else {
        resultDiv.innerHTML = 'ไม่พบข้อมูลนักศึกษานี้';
    }
}
