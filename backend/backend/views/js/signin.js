const form = document.getElementById("signin-form");

const login = async (data) => {
  try {
    const response = await fetch("http://localhost:3007/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (err) {
    console.error(err);
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const res = await login({ email: email.value, password: password.value });
  window.location.href = "dashboard.html";
  localStorage.setItem("accessToken", JSON.stringify(res.accessToken));
});
