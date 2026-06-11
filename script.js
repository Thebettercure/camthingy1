const video = document.getElementById("video");
const startBtn = document.getElementById("startBtn");
const toggleBtn = document.getElementById("toggleBtn");

let inverted = true;

startBtn.addEventListener("click", async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: {
                    exact: "environment"
                }
            },
            audio: false
        });

        video.srcObject = stream;
    } catch (err) {
        alert(
            "Back camera could not be accessed. Your browser may not support selecting it."
        );
    }
});

toggleBtn.addEventListener("click", () => {
    inverted = !inverted;

    video.style.filter = inverted
        ? "invert(100%)"
        : "invert(0%)";
});
