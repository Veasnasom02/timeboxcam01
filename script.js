document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".task-done");
  const summaryList = document.getElementById("summary-list");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      updateSummary();
    });
  });

  function updateSummary() {
    summaryList.innerHTML = "";
    checkboxes.forEach((checkbox) => {
      const taskIndex = checkbox.getAttribute("data-task");
      const taskInput = document.getElementById(`task-${taskIndex}`);
      if (checkbox.checked) {
        const li = document.createElement("li");
        li.textContent = `${taskInput.value} - Completed`;
        li.classList.add("completed-task");
        summaryList.appendChild(li);
      }
    });
  }
});

function changeLanguage() {
  const lang = document.getElementById("language").value;
  const title = document.getElementById("title");
  const dateLabel = document.getElementById("date-label");
  const topPrioritiesTitle = document.getElementById("top-priorities-title");
  const brainDumpTitle = document.getElementById("brain-dump-title");
  const summaryTitle = document.getElementById("summary-title");

  if (lang === "km") {
    title.textContent = "កម្រាលពេលវេលាថ្ងៃរៀបចំ";
    dateLabel.textContent = "ថ្ងៃ៖";
    topPrioritiesTitle.textContent = "អាទិភាពខ្ពស់៖";
    brainDumpTitle.textContent = "ការសន្សំបញ្ញើ";
    summaryTitle.textContent = "សង្ខេបនៃភារកិច្ច៖";
  } else {
    title.textContent = "DAILY TIMEBOXING PLANNER";
    dateLabel.textContent = "DATE:";
    topPrioritiesTitle.textContent = "TOP PRIORITIES:";
    brainDumpTitle.textContent = "BRAIN DUMP";
    summaryTitle.textContent = "SUMMARY OF TASKS:";
  }
}
