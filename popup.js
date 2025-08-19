document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll("input[name='mode']");
  const singleGroup = document.getElementById("single-option");
  const rangeGroup = document.getElementById("range-option");

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "single") {
        singleGroup.style.display = "block";
        rangeGroup.style.display = "none";
      } else {
        singleGroup.style.display = "none";
        rangeGroup.style.display = "block";
      }
    });
  });

  document.getElementById("tick").addEventListener("click", async () => {
    const modeRadio = document.querySelector("input[name='mode']:checked");
    if (!modeRadio) {
      alert("Vui lòng chọn chế độ tick.");
      return;
    }

    const mode = modeRadio.value;
    const col = parseInt(document.getElementById("column")?.value || 0);
    const from = parseInt(document.getElementById("from")?.value || 0);
    const to = parseInt(document.getElementById("to")?.value || 0);

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: [mode, col, from, to],
      func: (mode, col, from, to) => {
        const radios = Array.from(document.querySelectorAll('input[type="radio"]'));
        const radioPerRow = 5;
        let count = 0;

        for (let i = 2; i < radios.length; i += radioPerRow) {
          if (count >= 21) break;

          let targetCol = 0;
          if (mode === "random") {
            const rangeStart = Math.min(from, to);
            const rangeEnd = Math.max(from, to);
            targetCol = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
          } else {
            targetCol = col;
          }

          const radio = radios[i + targetCol];
          if (radio) {
            radio.scrollIntoView({ behavior: "smooth", block: "center" });
            radio.click();
            count++;
          }
        }
      }
    });
  });
});
