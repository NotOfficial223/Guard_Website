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
  if (x.innerHTML === "Turn on dark mode.") {
    x.innerHTML = "Turn on light mode.";
  } else {
    x.innerHTML = "Turn on dark mode.";
  }
}
