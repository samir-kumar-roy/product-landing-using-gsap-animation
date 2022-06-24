const tl = gsap.timeline({
    ease: "power2.out"
});
const colors = document.querySelectorAll(".color");
// animations for header elements
tl.fromTo(".cart", { x: -40 }, { x: 0, duration: 1.5, delay: .5 });
tl.fromTo(".logo", { y: -20 }, { y: 0, duration: 1 }, "-=1.5");
// animations for hero elements
tl.fromTo(".box", { x: 0 }, { x: "100%", duration: 2 }, "-=2.5")
tl.fromTo(".box2", { x: "-50%" }, { x: "-100%", duration: 2 }, "-=2.5");


for (const color of colors) {
    color.addEventListener("click", (e) => {
        const selectColor = e.target.value;
        document.querySelector(".color-value").textContent = selectColor;
        if (selectColor == "black") {
            console.log("black");

            tl.fromTo(".box2", { x: "-100%" }, { x: "-50%", backgroundColor: "#000000", duration: 1 });

            document.querySelector(".phone-img").src = "galaxy-black.webp";
        }
        if (selectColor == "burgundy") {
            console.log("burgundy");
            tl.fromTo(".box2", { x: "-100%" }, { x: "-50%", backgroundColor: "#800020", duration: 1 });
            document.querySelector(".phone-img").src = "galaxy-burgundy.webp";
        }
        if (selectColor == "green") {
            console.log("green");
            tl.fromTo(".box2", { x: "-100%" }, { x: "-50%", backgroundColor: "#00FF00", duration: 1 });
            document.querySelector(".phone-img").src = "galaxy_green.webp";
            // document.querySelector(".box2").style.backgroundColor = selectColor;
        }
        document.querySelector(".logo").style.color = "white";
        document.querySelector(".hero-content h2").style.color = "white";
        document.querySelector(".hero-content p").style.color = "white";
        document.querySelector(".btn").style.backgroundColor = "white";
        document.querySelector(".btn").style.color = "black";


    })
}
