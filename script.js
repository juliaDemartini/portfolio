/* =====================================================
   TEMA
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeIcon.textContent = "☀";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    themeIcon.textContent =
        isLight ? "☀" : "☾";

});



/* =====================================================
   IDIOMA
===================================================== */

const languageToggle =
    document.getElementById("languageToggle");

const languageCurrent =
    document.getElementById("languageCurrent");


let currentLanguage =
    localStorage.getItem("language") || "pt";


function updateLanguage() {

    document
        .querySelectorAll("[data-pt][data-en]")
        .forEach(element => {

            element.textContent =
                element.dataset[currentLanguage];

        });


    languageCurrent.textContent =
        currentLanguage.toUpperCase();

}


updateLanguage();


languageToggle.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "pt"
            ? "en"
            : "pt";

    localStorage.setItem(
        "language",
        currentLanguage
    );

    updateLanguage();

});



/* =====================================================
   PROJETOS
===================================================== */

const projects = {


    /* =================================================
       DNA
    ================================================= */

    dna: {

        number: "01",

        category:
            "FULL STACK · E-COMMERCE",

        title:
            "DNA Jeanswear",

        description:
            "E-commerce de jeanswear pensado para unir experiência digital, identidade visual e recursos tecnológicos.",

        mainImage:
            "assets/projects/dna-cover.jpg",

        gallery: [

            "assets/projects/dna-01.jpg",

            "assets/projects/dna-02.jpg",

            "assets/projects/dna-03.jpg"

        ],

        architecture:
            "assets/projects/dna-architecture.jpg",

        problem:
            "Aqui você poderá explicar o problema que identificou, o contexto do projeto e por que a solução foi necessária.",

        objective:
            "Construir uma experiência de e-commerce moderna, funcional e preparada para incorporar recursos de personalização e tecnologia.",

        features: [

            "Catálogo de produtos",

            "Página detalhada de produto",

            "Seleção de variações",

            "Experiência responsiva",

            "Provador virtual",

            "Arquitetura preparada para evolução",

            "Integração com API"

        ],

        requirements: [

            {
                title: "Funcional",
                text: "O sistema deve permitir navegação e visualização dos produtos."
            },

            {
                title: "Responsivo",
                text: "A interface deve funcionar em diferentes tamanhos de tela."
            },

            {
                title: "Performance",
                text: "A aplicação deve manter boa experiência durante a navegação."
            },

            {
                title: "Usabilidade",
                text: "As ações principais devem ser facilmente identificáveis."
            }

        ],

        challenges:
            "Descreva aqui as decisões técnicas, problemas encontrados e como você resolveu cada um deles.",

        learning:
            "Descreva o que você aprendeu tecnicamente, quais decisões mudaram sua forma de desenvolver e quais conceitos conseguiu aplicar.",

        technologies: [

            "devicon-csharp-plain",

            "devicon-react-original",

            "devicon-javascript-plain",

            "devicon-typescript-plain",

            "devicon-amazonwebservices-plain-wordmark"

        ],

        type:
            "Full Stack",

        status:
            "Em desenvolvimento",

        github:
            "https://github.com/juliaDemartini",

        demo:
            "#"

    },


    /* =================================================
       VALORECO
    ================================================= */

    valoreco: {

        number: "02",

        category:
            "HARDWARE · SOFTWARE · AUTOMATION",

        title:
            "ValorEco",

        description:
            "Sistema de incentivo à reciclagem integrando software, hardware e automação.",

        mainImage:
            "assets/projects/valoreco-cover.jpg",

        gallery: [

            "assets/projects/valoreco-01.jpg",

            "assets/projects/valoreco-02.jpg",

            "assets/projects/valoreco-03.jpg"

        ],

        architecture:
            "assets/projects/valoreco-architecture.jpg",

        problem:
            "Descreva aqui o problema ambiental ou de experiência que o projeto buscou solucionar.",

        objective:
            "Criar uma solução tecnológica capaz de conectar descarte, automação e incentivo ao usuário.",

        features: [

            "Identificação do descarte",

            "Sensores",

            "Automação",

            "Sistema de pontuação",

            "Integração hardware/software"

        ],

        requirements: [

            {
                title: "Hardware",
                text: "Integração com sensores e microcontrolador."
            },

            {
                title: "Automação",
                text: "Execução automática das etapas do processo."
            },

            {
                title: "Interface",
                text: "Apresentação das informações para o usuário."
            },

            {
                title: "Confiabilidade",
                text: "Funcionamento consistente durante a operação."
            }

        ],

        challenges:
            "Documente aqui os desafios encontrados na integração entre hardware e software.",

        learning:
            "Descreva os principais conhecimentos adquiridos durante o desenvolvimento.",

        technologies: [

            "devicon-arduino-plain",

            "devicon-javascript-plain",

            "devicon-react-original"

        ],

        type:
            "Hardware + Software",

        status:
            "Concluído",

        github:
            "https://github.com/juliaDemartini",

        demo:
            "#"

    },


    /* =================================================
       FOOD EXPRESS
    ================================================= */

    foodexpress: {

        number: "03",

        category:
            "WEB DEVELOPMENT",

        title:
            "FoodExpress",

        description:
            "Aplicação web desenvolvida para explorar conceitos de desenvolvimento full stack e experiência de usuário.",

        mainImage:
            "assets/projects/foodexpress-cover.jpg",

        gallery: [

            "assets/projects/foodexpress-01.jpg",

            "assets/projects/foodexpress-02.jpg",

            "assets/projects/foodexpress-03.jpg"

        ],

        architecture:
            "assets/projects/foodexpress-architecture.jpg",

        problem:
            "Descreva o problema e contexto que deram origem à aplicação.",

        objective:
            "Construir uma aplicação funcional aplicando conceitos de interface, lógica e organização de código.",

        features: [

            "Interface responsiva",

            "Navegação entre páginas",

            "Componentização",

            "Interações de usuário",

            "Organização de dados"

        ],

        requirements: [

            {
                title: "Interface",
                text: "Experiência intuitiva e responsiva."
            },

            {
                title: "Código",
                text: "Estrutura organizada e reutilizável."
            },

            {
                title: "Responsividade",
                text: "Adaptação para diferentes dispositivos."
            },

            {
                title: "Usabilidade",
                text: "Fluxos simples e claros."
            }

        ],

        challenges:
            "Documente aqui os principais desafios de desenvolvimento.",

        learning:
            "Documente aqui os aprendizados técnicos e de processo.",

        technologies: [

            "devicon-html5-plain",

            "devicon-css3-plain",

            "devicon-javascript-plain"

        ],

        type:
            "Web",

        status:
            "Concluído",

        github:
            "https://github.com/juliaDemartini",

        demo:
            "#"

    }

};



/* =====================================================
   ELEMENTOS DO MODAL
===================================================== */

const modal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalNumber =
    document.getElementById("modalNumber");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalMainImage =
    document.getElementById("modalMainImage");

const modalProblem =
    document.getElementById("modalProblem");

const modalObjective =
    document.getElementById("modalObjective");

const modalFeatures =
    document.getElementById("modalFeatures");

const modalRequirements =
    document.getElementById("modalRequirements");

const modalArchitecture =
    document.getElementById("modalArchitecture");

const modalChallenges =
    document.getElementById("modalChallenges");

const modalLearning =
    document.getElementById("modalLearning");

const modalTech =
    document.getElementById("modalTech");

const modalType =
    document.getElementById("modalType");

const modalStatus =
    document.getElementById("modalStatus");

const modalGithub =
    document.getElementById("modalGithub");

const modalDemo =
    document.getElementById("modalDemo");



/* =====================================================
   ABRIR PROJETO
===================================================== */

function openProject(projectId) {

    const project =
        projects[projectId];

    if (!project) return;


    modalNumber.textContent =
        project.number;

    modalCategory.textContent =
        project.category;

    modalTitle.textContent =
        project.title;

    modalDescription.textContent =
        project.description;

    modalProblem.textContent =
        project.problem;

    modalObjective.textContent =
        project.objective;

    modalChallenges.textContent =
        project.challenges;

    modalLearning.textContent =
        project.learning;

    modalType.textContent =
        project.type;

    modalStatus.textContent =
        project.status;

    modalGithub.href =
        project.github;

    modalDemo.href =
        project.demo;


    /* IMAGEM PRINCIPAL */

    modalMainImage.src =
        project.mainImage;

    modalMainImage.alt =
        project.title;


    /* ARQUITETURA */

    modalArchitecture.src =
        project.architecture;


    /* FUNCIONALIDADES */

    modalFeatures.innerHTML = "";

    project.features.forEach(feature => {

        const li =
            document.createElement("li");

        li.textContent =
            feature;

        modalFeatures.appendChild(li);

    });


    /* REQUISITOS */

    modalRequirements.innerHTML = "";

    project.requirements.forEach(requirement => {

        const div =
            document.createElement("div");

        div.className =
            "requirement";

        div.innerHTML = `

            <strong>
                ${requirement.title}
            </strong>

            <span>
                ${requirement.text}
            </span>

        `;

        modalRequirements.appendChild(div);

    });


    /* TECNOLOGIAS */

    modalTech.innerHTML = "";

    project.technologies.forEach(icon => {

        const element =
            document.createElement("i");

        element.className =
            icon;

        modalTech.appendChild(element);

    });


    /* GALERIA */

    const thumbnailButtons =
        document.querySelectorAll(
            ".gallery-thumbnails button"
        );


    thumbnailButtons.forEach(
        (button, index) => {

            if (project.gallery[index]) {

                const img =
                    button.querySelector("img");

                img.src =
                    project.gallery[index];

                img.alt =
                    project.title;

                button.onclick = () => {

                    modalMainImage.src =
                        project.gallery[index];

                };

            }

        }
    );


    /* ABRIR */

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}



/* =====================================================
   FECHAR
===================================================== */

function closeProject() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeProject
);


document
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeProject
    );


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeProject();

        }

    }
);



/* =====================================================
   CARDS
===================================================== */

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            event => {

                /*
                 Evita abrir duas vezes quando
                 o clique acontecer no botão.
                */

                event.stopPropagation();

                const projectId =
                    card.dataset.project;

                openProject(projectId);

            }
        );

    });