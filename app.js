// // ========================================
// // MEDIDOR TEMPORAL DE TOP / LEFT
// // ========================================

// const positionHelper = document.createElement("div");

// positionHelper.style.position = "fixed";
// positionHelper.style.zIndex = "999999";
// positionHelper.style.padding = "7px 10px";
// positionHelper.style.background = "rgba(0, 0, 0, 0.85)";
// positionHelper.style.color = "white";
// positionHelper.style.fontFamily = "monospace";
// positionHelper.style.fontSize = "14px";
// positionHelper.style.borderRadius = "6px";
// positionHelper.style.pointerEvents = "none";

// document.body.appendChild(positionHelper);

// document.addEventListener("mousemove", (event) => {
//   const left = ((event.clientX / window.innerWidth) * 100).toFixed(1);
//   const top = ((event.clientY / window.innerHeight) * 100).toFixed(1);

//   positionHelper.textContent = `left: ${left}% | top: ${top}%`;

//   positionHelper.style.left = `${event.clientX + 15}px`;
//   positionHelper.style.top = `${event.clientY + 15}px`;
// });
