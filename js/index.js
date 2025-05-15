const today = new Date();


const thisYear = today.getFullYear();

const footer = document.createElement('footer');
document.body.appendChild(footer);

const copyright = document.createElement('p');

copyright.innerHTML = `&copy; Elena Sviridova ${thisYear}`;

footer.appendChild(copyright);


const skills = ["JavaScript", "HTML", "CSS", "GitHub"];


const skillsSection = document.getElementById('skills'); 

const skillsList = skillsSection.querySelector('ul');


for (let i = 0; i < skills.length; i++) {
 
  const skill = document.createElement('li');
  
  skill.innerText = skills[i];

  skillsList.appendChild(skill);
}



const messageForm = document.forms["leave_message"];


messageForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

 
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

 
  console.log("Name:", userName);
  console.log("Email:", userEmail);
  console.log("Message:", userMessage);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${userEmail}">${userName}</a>
    <span>: ${userMessage}</span>
  `;
 
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  
  removeButton.addEventListener("click", function() {
    const entry = removeButton.parentNode; 
    entry.remove(); 
  });


  newMessage.appendChild(removeButton);

 
  messageList.appendChild(newMessage);

  messageForm.reset();
});
const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");


messageSection.style.display = "block";

const newMessage = document.createElement("li");
newMessage.innerHTML = `
  <a href="mailto:${usersEmail}">${usersName}</a>
  <span> wrote: ${usersMessage}</span>
`;

const removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";

removeButton.addEventListener("click", function () {
  const entry = removeButton.parentNode;
  entry.remove();

 
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  }
});

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);


messageSection.style.display = "block";

messageForm.reset();

const editButton = document.createElement("button");
editButton.innerText = "edit";
editButton.type = "button";

editButton.addEventListener("click", function () {
  const name = usersName;
  const email = usersEmail;
  const message = usersMessage;

  const currentSpan = newMessage.querySelector("span");
  const newText = prompt("Edit your message:", currentSpan.textContent.replace(" wrote: ", ""));
  
  if (newText !== null && newText.trim() !== "") {
    currentSpan.textContent = ` wrote: ${newText}`;
  }
});
newMessage.appendChild(editButton);

