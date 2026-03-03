document.addEventListener("DOMContentLoaded", function () {

    const projects = [
        {
            title: "Waste Classification System (Capstone Project)",
            desc: "Developed a deep learning-based waste image classification system using CNN architectures. Built and deployed an interactive Streamlit web application for real-time prediction."
        },
        {
            title: "Explainable ML for Supply Chain Risk Prediction",
            desc: "Designed a machine learning framework to predict delivery delays and risks. Applied Explainable AI techniques for interpretability. Published in IEEE QPAIN 2025."
        }
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(p => {
        const div = document.createElement("div");
        div.className = "project";
        div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p>`;
        projectList.appendChild(div);
    });

    // Scroll button
    document.getElementById("viewWorkBtn").addEventListener("click", function () {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    });

    // Mobile menu toggle
    document.getElementById("menuBtn").addEventListener("click", function () {
        document.getElementById("navLinks").classList.toggle("show");
    });

    // Contact form
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("form-status").innerText =
            "Thanks! I’ll get back to you soon.";
    });

});
