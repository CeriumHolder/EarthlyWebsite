const SERVER_IP = "play.earthlymc.org";

async function copyServerIp(button) {
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(SERVER_IP);
    const original = button.innerHTML;
    button.textContent = "COPIED";
    if (status) status.textContent = "Server IP copied.";
    setTimeout(() => {
      button.innerHTML = original;
      if (status) status.textContent = "";
    }, 1500);
  } catch {
    if (status) status.textContent = SERVER_IP;
  }
}

["copy-ip", "nav-copy-ip", "wide-copy-ip", "footer-copy-ip"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("click", function () { copyServerIp(this); });
});
