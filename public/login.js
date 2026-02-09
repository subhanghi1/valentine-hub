function handleLogin() {
  const name = document
    .getElementById("nameInput")
    .value
    .trim()
    .toLowerCase();

  const error = document.getElementById("error");

  if (name === "bubu" || name === "bhainsu" || name === "cutu" || name === "baby" || name === "jaan") {
    window.location.href = "/valentine";
  } else {
    error.innerText =
      "❌ Wrong credential\nHint: type name given by your gf 💕";
  }
}
