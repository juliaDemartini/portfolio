/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

    {
        number: "01",

        title: "DNA Jeanswear",

        shortDescription:
            "E-commerce de jeanswear desenvolvido com foco em experiência digital, personalização e tecnologia aplicada ao varejo.",

        image: "",

        technologies: [
            {
                name: "C#",
                icon: "devicon-csharp-plain colored"
            },
            {
                name: ".NET",
                icon: "devicon-dotnetcore-plain colored"
            },
            {
                name: "React",
                icon: "devicon-react-original colored"
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored"
            }
        ],

        github:
            "https://github.com/juliaDemartini",

        site:
            "#",

        description:
            "Projeto de e-commerce de jeanswear pensado para explorar uma experiência de compra mais tecnológica, com foco em identidade visual, usabilidade, arquitetura de software e recursos de personalização.",

        objective:
            "Criar uma experiência digital de compra que conectasse produto, tecnologia e experiência do usuário em uma única aplicação.",

        requirements: [
            "Catálogo de produtos",
            "Página detalhada do produto",
            "Variações de peças",
            "Seleção de tamanho",
            "Carrinho",
            "Experiência responsiva",
            "Integração com API",
            "Estrutura preparada para novas funcionalidades"
        ],

        functionalities: [
            "Visualização de produtos",
            "Seleção de variações",
            "Interface responsiva",
            "Componentização",
            "Comunicação Front-end / Back-end",
            "Estrutura preparada para provador virtual",
            "Arquitetura preparada para chatbot"
        ],

        architecture:
            "A aplicação foi estruturada separando a camada de apresentação da camada de serviços, permitindo que novas funcionalidades sejam adicionadas sem comprometer a estrutura existente.",

        challenges:
            "Um dos principais desafios foi equilibrar uma identidade visual marcante com uma experiência de navegação simples e funcional.",

        images: [
            "",
            "",
            "",
            ""
        ]
    },


    {
        number: "02",

        title: "ValorEco",

        shortDescription:
            "Aplicação voltada à conscientização e incentivo à reciclagem utilizando tecnologia e automação.",

        image: "",

        technologies: [
            {
                name: "Arduino",
                icon: "devicon-arduino-plain colored"
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored"
            },
            {
                name: "HTML",
                icon: "devicon-html5-plain colored"
            },
            {
                name: "CSS",
                icon: "devicon-css3-plain colored"
            }
        ],

        github:
            "https://github.com/juliaDemartini",

        site:
            "#",

        description:
            "Projeto que combina software e hardware para criar uma experiência de incentivo à reciclagem.",

        objective:
            "Explorar como sensores, automação e software podem trabalhar juntos para solucionar um problema do mundo real.",

        requirements: [
            "Integração com sensores",
            "Identificação de interação",
            "Sistema de recompensas",
            "Interface de acompanhamento",
            "Comunicação entre componentes"
        ],

        functionalities: [
            "Detecção através de sensores",
            "Automação",
            "Registro de interações",
            "Feedback ao usuário"
        ],

        architecture:
            "O projeto conecta componentes físicos responsáveis pela coleta de dados com a camada de software responsável pelo processamento e apresentação das informações.",

        challenges:
            "A integração entre hardware e software exigiu testes sucessivos para garantir que os eventos físicos fossem corretamente interpretados pela aplicação.",

        images: [
            "",
            "",
            "",
            ""
        ]
    },


    {
        number: "03",

        title: "FoodExpress",

        shortDescription:
            "Projeto de aplicação voltada à experiência de pedidos e organização de produtos.",

        image: "",

        technologies: [
            {
                name: "React",
                icon: "devicon-react-original colored"
            },
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored"
            },
            {
                name: "CSS",
                icon: "devicon-css3-plain colored"
            }
        ],

        github:
            "https://github.com/juliaDemartini",

        site:
            "#",

        description:
            "Projeto desenvolvido para explorar construção de interfaces, componentes reutilizáveis e experiência de navegação em uma aplicação de pedidos.",

        objective:
            "Criar uma aplicação funcional utilizando conceitos de desenvolvimento de interfaces e organização de componentes.",

        requirements: [
            "Catálogo",
            "Categorias",
            "Detalhes dos itens",
            "Carrinho",
            "Interface responsiva"
        ],

        functionalities: [
            "Navegação por categorias",
            "Visualização de produtos",
            "Adição ao carrinho",
            "Atualização de quantidade",
            "Layout responsivo"
        ],

        architecture:
            "Interface estruturada em componentes reutilizáveis para facilitar manutenção e evolução da aplicação.",

        challenges:
            "Organizar diferentes estados da interface mantendo uma navegação simples e previsível.",

        images: [
            "",
            "",
            "",
            ""
        ]
    },


    {
        number: "04",

        title: "URL Shortened",

        shortDescription:
            "Aplicação para encurtamento e gerenciamento de URLs.",

        image: "",

        technologies: [
            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored"
            },
            {
                name: "Node.js",
                icon: "devicon-nodejs-plain colored"
            },
            {
                name: "PostgreSQL",
                icon: "devicon-postgresql-plain colored"
            }
        ],

        github:
            "https://github.com/juliaDemartini",

        site:
            "#",

        description:
            "Projeto desenvolvido para explorar conceitos de API, persistência de dados, rotas e manipulação de informações.",

        objective:
            "Construir uma aplicação simples, porém estruturada, capaz de receber, processar e armazenar URLs.",

        requirements: [
            "Criação de URLs",
            "Persistência",
            "API",
            "Rotas",
            "Banco de dados"
        ],

        functionalities: [
            "Encurtamento",
            "Consulta",
            "Persistência",
            "Redirecionamento"
        ],

        architecture:
            "Aplicação estruturada utilizando uma API responsável pelas regras de negócio e comunicação com o banco de dados.",

        challenges:
            "Trabalhar com persistência e comunicação entre diferentes camadas da aplicação.",

        images: [
            "",
            "",
            "",
            ""
        ]
    }

];


/* =========================================================
   DOM
========================================================= */

const projectsGrid = document.getElementById("projectsGrid");

const projectModal = document.getElementById("projectModal");

const modalContent = document.getElementById("modalContent");

const modalClose = document.getElementById("modalClose");

const modalOverlay = document.getElementById("modalOverlay");


/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects() {

    projectsGrid.innerHTML = "";

    projects.forEach((project, index) => {

        const card = document.createElement("article");

        card.className = "project-card";

        card.addEventListener("click", () => {
            openProject(index);
        });


        const imageHTML = project.image

            ? `<img src="${project.image}" alt="${project.title}">`

            : `
                <div class="project-image-placeholder">
                    ADICIONE A IMAGEM DO PROJETO
                </div>
            `;


        const techHTML = project.technologies
            .map(tech => `
                <span title="${tech.name}">
                    <i class="${tech.icon}"></i>
                </span>
            `)
            .join("");


        card.innerHTML = `

            <div class="project-image">

                ${imageHTML}

                <span class="project-number">
                    ${project.number}
                </span>

            </div>

            <div class="project-content">

                <div class="project-info">

                    <h3>
                        ${project.title}
                    </h3>

                    <p>
                        ${project.shortDescription}
                    </p>

                    <div class="project-tech">
                        ${techHTML}
                    </div>

                </div>

                <div class="project-open">
                    →
                </div>

            </div>
        `;


        projectsGrid.appendChild(card);

    });

}


/* =========================================================
   OPEN PROJECT
========================================================= */

function openProject(index) {

    const project = projects[index];

    const technologiesHTML = project.technologies
        .map(tech => `
            <span class="modal-tech">

                <i class="${tech.icon}"></i>

                ${tech.name}

            </span>
        `)
        .join("");


    const requirementsHTML = project.requirements
        .map(item => `<li>${item}</li>`)
        .join("");


    const functionalitiesHTML = project.functionalities
        .map(item => `<li>${item}</li>`)
        .join("");


    const imagesHTML = project.images
        .map((image, index) => {

            if (image) {

                return `
                    <div class="modal-image ${index === 0 ? "large" : ""}">
                        <img src="${image}" alt="${project.title} - imagem ${index + 1}">
                    </div>
                `;

            }

            return `
                <div class="modal-image ${index === 0 ? "large" : ""}">
                    ADICIONE A IMAGEM ${index + 1}
                </div>
            `;

        })
        .join("");


    modalContent.innerHTML = `

        <div class="modal-hero">

            <span class="modal-number">
                PROJECT ${project.number}
            </span>

            <h2>
                ${project.title}
            </h2>

        </div>


        <div class="modal-body">

            <p class="modal-project-description">
                ${project.description}
            </p>


            <div class="modal-actions">

                <a
                    href="${project.github}"
                    target="_blank"
                    class="modal-action"
                >
                    GitHub ↗
                </a>

                <a
                    href="${project.site}"
                    target="_blank"
                    class="modal-action"
                >
                    Ver projeto ↗
                </a>

            </div>


            <section class="modal-section">

                <h3>
                    Tecnologias
                </h3>

                <div class="modal-tech-list">

                    ${technologiesHTML}

                </div>

            </section>


            <section class="modal-section">

                <h3>
                    Objetivo
                </h3>

                <p>
                    ${project.objective}
                </p>

            </section>


            <section class="modal-section">

                <h3>
                    Requisitos
                </h3>

                <ul>
                    ${requirementsHTML}
                </ul>

            </section>


            <section class="modal-section">

                <h3>
                    Funcionalidades
                </h3>

                <ul>
                    ${functionalitiesHTML}
                </ul>

            </section>


            <section class="modal-section">

                <h3>
                    Arquitetura & Estrutura
                </h3>

                <p>
                    ${project.architecture}
                </p>

            </section>


            <section class="modal-section">

                <h3>
                    Desafios & Decisões
                </h3>

                <p>
                    ${project.challenges}
                </p>

            </section>


            <section class="modal-section">

                <h3>
                    Imagens do projeto
                </h3>

                <div class="modal-images">

                    ${imagesHTML}

                </div>

            </section>

        </div>
    `;


    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeProject() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

}

modalClose.addEventListener("click", closeProject);

modalOverlay.addEventListener("click", closeProject);

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeProject();
    }

});


/* =========================================================
   HEADER SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const themeToggle = document.getElementById("themeToggle");

const themeIcon = document.getElementById("themeIcon");


const savedTheme = localStorage.getItem("julia-theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeIcon.textContent = "☾";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");


    localStorage.setItem(
        "julia-theme",
        isLight ? "light" : "dark"
    );


    themeIcon.textContent =
        isLight ? "☾" : "☼";

});


/* =========================================================
   LANGUAGE
========================================================= */

const translations = {

    pt: {

        "nav.home": "Início",
        "nav.about": "Sobre",
        "nav.projects": "Projetos",
        "nav.experience": "Experiência",
        "nav.education": "Formação",
        "nav.contact": "Vamos conversar",

        "hero.availability":
            "Aberta a oportunidades em tecnologia",

        "hero.role":
            "Engenharia de Software · Desenvolvedora Full Stack",

        "hero.description":
            "Estudante de Engenharia de Software e Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento, pesquisa, automação e cloud.",

        "hero.projects":
            "Ver projetos",

        "about.title":
            "Construir é a melhor forma de aprender.",

        "about.text1":
            "Sou estudante de Engenharia de Software e Análise e Desenvolvimento de Sistemas. Minha jornada combina desenvolvimento de software, pesquisa, automação, cloud e construção de projetos próprios.",

        "about.text2":
            "Gosto de entender como as coisas funcionam por trás da interface: da modelagem de dados à arquitetura, passando pela experiência do usuário e pela implementação.",

        "about.text3":
            "Atualmente, direciono meus estudos e projetos para desenvolvimento Full Stack, C#, JavaScript, React, arquitetura de software e AWS.",

        "projects.title":
            "Projetos que mostram como eu penso.",

        "projects.intro":
            "Projetos desenvolvidos para transformar ideias em sistemas funcionais, explorando diferentes tecnologias, arquiteturas e problemas.",

        "tech.title":
            "Ferramentas que fazem parte da jornada.",

        "tech.description":
            "Tecnologias utilizadas em projetos, estudos, pesquisa e experiências práticas.",

        "cert.description":
            "Certificação que representa minha base em conceitos fundamentais de cloud, serviços AWS, segurança, arquitetura e modelo de responsabilidade compartilhada.",

        "experience.title":
            "Onde teoria virou prática.",

        "education.title":
            "Formação em construção.",

        "contact.title":
            "Vamos construir alguma coisa?",

        "contact.description":
            "Estou aberta a oportunidades de estágio e experiências que me permitam continuar desenvolvendo software, aprendendo e contribuindo em equipe."
    },


    en: {

        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.contact": "Let's talk",

        "hero.availability":
            "Open to technology opportunities",

        "hero.role":
            "Software Engineering · Full Stack Developer",

        "hero.description":
            "Software Engineering and Systems Development student with experience in development, research, automation and cloud.",

        "hero.projects":
            "View projects",

        "about.title":
            "Building is the best way to learn.",

        "about.text1":
            "I am a Software Engineering and Systems Development student. My journey combines software development, research, automation, cloud and personal projects.",

        "about.text2":
            "I like understanding how things work behind the interface: from data modeling and architecture to user experience and implementation.",

        "about.text3":
            "I am currently focusing my studies and projects on Full Stack development, C#, JavaScript, React, software architecture and AWS.",

        "projects.title":
            "Projects that show how I think.",

        "projects.intro":
            "Projects created to transform ideas into functional systems while exploring different technologies, architectures and problems.",

        "tech.title":
            "Tools that are part of the journey.",

        "tech.description":
            "Technologies used across projects, studies, research and practical experiences.",

        "cert.description":
            "Certification representing my foundation in cloud concepts, AWS services, security, architecture and the shared responsibility model.",

        "experience.title":
            "Where theory became practice.",

        "education.title":
            "A formation still in progress.",

        "contact.title":
            "Let's build something?",

        "contact.description":
            "I am open to internship opportunities and experiences where I can continue developing software, learning and contributing to a team."
    }

};


let currentLanguage =
    localStorage.getItem("julia-language") || "pt";


function applyLanguage(language) {

    const elements =
        document.querySelectorAll("[data-i18n]");


    elements.forEach(element => {

        const key =
            element.getAttribute("data-i18n");

        if (translations[language][key]) {

            element.textContent =
                translations[language][key];

        }

    });


    document.documentElement.lang =
        language === "pt" ? "pt-BR" : "en";


    document.getElementById("languageText")
        .textContent =
        language === "pt" ? "EN" : "PT";


    localStorage.setItem(
        "julia-language",
        language
    );

}


applyLanguage(currentLanguage);


document
    .getElementById("languageToggle")
    .addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "pt"
                ? "en"
                : "pt";

        applyLanguage(currentLanguage);

    });


/* =========================================================
   INITIALIZE
========================================================= */

renderProjects();