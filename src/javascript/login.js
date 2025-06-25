// 로그인 폼 처리
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const submitButton = document.querySelector(".sign-in");

  // 입력값 검증
  if (!username || !password) {
    showMessage("아이디와 비밀번호를 모두 입력해주세요.", "error");
    return;
  }

  // 로딩 상태 표시
  submitButton.disabled = true;
  submitButton.textContent = "로그인 중...";

  // 테스트용 간단 로그인 검사 (실제 구현시에는 서버 API 호출)
  setTimeout(() => {
    if (username === "student" && password === "radio123") {
      showMessage("로그인 성공!", "success");
      setTimeout(() => {
        window.location.href = "main.html";
      }, 1000);
    } else {
      showMessage("아이디 또는 비밀번호가 잘못되었습니다.", "error");
      submitButton.disabled = false;
      submitButton.textContent = "Sign in";
    }
  }, 1000);
});

// 메시지 표시 함수
function showMessage(message, type) {
  // 기존 메시지 제거
  const existingMessage = document.querySelector(".message");
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${type}`;
  messageDiv.textContent = message;
  
  const form = document.getElementById("loginForm");
  form.appendChild(messageDiv);

  // 3초 후 메시지 제거
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

// Create account 버튼 처리
document.querySelector(".create-account").addEventListener("click", function() {
  showMessage("회원가입 기능은 준비 중입니다.", "info");
});

// 엔터 키 처리
document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const form = document.getElementById("loginForm");
    form.dispatchEvent(new Event("submit"));
  }
});