window.addEventListener("DOMContentLoaded", () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    window.location.href = "index.html";
  }
});
