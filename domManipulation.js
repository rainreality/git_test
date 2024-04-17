const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey, I'm red!";

container.appendChild(redParagraph);

const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3!";

container.appendChild(blueH3);

const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style", "background-color: pink; border: 1px solid black;");

const headingOne = document.createElement("h1");
headingOne.textContent = "I'm in a div";

const paragraph = document.createElement("p");
paragraph.textContent = "ME TOO!";

pinkDiv.appendChild(headingOne);
pinkDiv.appendChild(paragraph);

container.appendChild(pinkDiv);

const btn = document.querySelector("#btn");
btn.onclick = alertFunction;//() => alert ("Hello World");

const btnListener = document.querySelector("#btnListener");
btnListener.addEventListener("click", alertFunction);

function alertFunction() {
    alert("YAY! Running alertFunction () YOU DID IT!");
}