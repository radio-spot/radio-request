document.getElementById("requestForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 새로고침 방지

  const name = document.getElementById("name").value;
  const song = document.getElementById("song").value;
  const message = document.getElementById("message").value;

  alert(`🎉 신청 완료!\n\n이름: ${name}\n신청곡: ${song}\n사연: ${message}`);

  // 여기에서 서버로 데이터 전송하는 코드 추가 가능 - 예: fetch API 사용....? 빡단비'll add later. :)
  this.reset(); // 폼 초기화
});