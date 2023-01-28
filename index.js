let batting = "home"
const runsEl = (batting === "home")?document.querySelector("#score-card__home-team__runs"):document.querySelector("#score-card__guest-team__runs")
const wicketEl = (batting === "home")?document.querySelector("#score-card__home-team__wickets"):document.querySelector("#score-card__guest-team__wickets")
runsEl.textContent = 0
wicketEl.textContent = 0

function incrementRuns(runs){
    runsEl.textContent = (Number)(runsEl.textContent) + (Number)(runs)
}

function wicket(){
    wicketEl.textContent = (Number)(wicketEl.textContent) + 1
}





