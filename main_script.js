// 텍스트 애니메이션
const spanEl = document.querySelector("main h2 span");
const txtArr = ["고전명저북클럽 발표","그로테스트 디지털 체험존","사회적 위선 진단기","당신은 정상입니까?"];
let index = 0;
let currentTxt = txtArr[index].split("");

// 텍스트를 한 글자씩 추가하는 함수
function writeTxt() {
    spanEl.textContent += currentTxt.shift();
    if (currentTxt.length !== 0) {
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else {
        setTimeout(deleteTxt, 3000);
    }
}

// 텍스트를 하나씩 삭제하는 함수
function deleteTxt() {
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if (currentTxt.length !== 0) {
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}

writeTxt();

// 💡 헤더에 active 클래스 추가 (스크롤 시 배경색 변경)
(function () {
    const headerEl = document.querySelector("header"); // 헤더 선택자 수정
    window.addEventListener("scroll", function () {
        requestAnimationFrame(scrollCheck);
    });

    function scrollCheck() {
        const browserScrollY = window.scrollY || window.pageYOffset;
        if (browserScrollY > 0) {
            headerEl.classList.add("active");
        } else {
            headerEl.classList.remove("active");
        }
    }
})();

//스크롤
document.addEventListener("DOMContentLoaded", function () {
    const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");

    scrollMoveEl.forEach((el) => {
        el.addEventListener("click", function () {
            const targetSelector = this.dataset.target;
            const target = document.querySelector(targetSelector);

            if (target) {
                const targetScrollY = target.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: targetScrollY,
                    behavior: "smooth"
                });
            } else {
                console.warn(`스크롤할 요소를 찾을 수 없음: ${targetSelector}`);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-btn');
    
    // 다른 페이지로 이동하는 버튼
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = button.getAttribute('data-target');
            window.location.href = `/${target}`;  // 페이지 이동
        });
    });

});

