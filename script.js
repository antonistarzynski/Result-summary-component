const reactionHeader = document.querySelector(".reaction");
const reactionScore = document.querySelector(".reaction-score");
const reactionIcon = document.querySelector(".reaction-img")

const memoryHeader = document.querySelector(".memory");
const memoryScore = document.querySelector(".memory-score");
const memoryIcon = document.querySelector(".memory-img")

const verbalHeader = document.querySelector(".verbal");
const verbalScore = document.querySelector(".verbal-score");
const verbalIcon = document.querySelector(".verbal-img")

const visualHeader = document.querySelector(".visual");
const visualScore = document.querySelector(".visual-score");
const visualIcon = document.querySelector(".visual-img")


const getData = async () => {
    try {
        const res = await fetch('./data.json');
        const data = await res.json();
        return data;
    }

    catch (e) {
        console.log(e);
    }
}

addEventListener("DOMContentLoaded", (event) => {
    getData()
        .then((data) => {
            reactionHeader.textContent = data[0].category;
            reactionScore.textContent = data[0].score;
            reactionIcon.src = data[0].icon;

            memoryHeader.textContent = data[1].category;
            memoryScore.textContent = data[1].score;
            memoryIcon.src = data[1].icon;

            verbalHeader.textContent = data[2].category;
            verbalScore.textContent = data[2].score;
            verbalIcon.src = data[2].icon;

            visualHeader.textContent = data[3].category;
            visualScore.textContent = data[3].score;
            visualIcon.src = data[3].icon;
        })
        .catch((err) => {
            console.log(err);
        })
})