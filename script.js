const projects = [
    {
        title: "Bone Fracture Classification",
        desc: "Deep learning medical image classification with CNN models."
    },
    {
        title: "Fake News Detection",
        desc: "ML-based NLP system focusing on bias and adversarial robustness."
    },
    {
        title: "Smart Attendance System",
        desc: "Biometric attendance system using ML & image processing."
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
        "Message sent successfully (backend simulated).";
});
