async function check(){

	userId = JSON.parse(localStorage.getItem("localID"));
    console.log(jsonData);
}

var userId = 0;
async function validate(){
    
    const response = await fetch("http://localhost/dt_project/users.json");
      const jsonData = await response.json();
      console.log(jsonData);

      jsonData.forEach(function(user){
          if(user.username==document.getElementById("loginUsername").value && user.password==document.getElementById("loginPassword").value){
              userId = user.ID;

            const data = JSON.stringify(userId);
    		localStorage.setItem('localID', data);
          }
      })

    console.log(userId);

    location.href = 'http://localhost/dt_project/';
}

function saveLocalScore(){
	const mostRecentScore = localStorage.getItem('mostRecentScore');

	// initializing a JavaScript object
	const user = {
	  id: JSON.parse(localStorage.getItem("localID")),
	  score: mostRecentScore,
	  date: Date.now(),
	  userID: this.userId,
	};

	// converting the JSON object to a string

	// writing the JSON string content to a file
	localStorage.setItem('highScores', user.id+"|"+user.score+"|"+user.date+"|"+user.userID);

  	console.log("data.json written correctly");
  	location.href = 'http://localhost/dt_project/highscoresPHP.php';
};