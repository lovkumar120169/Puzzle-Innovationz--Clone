function toggleCourse(courseId, id) {
    const headings = document.querySelectorAll(".items-div>h2");
    headings.forEach(heading => {
        heading.style.fontSize = "25px";
        heading.style.color = "#67706f"
    });

    const head = document.getElementById(id);
    head.style.fontSize = "30px";
    head.style.color = "blue"

    const courseDiv = document.getElementById(courseId);
    const allCourseDivs = document.querySelectorAll(".course-details");

    const isVisible = courseDiv.style.display === "block";
    
    allCourseDivs.forEach(div => {
        if (div !== courseDiv) {
            div.style.display = "none";
        }
    });

    if (!isVisible) {
        courseDiv.style.display = "block";
    }
}