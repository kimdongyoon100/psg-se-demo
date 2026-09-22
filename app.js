"use strict";

const examplesRoot = document.querySelector("#examples");

function audioCard(item) {
  const card = document.createElement("div");
  card.className = `audio-card ${item.key === "darcse" ? "darcse" : ""} ${item.key === "clean" ? "reference" : ""}`;

  const title = document.createElement("div");
  title.className = "card-title";
  title.textContent = item.label;

  const spectrogram = document.createElement("img");
  spectrogram.className = "spectrogram";
  spectrogram.src = item.spectrogram;
  spectrogram.alt = `${item.label} log-magnitude spectrogram`;
  spectrogram.loading = "lazy";

  const player = document.createElement("audio");
  player.controls = true;
  player.preload = "none";
  player.src = item.audio;
  player.setAttribute("aria-label", `${item.label} audio`);

  card.append(title, spectrogram, player);
  return card;
}

function sampleSection(example) {
  const section = document.createElement("article");
  section.className = "sample";

  const heading = document.createElement("h2");
  heading.textContent = `${example.dataset_label} — Example ${example.rank}`;
  const grid = document.createElement("div");
  grid.className = "audio-grid";
  example.items.forEach((item) => grid.append(audioCard(item)));
  section.append(heading, grid);
  return section;
}

fetch("manifest.json")
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((manifest) => {
    examplesRoot.replaceChildren(...manifest.examples.map(sampleSection));
  })
  .catch((error) => {
    examplesRoot.innerHTML = `<p class="loading">Failed to load the demo: ${error.message}</p>`;
  });
