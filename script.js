document.addEventListener("DOMContentLoaded", function () {

    const tvButton = document.getElementById("tvButton");
    const birdieCard = document.getElementById("birdieCard");
    const friezyImg = document.querySelector("#friezy img");
    const birdieImg = document.querySelector("#birdie img");
    const loonyImg = document.querySelector("#loony img");
    const toonyImg = document.querySelector("#toony img");
    const vovkinImg = document.querySelector("#vovkin img");
    const msrosaImg = document.querySelector("#msrosa img");
    const volkieImg = document.querySelector("#volkie img");
    const page = document.body.dataset.page;

    if (!tvButton) return;


    if (birdieCard) {

        birdieCard.addEventListener("click", function (e) {

            e.preventDefault();

            const isOff = document.body.classList.contains("tv-off");

            document.body.style.opacity = "0";

            setTimeout(() => {

                if (isOff) {
                    window.location.href = "characters/birdie-off.html";
                } else {
                    window.location.href = "characters/birdie.html";
                }

            }, 400);

        });

    }

    

    tvButton.addEventListener("click", function () {
        

        if (page === "birdie") {

            document.body.style.opacity = "1";

            setTimeout(() => {

            document.body.classList.toggle("tv-off");
            tvButton.classList.toggle("active");

            const isOff = document.body.classList.contains("tv-off");

            const stateText = tvButton.querySelector(".tv-state");

            if (stateText) {
                stateText.textContent = isOff ? "OFF" : "ON";
            }
                window.location.href = "birdie-off.html";
            }, 200);

            return;
        }

        if (page === "birdie-off") {

            document.body.style.opacity = "1";

            setTimeout(() => {
            document.body.classList.toggle("tv-off");
            tvButton.classList.toggle("active");

            const isOff = document.body.classList.contains("tv-off");

            const stateText = tvButton.querySelector(".tv-state");

            if (stateText) {
                stateText.textContent = isOff ? "OFF" : "ON";
            }
                window.location.href = "birdie.html";
            }, 200);

            return;
        }

        if (page === "loony") {

            document.body.style.opacity = "1";

            setTimeout(() => {
            document.body.classList.toggle("tv-off");
            tvButton.classList.toggle("active");

            const isOff = document.body.classList.contains("tv-off");

            const stateText = tvButton.querySelector(".tv-state");

            if (stateText) {
                stateText.textContent = isOff ? "OFF" : "ON";
            }
                window.location.href = "loony-off.html";
            }, 200);

            return;
        }

        if (page === "loony-off") {

            document.body.style.opacity = "1";

            setTimeout(() => {
            document.body.classList.toggle("tv-off");
            tvButton.classList.toggle("active");

            const isOff = document.body.classList.contains("tv-off");

            const stateText = tvButton.querySelector(".tv-state");

            if (stateText) {
                stateText.textContent = isOff ? "OFF" : "ON";
            }
                window.location.href = "loony.html";
            }, 200);

            return;
        }

        if (page === "toony") {

            document.body.style.opacity = "1";

            setTimeout(() => {
            document.body.classList.toggle("tv-off");
            tvButton.classList.toggle("active");

            const isOff = document.body.classList.contains("tv-off");

            const stateText = tvButton.querySelector(".tv-state");

            if (stateText) {
                stateText.textContent = isOff ? "OFF" : "ON";
            }
                window.location.href = "toony-off.html";
            }, 200);

            return;
        }

        if (page === "toony-off") {

            document.body.style.opacity = "1";

            setTimeout(() => {
            document.body.classList.toggle("tv-off");
            tvButton.classList.toggle("active");

            const isOff = document.body.classList.contains("tv-off");

            const stateText = tvButton.querySelector(".tv-state");

            if (stateText) {
                stateText.textContent = isOff ? "OFF" : "ON";
            }
                window.location.href = "toony.html";
            }, 200);

            return;
        }

        document.body.style.opacity = "1";

        setTimeout(() => {

            document.body.classList.toggle("tv-off");
            tvButton.classList.toggle("active");

            const isOff = document.body.classList.contains("tv-off");

            const stateText = tvButton.querySelector(".tv-state");

            if (stateText) {
                stateText.textContent = isOff ? "OFF" : "ON";
            }

            if (friezyImg) {
                friezyImg.src = isOff
                    ? "friezypic/فرايزي كاتانا.png"
                    : "friezypic/فرايزي رامن.png";
            }
            if (birdieImg) {
                birdieImg.src = isOff
                    ? "images/birdie-off.png"
                    : "images/birdieheart.png";
            }

            if (loonyImg) {
                loonyImg.src = isOff
                    ? "images/loony-off.png"
                    : "images/loony.png";
            }

            if (toonyImg) {
                toonyImg.src = isOff
                    ? "images/toony-off.png"
                    : "images/toony.png";
            }

            if (vovkinImg) {
                vovkinImg.src = isOff
                    ? "images/vovkin hitting.png"
                    : "images/فوفكن جالس.png";
            }

            if (msrosaImg) {
                msrosaImg.src = isOff
                    ? "ms rosa-off.png"
                    : "images/msrosa.png";
            }

            if (volkieImg) {
                volkieImg.src = isOff
                    ? "images/volkie.png"
                    : "images/فولكي جالس.png";
            }

            document.body.style.opacity = "1";

        }, 200);

    });

});


function downloadFile(filePath) {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop();

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const message = document.getElementById("comingSoonMessage");

function comingSoon() {
    message.classList.add("show");

    clearTimeout(message.timeout);

    message.timeout = setTimeout(() => {
        message.classList.remove("show");
    }, 2000);
}
