<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Set Wei API Key</title>
  <style>
    body { font-family: sans-serif; background: #111; color: #eee; padding: 2rem; }
    input, button { font-size: 1rem; padding: 0.5rem; margin-top: 1rem; width: 100%; }
  </style>
</head>
<body>
  <h2>🔐 Set Wei API Key</h2>
  <input id="apiKeyInput" type="password" placeholder="Enter API key here..." />
  <button onclick="saveKey()">Save Key</button>
  <p id="status"></p>

  <script>
    function saveKey() {
      const key = document.getElementById("apiKeyInput").value;
      localStorage.setItem("wei_api_key", key);
      document.getElementById("status").textContent = "✅ API key saved locally.";
    }
  </script>
</body>
</html>
