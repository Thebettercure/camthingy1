const video = document.getElementById("video");
const startBtn = document.getElementById("startBtn");
const toggleBtn = document.getElementById("toggleBtn");

let inverted = true;

startBtn.addEventListener("click", async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: {
                    ideal: "environment"
                }
            },
            audio: false
        });

        video.srcObject = stream;
    } catch (err) {
        alert("Could not access camera: " + err.message);
    }
});

toggleBtn.addEventListener("click", () => {
    inverted = !inverted;

    video.style.filter = inverted
        ? "invert(100%)"
        : "invert(0%)";
});
