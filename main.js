// Get the filter form and job listings
const filterForm = document.querySelector("form");
const jobList = document.querySelector(".job-list ul");
const jobItems = jobList.querySelectorAll("li");
const availableJobsContainer = document.querySelector('.available-jobs')

fetch('mockdata.json')
    .then(response => response.json())
    .then(jobs => {
        jobs.forEach(job => {
          const jobElement = document.createElement('div');
          jobElement.innerHTML ='
            <h3>"${job.title}"</h3>
            <><p>"${job.company}"</p><p>"${job.location}"</p><p>"${job.description}"</p><a href="${job.apply_url}">Apply Now</a></>  
          availableJobsContainer.appendChild(jobElement);   
        });
    });




// Listen for form submit event
filterForm.addEventListener("submit", event => {
  event.preventDefault();

  // Get the selected job type and location
  const jobType = document.querySelector("#job-type-filter").value;
  const location = document.querySelector("#location-filter").value.toLowerCase();

  // Filter the jobs
  filterJobs(jobType, location);
});

function filterJobs(jobType, location) {
  // Loop through the job items
  for (let i = 0; i < jobItems.length; i++) {
    const item = jobItems[i];
    const itemJobType = item.dataset.jobType;
    const itemLocation = item.dataset.location.toLowerCase();

    // Check if the job type and location match the selected options
    if (
      (jobType === "all" || itemJobType === jobType) &&
      (location === "" || itemLocation.includes(location))
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
}
