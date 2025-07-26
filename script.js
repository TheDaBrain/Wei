async function askWei() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("response");
  const apiKey = localStorage.getItem("wei_api_key");

  if (!apiKey) {
    output.textContent = "⚠️ No API key found. Visit /secret.html to set it.";
    return;
  }

  output.textContent = "Thinking...";

  try {
    const response = await fetch("https://api.cerebras.net/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "cerebras/btlm-3b-8k-base",
        messages: [
          { role: "system", content: "You are Wei, a helpful and intelligent assistant created by DaBrain." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 200
      })
    });

    const data = await response.json();
    output.textContent = data?.choices?.[0]?.message?.content || "No response.";
  } catch (err) {
    output.textContent = "❌ Error talking to Wei: " + err.message;
  }
}
