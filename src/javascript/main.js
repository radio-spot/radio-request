// main.js - 메인 페이지 기능

// 페이지 이동 함수
function goTo(page) {
  // 페이지별 다른 메시지 표시
  const messages = {
    '사연신청': '사연신청 페이지로 이동합니다. 여러분의 이야기를 들려주세요!',
    '신청곡': '신청곡 페이지로 이동합니다. 듣고 싶은 음악을 신청해보세요!',
    '인기차트': '인기차트 페이지로 이동합니다. 지금 가장 인기 있는 곡들을 확인해보세요!',
    '방송부원': '방송부원 소개 페이지로 이동합니다. 우리 방송부를 소개합니다!',
    '문의사항': '문의사항 페이지로 이동합니다. 궁금한 점이 있으시면 언제든 문의하세요!'
  };

  const message = messages[page] || `${page} 페이지로 이동합니다.`;
  
  if (confirm(message)) {
    // 실제 구현시 window.location.href = `${page}.html` 등으로 연결
    console.log(`${page} 페이지로 이동`);
    
    // 페이지 로딩 시뮬레이션
    showLoadingMessage(page);
  }
}

// 로딩 메시지 표시
function showLoadingMessage(page) {
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'loading-overlay';
  loadingDiv.innerHTML = `
    <div class="loading-content">
      <div class="loading-spinner"></div>
      <p>${page} 페이지를 불러오고 있습니다...</p>
    </div>
  `;
  
  document.body.appendChild(loadingDiv);
  
  // 3초 후 로딩 오버레이 제거 (실제로는 페이지 이동)
  setTimeout(() => {
    loadingDiv.remove();
  }, 3000);
}

// 프로필 편집 링크 기능
document.addEventListener('DOMContentLoaded', function() {
  const profileEditButton = document.querySelector('.profile-edit');
  if (profileEditButton) {
    profileEditButton.addEventListener('click', function(e) {
      e.preventDefault();
      if (confirm('프로필 편집 페이지로 이동하시겠습니까?')) {
        // 실제로는 프로필 편집 페이지로 이동
        console.log('프로필 편집 페이지로 이동');
      }
    });
  }

  // 동적 시간 업데이트
  updateDateTime();
  setInterval(updateDateTime, 60000); // 1분마다 업데이트
});

// 현재 시간 업데이트
function updateDateTime() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('ko-KR');
  const timeStr = now.toLocaleTimeString('ko-KR', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  // 페이지에 시간 표시 요소가 있다면 업데이트
  const timeElement = document.querySelector('.current-time');
  if (timeElement) {
    timeElement.textContent = `${dateStr} ${timeStr}`;
  }
}

// 스크롤 애니메이션
window.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.card');
  const windowHeight = window.innerHeight;
  
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    
    if (cardTop < windowHeight - 50) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

// 카드 초기 스타일 설정
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // 첫 번째 뷰포트의 카드들은 즉시 표시
  setTimeout(() => {
    const visibleCards = document.querySelectorAll('.card');
    visibleCards.forEach((card, index) => {
      if (card.getBoundingClientRect().top < window.innerHeight) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, 100);
});

// 키보드 접근성 처리
document.addEventListener('DOMContentLoaded', function() {
  const iconCards = document.querySelectorAll('.icon-card[role="button"]');
  
  iconCards.forEach(card => {
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const page = card.getAttribute('aria-label').split(' ')[0];
        goTo(page);
      }
    });
  });

  // 포커스 스타일 추가
  const style = document.createElement('style');
  style.textContent = `
    .icon-card[role="button"]:focus {
      outline: 2px solid #941113;
      outline-offset: 2px;
      border-radius: 8px;
    }
  `;
  document.head.appendChild(style);
});