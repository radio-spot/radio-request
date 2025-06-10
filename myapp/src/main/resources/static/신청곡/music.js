const API_KEY = "YOUR_YOUTUBE_API_KEY"; // 여기에 본인의 유튜브 API 키를 넣으세요

document.getElementById("musicForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.getElementById("query").value;
  searchYouTube(query);
});

function searchYouTube(query) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(query)}&key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayResults(data.items);
    })
    .catch((err) => {
      console.error("YouTube 검색 실패:", err);
      alert("검색 중 오류가 발생했습니다.");
    });
}

function displayResults(videos) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // 이전 결과 초기화

  if (videos.length === 0) {
    resultsDiv.innerHTML = "<p>검색 결과가 없습니다.</p>";
    return;
  }

  videos.forEach((video) => {
    const videoId = video.id.videoId;
    const title = video.snippet.title;
    const thumbnail = video.snippet.thumbnails.medium.url;

    const videoBox = document.createElement("div");
    videoBox.classList.add("video-box");
    videoBox.style.marginBottom = "20px";

    videoBox.innerHTML = `
      <img src="${thumbnail}" alt="${title}" style="width: 100%;">
      <p><strong>${title}</strong></p>
      <button onclick="selectVideo('${videoId}', '${title}')">이 영상 선택하기</button>
    `;

    resultsDiv.appendChild(videoBox);
  });
}

function selectVideo(videoId, title) {
  const confirmResult = confirm(`정말 "${title}"을(를) 신청하시겠습니까?`);
  if (confirmResult) {
    alert(`🎶 신청 완료!\n\n제목: ${title}\n링크: https://youtu.be/${videoId}`);
    // TODO For 빡단비 : 서버로 신청 정보 전송하는 코드 추가 가능
  }
}