const projects = [
    {
        title: "LabMov System Update (IFRJ)",
        desc: "Liderança na refatoração da interface C# para análise forense. Implementação de módulos de IA para classificação de pigmentos via CNN.",
        tags: ["C#", ".NET", "IA", "Computer Vision"],
        category: "Backend & Research"
    },
    {
        title: "Valoreco - Sustentabilidade",
        desc: "Desenvolvimento Full Stack de plataforma premiada no Desafio LED. Foco em arquitetura escalável e engajamento de usuários.",
        tags: ["JavaScript", "Node.js", "API Rest", "PostgreSQL"],
        category: "Full Stack"
    },
    {
        title: "Automação Industrial & IoT",
        desc: "Integração de hardware Arduino com sistemas de monitoramento em tempo real para coleta de dados de sensores de carga.",
        tags: ["C++", "Arduino", "IoT", "Data Acquisition"],
        category: "Hardware/Software"
    }
];

const certifications = [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
    { name: "AWS re/Start with AI", issuer: "Escola da Nuvem" },
    { name: "Systems Analysis and Development", issuer: "FAETERJ / Estácio" }
];

function init() {
    // Renderizar Projetos
    const grid = document.getElementById('project-grid');
    grid.innerHTML = projects.map(p => `
        <div class="card">
            <small class="category-label">${p.category}</small>
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="tech-tags">
                ${p.tags.map(tag => `<span>#${tag}</span>`).join(' ')}
            </div>
        </div>
    `).join('');

    // Renderizar Certificações
    const certList = document.getElementById('cert-list');
    certList.innerHTML = certifications.map(c => `
        <div class="cert-item">
            <strong>${c.name}</strong> — <small>${c.issuer}</small>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', init);