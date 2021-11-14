const question = document.createElement("div");
question.id = "question";
document.body.appendChild(question);
const input = document.createElement("input");
input.setAttribute("type", "text");
input.id = "input";
question.appendChild(input);
const inputButton = document.createElement("input");
inputButton.setAttribute("type", "button");
inputButton.setAttribute("value", "get answer");
inputButton.addEventListener("click", calculate);
inputButton.id = "calculate-button";
question.appendChild(inputButton);
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
document.body.appendChild(wrapper);
const ballContainer = document.createElement("div");
ballContainer.id = "ball-container";
wrapper.appendChild(ballContainer);
const ball = document.createElement("div");
ball.id = "ball";
ballContainer.appendChild(ball);
const output = document.createElement("div");
output.id = "output";
ball.appendChild(output);
const luck = ["#0e6b0e", "#ffcc00", "#aa0114"];
var luckLevel;
function getAnswer() 
{
	const answers = [
					[
						"It is certain",
						"It is decidedly so",
						"Without a doubt",
						"Yes definitely",
						"You may rely on it",
						"As I see it, yes",
						"Most likely",
						"Outlook good",
						"Yes",
						"Signs point to yes"
					], 
					[
						"Reply hazy, try again",
						"Ask again later",
						"Better not tell you now",
						"Cannot predict now",
						"Concentrate and ask again"
					],
					[
						"Don't count on it",
						"My reply is no",
						"My sources say no",
						"Outlook not so good",
						"Very doubtful"
					]
	];
	luckLevel = Math.floor(Math.random() * 3);
	let phraseIndex = luckLevel == 0 ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * 5);
	return answers[luckLevel][phraseIndex];
}
function animation() 
{
	document.getElementById("ball").animate([
		{ transform: "rotate(0deg)" },
		{ transform: "translate(1%, 1%)" },
		{ transform: "translate(-1%, -2%)" },
		{ transform: "translate(-3%, 0%)" },
		{ transform: "translate(1%, -2%)" },
		{ transform: "translate(1%, -1%)" }
	], {
		duration: 300,
		iterations: 3
	});
}
function calculate() 
{
	output.innerHTML = input.value != "" && input.value.slice(-1) == '?' ? getAnswer() : "it's not a question";
	animation();
	output.style.backgroundColor = luck[luckLevel];
}