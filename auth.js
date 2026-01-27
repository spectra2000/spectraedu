function login() {
  const pw = document.getElementById("pw").value;

  // 🔑 ŞİFRE BURADA
  if (pw === "2025spectra") {
    sessionStorage.setItem("auth", "ok");
    window.location.href = "index.html";
  } else {
    document.getElementById("err").innerText = "Hatalı şifre";
  }
}
