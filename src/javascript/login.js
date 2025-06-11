document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 테스트용 간단 로그인 검사
  if (username === "student" && password === "radio123") {
    window.location.href = "../menu/menu.html"; // 로그인 성공 시 다음 페이지로 이동
  } else {
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
  }
});