//const medal = document.createElement('img');
//medal.setAttribute('src', 'gold-medal.png');
//medal.setAttribute('alt', 'Gold Medal');
//medal.setAttribute('class', 'medal hidden');
document.body.appendChild(medal);

const showMedal = () => {
  medal.classList.remove('hidden');
};

const hideMedal = () => {
  medal.classList.add('hidden');
};

const checkBadges = () => {
  const mostRecentScore = localStorage.getItem('mostRecentScore');
  if (mostRecentScore >= MAX_QUESTIONS * CORRECT_BONUS) {
    showMedal();
  } else {
    hideMedal();
  }
};

checkBadges();