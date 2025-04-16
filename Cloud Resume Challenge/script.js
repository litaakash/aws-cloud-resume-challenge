document.addEventListener("DOMContentLoaded", () => {
  const jobs = document.querySelectorAll(".job");
  const darkToggle = document.getElementById("darkToggle");

  jobs.forEach((job) => {
    job.addEventListener("click", () => {
      const id = job.getAttribute("data-role");
      const detail = document.getElementById(id);
      const arrow = job.querySelector(".arrow");

      const isVisible = !detail.classList.contains("hidden");

      document.querySelectorAll(".details").forEach((el) => el.classList.add("hidden"));
      document.querySelectorAll(".arrow").forEach((el) => el.classList.remove("rotate"));
      document.querySelectorAll(".job").forEach((el) => el.classList.remove("active-job"));

      if (!isVisible) {
        detail.classList.remove("hidden");
        arrow.classList.add("rotate");
        job.classList.add("active-job");
      }
    });
  });

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // ✅ Move the counter code here
  const counter = document.querySelector('.counter-number').textContent = `Views: ${data.views}`;

  async function updateCounter() {
    try {
      let response = await fetch("https://c6wtjcbh2ibdi4oi3m7t36h4jm0twtjq.lambda-url.us-east-1.on.aws/");
      let data = await response.json();

      // Lambda returns stringified JSON in the `body`
      const viewData = JSON.parse(data.body);
      counter.innerHTML = `Views: ${viewData.views}`;
    } catch (err) {
      console.error("Error fetching view count:", err);
      counter.innerHTML = "Views: N/A";
    }
  }

  // Run the counter update when the DOM is loaded
  updateCounter();
});