document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (!res.ok) {
      document.getElementById("error").textContent = "Credenciais inválidas.";
      return;
    }

    localStorage.setItem("authToken", data.token);
    window.location.href = "posts.html";
  } catch (error) {
    document.getElementById("error").textContent = "Erro na requisição.";
  }
});
