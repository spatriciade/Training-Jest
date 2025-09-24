window.addEventListener("load", () => {
  let members = ["Patricia", "Silvia", "Luis", "Helena", "Lucia", "Carmen"];
  let title = document.querySelector("#greet");
  let usersList = document.querySelector("#members ul");
  //   console.log(usersList);
  let day = "friday";
  if (day == "friday" || day == "saturday" || day == "sunday") {
    // console.log("Hello weekend");
    title.textContent = "Hello weekend";
  } else {
    title.textContent = "Time to work";
    // console.log("Time to work");
  }
  members.forEach((member) => {
    //create a node (new DOM element)
    let item = document.createElement("li");
    console.log(item);
    item.innerHTML = `<span>Hello ${member}</span>`;
    usersList.appendChild(item);
  });
});
