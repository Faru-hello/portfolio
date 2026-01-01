const projects = [
    {
        title: "Personal Portfolio Website",
        desc: "Responsive portfolio website built using HTML, CSS, and JavaScript, deployed on Netlify to showcase skills, projects, and publications."
    },
    {
        title: "University & Faculty Feedback System (In Progress)",
        desc: "Full-stack web application under development to allow students to submit anonymous feedback and help authorities identify areas for improvement."
    },
    {
        title: "Data Science Web App (Streamlit)",
        desc: "Interactive Streamlit-based web application for data analysis and visualization, deployed online for demonstration purposes."
    },
    {
        title: "Research Publication (IEEE Conference)",
        desc: "Explainable Machine-Learning framework for predicting delivery delays and risk in smart supply chains, published in an IEEE international conference."
    }
];

const projectList = document.getElementById("project-list");

projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
    projectList.appendChild(div);
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("form-status").innerText =
        "Message sent successfully. Thank you for reaching out!";
});
