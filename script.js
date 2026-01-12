const projects = [
    {
        title: "Bone Fracture Classification",
        desc: "Deep learning-based medical image classification using CNN architectures."
    },
    {
        title: "Fake News Detection",
        desc: "NLP system focusing on bias mitigation and adversarial robustness."
    },
    {
        title: "Smart Attendance System",
        desc: "Biometric attendance system using machine learning and image processing."
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

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("form-status").innerText =
        "Thanks! I’ll get back to you soon.";
});
