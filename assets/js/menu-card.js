document.addEventListener('DOMContentLoaded', (event) => {
    let targetCard = document.querySelector("#targetCard");
    let selected   = targetCard.dataset.selected;
    let unselected = targetCard.dataset.unselected;
    console.log(targetCard.dataset);

    document.querySelectorAll(".cardMenu").forEach((element) => {

        element.addEventListener("click", (event) => {
            let old = document.querySelector("."+selected);
            if (old != null) {
                old.classList.remove(selected);
                old.classList.add(unselected);
                document.querySelector("#" + old.dataset.target).classList.add("d-none");
            }

            targetCard.classList.remove("d-none");

            element.classList.add(selected);
            element.classList.remove(unselected);
            let target = document.querySelector("#" + element.dataset.target);
            target.classList.remove("d-none");
            target.animate(
                [
                    // étapes/keyframes
                    { transform: "translateY(-100%)"   },
                    { transform: "translateY(0px)" },
                ],
                {
                    // temporisation
                    duration: 1000,
                    iterations: 1,
                },
            );
        });
    });
});