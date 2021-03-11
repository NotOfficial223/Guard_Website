function inviteRedirect() {
  window.location.href =
    "https://discord.com/api/oauth2/authorize?client_id=810777004827344916&permissions=8&scope=bot";
}

function supportRedirect() {
  window.location.href = "https://discord.gg/GvTH3vzJ";
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  const x = document.getElementById("darkmode");
  if (x.innerHTML === "Dark mode.") {
    x.innerHTML = "Light mode.";
  } else {
    x.innerHTML = "Dark mode.";
  }
}
