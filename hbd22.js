let messages = ["หรอ?", "จริงอะป่าว", "แน่ใจหรอ", "นึกดีๆ", "จริงดิ", "ให้ตอบอีกที", "อีกที", "ครั้งสุดท้ายละ"];
let noCount = 0;

let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let messageText = document.getElementById("message");




noButton.addEventListener("click", rejectLove);
yesButton.addEventListener("click", acceptLove);

function rejectLove() {
    if (noCount < messages.length) {
        messageText.innerText = messages[noCount];
   
        noCount++;
        noButton.style.transform = `scale(${1 - noCount * 0.1})`;
        yesButton.style.transform = `scale(${1 + noCount * 0.1})`;
    }
    if (noCount === messages.length) {
        noButton.style.display = "none";
    }
}

function acceptLove() {
    document.getElementById("valentine").innerHTML = `
        <img src="imgg_bd/sundae_bd2.png" width="150">
        <div class="mali-regular-text-1">Happy birthday sundae 2025 🥳</div>
        <br>
        <div class="mali-regular-text-2">อายุเพิ่มขึ้นอีกปีแล้วว ขอให้มีความสุขมากๆนะครับ สุขภาพร่างกายแข็งแรง</div><br>
        <div class="mali-regular-text-2">ปีนี้สุขภาพเริ่มแย่อะเรา ช่วงสอบไม่ค่อยได้นอนเลยยย พักผ่อนเยอะๆหน่อย🛌💤 </div><br>
        <div class="mali-regular-text-2">ขอให้เกรดออกมาถูกใจนะ 💯 คะแนนท้อปห้องทุกวิชา</div><br>
        <div class="mali-regular-text-2">ขอให้ได้กินแต่ของอร่อยๆทุกวันทุกมื้อ อย่ากินแต่ขนม 🍰🍨🥯🥐  กินข้าวด้วย </div><br>
        <div class="mali-regular-text-2">รักนะ 💙 จุ้บบบๆๆๆ</div>
        <br><br>   
        <div class="mali-regular-text-3">กรุณาลดเสียงก่อนเปิด !!!</div>
        <br>
        <iframe width="350" height="200" src="https://www.youtube.com/embed/v6sonhn-T2o?si=mT__ghmm6ANeCBT2&amp;clip=UgkxfY76gjirtGhPo9o5EXj2kyX111a3Fk8x&amp;clipt=EMTBfRikloEB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;
    launchConfetti();
    startHeartRain();
    startHeartRain2();
}


function launchConfetti() {
var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function startHeartRain() {
    const heartContainer = document.getElementById("heart-container");
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
function startHeartRain2() {
    const heartContainer = document.getElementById("heart-container");
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💙";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}