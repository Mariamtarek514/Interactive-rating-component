let numbers = document.querySelectorAll("ul li");
let p = document.querySelector(".result .result-p");
let choose = false;
numbers.forEach((li) => {
    li.addEventListener("click", (e) => {
        toggleClass(e);
        choose = true;
        p.innerHTML = `You selected ${e.target.dataset.rank} out of 5`;
    });
});

function toggleClass(element) {
    document.querySelectorAll(".li-click").forEach((e) => {
        e.classList.remove("li-click");
    });
    element.target.classList.add("li-click");
}
let submit = document.querySelector(".submit-btn");
let result = document.querySelector(".result");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (choose === true) {
        result.style.display = "block";
    }
});
