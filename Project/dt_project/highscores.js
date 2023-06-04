const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


if (highScores.length > 0) 
{
  highScores.forEach((score, index) => {
    const li = document.createElement("li");
    li.innerText = `${score.name} - ${score.score}`;
    
    if (index === 0) 
    {
      const medal = document.createElement("div");
      medal.classList.add("medal");
      medal.style.backgroundImage = "url('gold-medal.png')";
      li.insertBefore(medal, li.firstChild);
    } 
    else if (index === 1) 
    {
      const medal = document.createElement("div");
      medal.classList.add("medal");
      medal.style.backgroundImage = "url('silver-medal.png')";
      li.insertBefore(medal, li.firstChild);
    } 
    else if (index === 2) 
    {
      const medal = document.createElement("div");
      medal.classList.add("medal");
      medal.style.backgroundImage = "url('bronze-medal.png')";
      li.insertBefore(medal, li.firstChild);
    }

    highScoresList.appendChild(li);
  });
}