//바탕색
const body = document.getElementById("body");
body.style.backgroundColor = "#1C3752";

//타이틀
const header = document.getElementById("header");
header.textContent = "Monster Hunter Wilds";
header.style.color = "wheat";

//사진진
const img = document.getElementById("game-img");
img.setAttribute("src", "./screenshots/MHwilds.png");

//목차
const tables = document.querySelectorAll(".Table a");
const table = [
  "모든 게임",
  "액션 게임",
  "몬스터 프렌차이즈",
  "몬스터 헌터 와일드",
];
for (let i = 0; i < table.length; i++) {
  tables[i].textContent = table[i];
  console.log(table[i]);
}

//소개글
const introduction = document.querySelectorAll(".row p");
introduction[0].textContent =
  "몬몬스터 헌터 와일드 자연의 억제되지 않은 힘은 거칠고 무자비하며, 환경은 순간마다 극적으로 변합니다. 이것은 괴물과 인간, 그리고 이중성의 세계에서 조화롭게 살기 위한 그들의 투쟁에 대한 이야기입니다.";

//출시일
introduction[1].textContent = "출시일: 2025년 2월 28일";
console.log(introduction[1]);
//링크1
const capcomLink1 = document.getElementById("capcom-link1");
capcomLink1.textContent = "캡콤 공식 홈페이지";
capcomLink1.style.color = "orange";

//링크2
const capcomLink2 = document.getElementById("capcom-link2");
capcomLink2.textContent = "캡콤 공식 홈페이지";
capcomLink2.style.color = "orange";

//시그템 요구 사황
const demandSituation = document.querySelectorAll(".row2 h3");
demandSituation[0].textContent = "시그템 요구 사황";
const demandSituationP = document.querySelectorAll(".row2 p");
const demand = [
  "최저한의: 64비트 프로세서와 운영 체제가 필요합니다",
  "운영 체제: Windows®10(64비트 필요)",
  "프로세서: Intel® Core™ i5-10600 또는 Intel® Core™ i3-12100F 또는 AMD Ryzen™ 5 3600",
  "메모리: 16GB 램",
  "그래픽: NVIDIA® GeForce® GTX 1660 Super(VRAM 6GB) 또는 AMD Radeon™ RX 5600 XT(VRAM 6GB)",
  "다이렉트X: 버전 12",
  "저장: 사용 가능한 공간 140GB",
  "회로망: 광대역 인터넷 연결",
  "최저한의: 64비트 프로세서와 운영 체제가 필요합니다",
];

for (let i = 0; i < demand.length; i++) {
  demandSituationP[i].textContent = demand[i];
  console.log(demand[i]);
}

//호환언어
const LanguageH3 = document.querySelectorAll(".row3 h3");
LanguageH3[0].textContent = "호환 언어";
const LanguageP = document.querySelectorAll(".row3 p");
const Language1 = ["영어", "일본어", "중국어", "한국어"];
for (let i = 0; i < Language1.length; i++) {
  LanguageP[i].textContent = Language1[i];
  console.log(LanguageP[i]);
}

//가격
const priceTitle = [
  "Monster Hunter Wilds 구매",
  "Monster Hunter Wilds Deluxe 구매",
  "Monster Hunter Wilds Ultimate Edition 구매",
];
const value = ["74,800", "99,000", "129,000"];

const prititle = document.querySelectorAll(".price h3");
for (let i = 0; i < priceTitle.length; i++) {
  prititle[i].textContent = priceTitle[i];
  console.log(prititle[i]);
}

const val = document.querySelectorAll(".price");
for (let i = 0; i < value.length; i++) {
  val[i].querySelector("input").value = value[i];
  console.log(val[i]);
}
function toggleAct(button) {
  button.classList.toggle("act");
}

const addButton = document.getElementById("add-requirement");
const removeButton = document.getElementById("remove-requirement");
const newRequirementInput = document.getElementById("new-requirement");
const requirementList = document.querySelector(".row2");

addButton.addEventListener("click", () => {
  const newRequirement = newRequirementInput.value.trim();
  if (newRequirement) {
    const newP = document.createElement("p");
    newP.textContent = newRequirement;
    requirementList.appendChild(newP);
    newRequirementInput.clearInput();
  } else {
    alert("요구 사항을 입력해주세요.");
  }
});

removeButton.addEventListener("click", () => {
  const lastRequirement = requirementList.querySelector("p:last-child");
  if (lastRequirement) {
    lastRequirement.remove();
  } else {
    alert("삭제할 항목이 없습니다.");
  }
});

HTMLInputElement.prototype.clearInput = function () {
  this.value = "";
  return this;
};
