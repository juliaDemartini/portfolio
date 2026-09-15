/* =========================================================
   LANGUAGE
========================================================= */

const translations = {

    pt: {

        /* =========================
           NAVIGATION
        ========================= */

        "nav.home": "Início",
        "nav.projects": "Projetos",
        "nav.about": "Sobre",
        "nav.experience": "Experiência",
        "nav.education": "Formação",

        "header.contact": "Vamos conversar",

        /* =========================
           HERO
        ========================= */

        "hero.availability":
            "Aberta a oportunidades em tecnologia",

        "hero.role":
            "Engenharia de Software · Desenvolvedora Full Stack",

        "hero.description":
            "Estudante de Engenharia de Software e Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento, pesquisa, automação e cloud.",

        "hero.projects":
            "Ver projetos",

        /* =========================
           PROJECTS
        ========================= */

        "projects.title":
            "Projetos que transformam ideias em software.",

        "projects.description":
            "Alguns dos projetos que representam minha forma de aprender, construir e resolver problemas.",

        /* =========================
           ABOUT
        ========================= */

        "about.title":
            "Antes do código, existe o problema.",

        "about.p1":
            "Sou estudante de Engenharia de Software e Análise e Desenvolvimento de Sistemas. Minha trajetória combina desenvolvimento de software, pesquisa, automação e computação em nuvem.",

        "about.p2":
            "Gosto de entender como as coisas funcionam, transformar requisitos em soluções e aprender novas tecnologias construindo projetos reais.",

        "about.p3":
            "Atualmente, direciono minha formação para engenharia de software, desenvolvimento full stack, arquitetura e cloud.",

        /* =========================
           STACK
        ========================= */

        "stack.title":
            "Ferramentas que fazem parte da minha jornada.",

        /* =========================
           CERTIFICATION
        ========================= */

        "certification.description":
            "Certificação que representa minha base em computação em nuvem, serviços AWS, segurança, arquitetura e modelo de responsabilidade compartilhada.",

        /* =========================
           EXPERIENCE
        ========================= */

        "experience.title":
            "Experiência além da sala de aula.",

        "experience.description":
            "Contextos diferentes que contribuíram para minha formação técnica e profissional.",

        "experience.job1":
            "Desenvolvedora de Software · Bolsista de Pesquisa",

        "experience.job1a":
            "Desenvolvimento e atualização de interfaces de usuário em C#.",

        "experience.job1b":
            "Implementação de visualização de dados hiperespectrais para investigação científica.",

        "experience.job1c":
            "Refatoração de módulos de UI/UX.",

        "experience.job1d":
            "Automação de fluxos de trabalho internos.",

        "experience.job2":
            "Bolsista de Pesquisa · Robótica Educacional",

        "experience.job2a":
            "Desenvolvimento de protótipo funcional de sistema robótico educacional.",

        "experience.job2b":
            "Programação de microcontroladores Arduino.",

        "experience.job2c":
            "Integração de sensores para automação.",

        "experience.job2d":
            "Documentação e apresentação técnica.",

        "experience.job3":
            "Estagiária",

        "experience.job3a":
            "Gerenciamento e manutenção de bancos de dados institucionais.",

        "experience.job3b":
            "Digitalização e indexação de documentos.",

        "experience.job3c":
            "Atendimento e resolução de problemas.",

        /* =========================
           EDUCATION
        ========================= */

        "education.title":
            "Formação construída em paralelo.",

        /* =========================
           CONTACT
        ========================= */

        "contact.title":
            "Vamos construir algo interessante.",

        "contact.description":
            "Se quiser conhecer melhor meu trabalho, meus projetos ou trocar uma ideia sobre tecnologia, meus canais estão abertos."

    },


    en: {

        /* =========================
           NAVIGATION
        ========================= */

        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.education": "Education",

        "header.contact": "Let's talk",

        /* =========================
           HERO
        ========================= */

        "hero.availability":
            "Open to technology opportunities",

        "hero.role":
            "Software Engineering · Full Stack Developer",

        "hero.description":
            "Software Engineering and Systems Analysis student with experience in software development, research, automation and cloud computing.",

        "hero.projects":
            "View projects",

        /* =========================
           PROJECTS
        ========================= */

        "projects.title":
            "Projects that turn ideas into software.",

        "projects.description":
            "A selection of projects that represent how I learn, build and solve problems.",

        /* =========================
           ABOUT
        ========================= */

        "about.title":
            "Before the code, there is the problem.",

        "about.p1":
            "I am a Software Engineering and Systems Analysis student. My journey combines software development, research, automation and cloud computing.",

        "about.p2":
            "I enjoy understanding how things work, turning requirements into solutions and learning new technologies by building real projects.",

        "about.p3":
            "I am currently focusing my studies on software engineering, full stack development, architecture and cloud.",

        /* =========================
           STACK
        ========================= */

        "stack.title":
            "Tools that are part of my journey.",

        /* =========================
           CERTIFICATION
        ========================= */

        "certification.description":
            "Certification that represents my foundation in cloud computing, AWS services, security, architecture and the shared responsibility model.",

        /* =========================
           EXPERIENCE
        ========================= */

        "experience.title":
            "Experience beyond the classroom.",

        "experience.description":
            "Different contexts that contributed to my technical and professional development.",

        "experience.job1":
            "Software Developer · Research Scholar",

        "experience.job1a":
            "Development and improvement of user interfaces using C#.",

        "experience.job1b":
            "Implementation of hyperspectral data visualization for scientific investigation.",

        "experience.job1c":
            "UI/UX module refactoring.",

        "experience.job1d":
            "Automation of internal workflows.",

        "experience.job2":
            "Research Scholar · Educational Robotics",

        "experience.job2a":
            "Development of a functional educational robotics system prototype.",

        "experience.job2b":
            "Arduino microcontroller programming.",

        "experience.job2c":
            "Sensor integration for automation.",

        "experience.job2d":
            "Technical documentation and presentations.",

        "experience.job3":
            "Intern",

        "experience.job3a":
            "Management and maintenance of institutional databases.",

        "experience.job3b":
            "Document digitization and indexing.",

        "experience.job3c":
            "Customer support and problem solving.",

        /* =========================
           EDUCATION
        ========================= */

        "education.title":
            "Education built in parallel.",

        /* =========================
           CONTACT
        ========================= */

        "contact.title":
            "Let's build something interesting.",

        "contact.description":
            "If you want to learn more about my work, projects or talk about technology, my channels are open."

    }

};


let currentLanguage = "pt";


/* =========================================================
   LANGUAGE UPDATE
========================================================= */

function updateLanguage() {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key = element.dataset.i18n;

            if (
                translations[currentLanguage] &&
                translations[currentLanguage][key]
            ) {

                element.textContent =
                    translations[currentLanguage][key];

            }

        });


    const languageToggle =
        document.getElementById("languageToggle");


    if (!languageToggle) {
        return;
    }


    if (currentLanguage === "pt") {

        languageToggle.innerHTML =
            `<span class="lang-active">PT</span> / EN`;

        document.documentElement.lang = "pt-BR";

    } else {

        languageToggle.innerHTML =
            `PT / <span class="lang-active">EN</span>`;

        document.documentElement.lang = "en";

    }


    /*
        Se o modal estiver aberto, atualiza
        o projeto atualmente selecionado.
    */

    if (
        currentProject &&
        modal &&
        modal.classList.contains("active")
    ) {

        openProject(currentProject);

    }

}


const languageToggle =
    document.getElementById("languageToggle");


if (languageToggle) {

    languageToggle.addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "pt"
                ? "en"
                : "pt";

        updateLanguage();

    });

}


/* =========================================================
   PROJECT DATABASE
========================================================= */

const projects = [

    /* =====================================================
       01 · DNA JEANS
    ===================================================== */

    {

        id: "dna",

        number: "01",

        category: "FULL STACK · E-COMMERCE · 3D",

        title: "DNA Jeans",

        description: {
            pt:
                "Plataforma de e-commerce de jeanswear que combina experiência digital, arquitetura full stack e tecnologia 3D.",

            en:
                "A denim e-commerce platform combining digital experience, full stack architecture and 3D technology."
        },

        icon:
            "fa-solid fa-shirt",

        image:
            "",

        links: [

            {
                label: {
                    pt: "Loja",
                    en: "Store"
                },

                url:
                    "https://loja-dna.vercel.app/",

                icon:
                    "fa-solid fa-store"
            },

            {
                label: {
                    pt: "Frontend",
                    en: "Frontend"
                },

                url:
                    "https://loja-front-end.vercel.app/",

                icon:
                    "fa-solid fa-code"
            },

            {
                label: {
                    pt: "Provador 3D",
                    en: "3D Fitting Room"
                },

                url:
                    "https://provador-virtual-poc.vercel.app/",

                icon:
                    "fa-solid fa-cube"
            },

            {
                label: {
                    pt: "GitHub",
                    en: "GitHub"
                },

                url:
                    "https://github.com/juliaDemartini/loja-dna",

                icon:
                    "fa-brands fa-github"
            }

        ],

        technologies: [

            {
                name: "C#",
                icon: "devicon-csharp-plain colored"
            },

            {
                name: "React",
                icon: "devicon-react-original colored"
            },

            {
                name: "Next.js",
                icon: "devicon-nextjs-plain"
            },

            {
                name: "JavaScript",
                icon: "devicon-javascript-plain colored"
            },

            {
                name: "Three.js",
                icon: "devicon-threejs-original"
            },

            {
                name: "React Three Fiber",
                icon: "devicon-react-original colored"
            },

            {
                name: "SQL",
                icon: "devicon-postgresql-plain colored"
            },

            {
                name: "Supabase",
                icon: "devicon-supabase-plain colored"
            }

        ],

        overview: {

            pt:
                "Plataforma de e-commerce de jeanswear desenvolvida para combinar experiência digital, personalização e tecnologia 3D. O projeto reúne loja virtual, Backoffice administrativo e um provador virtual interativo.",

            en:
                "A denim e-commerce platform developed to combine digital experience, personalization and 3D technology. The project brings together an online store, an administrative backoffice and an interactive virtual fitting room."

        },

        problem: {

            pt:
                "O desafio central foi projetar um e-commerce de moda que resolvesse um dos principais atritos das compras online: a incerteza quanto ao caimento e tamanho da peça. A proposta foi unir uma vitrine digital moderna a uma experiência interativa de Prova Virtual 3D.",

            en:
                "The main challenge was designing a fashion e-commerce experience capable of addressing one of the main pain points of online shopping: uncertainty about fit and sizing. The goal was to combine a modern digital storefront with an interactive 3D virtual fitting experience."

        },

        solution: {

            pt:
                "Desenvolvimento de uma arquitetura full stack desacoplada, conectando o e-commerce, um Backoffice administrativo e um módulo independente de Provador Virtual 3D. Produtos, variantes, tamanhos e medidas são estruturados em banco de dados e utilizados pelas diferentes partes da aplicação.",

            en:
                "Development of a decoupled full stack architecture connecting the e-commerce platform, an administrative backoffice and an independent 3D virtual fitting module. Products, variants, sizes and measurements are structured in a database and shared across different parts of the application."

        },

        challenges: {

            pt: [

                "Integrar uma experiência de visualização 3D a um fluxo de e-commerce.",

                "Trabalhar com modelos tridimensionais em formato .glb e seu carregamento dinâmico.",

                "Conectar frontend, APIs, banco de dados e armazenamento de assets.",

                "Estruturar produtos, variantes, tamanhos e medidas de forma consistente.",

                "Criar um Backoffice capaz de centralizar o gerenciamento das informações dos produtos.",

                "Conciliar complexidade técnica com uma experiência de usuário simples e intuitiva."

            ],

            en: [

                "Integrating a 3D visualization experience into an e-commerce flow.",

                "Working with .glb 3D models and dynamic asset loading.",

                "Connecting the frontend, APIs, database and asset storage.",

                "Structuring products, variants, sizes and measurements consistently.",

                "Building a Backoffice capable of centralizing product management.",

                "Balancing technical complexity with a simple and intuitive user experience."

            ]

        },

        learnings: {

            pt: [

                "Aprofundamento em desenvolvimento Full Stack e separação de responsabilidades entre frontend, backend e banco de dados.",

                "Experiência prática com renderização 3D utilizando Three.js e React Three Fiber.",

                "Aprendizado sobre gerenciamento e carregamento de assets 3D em aplicações web.",

                "Evolução na modelagem de dados relacionais e construção de APIs.",

                "Maior compreensão sobre arquitetura de aplicações e integração entre serviços.",

                "Desenvolvimento de uma visão mais próxima de produto, considerando tecnologia, usabilidade e experiência do usuário."

            ],

            en: [

                "Deeper experience in Full Stack development and separation of responsibilities between frontend, backend and database.",

                "Hands-on experience with 3D rendering using Three.js and React Three Fiber.",

                "Learning about 3D asset management and loading in web applications.",

                "Improved understanding of relational data modeling and API development.",

                "Greater understanding of application architecture and service integration.",

                "A stronger product-oriented mindset, considering technology, usability and user experience."

            ]

        },

        features: {

            pt: [

                "Catálogo de produtos",

                "Variações de produtos",

                "Página detalhada do produto",

                "Backoffice administrativo",

                "CRUD de produtos",

                "Upload de imagens",

                "Variantes de cores",

                "Grades de medidas",

                "Provador virtual 3D",

                "Visualização de modelos .glb",

                "Experiência responsiva",

                "Integração com API"

            ],

            en: [

                "Product catalog",

                "Product variations",

                "Product detail page",

                "Administrative Backoffice",

                "Product CRUD",

                "Image uploads",

                "Color variants",

                "Size measurement tables",

                "3D virtual fitting room",

                ".glb model visualization",

                "Responsive experience",

                "API integration"

            ]

        },

        requirements: {

            pt: [

                "Interface responsiva",

                "Separação entre frontend e backend",

                "Persistência de dados",

                "Organização de componentes",

                "Integração com API",

                "Armazenamento de assets",

                "Validação de dados",

                "Experiência consistente em diferentes dispositivos"

            ],

            en: [

                "Responsive interface",

                "Frontend and backend separation",

                "Data persistence",

                "Component organization",

                "API integration",

                "Asset storage",

                "Data validation",

                "Consistent experience across devices"

            ]

        },

        architecture: {

            pt:
                "Arquitetura full stack desacoplada composta por aplicações frontend, APIs, banco de dados relacional e serviços de armazenamento. O provador 3D funciona como um módulo independente integrado à experiência do e-commerce.",

            en:
                "A decoupled full stack architecture composed of frontend applications, APIs, a relational database and storage services. The 3D fitting room operates as an independent module integrated into the e-commerce experience."

        },

        methods: {

            pt:
                "Desenvolvimento incremental, organização por funcionalidades, testes manuais dos principais fluxos e evolução contínua da interface e da arquitetura.",

            en:
                "Incremental development, feature-based organization, manual testing of the main flows and continuous evolution of the interface and architecture."

        }

    },


    /* =====================================================
       02 · DISPUTA ENERGÉTICA
    ===================================================== */

    {

        id: "disputa-energetica",

        number: "02",

        category: "WEB · DATA · EDUCATION",

        title: "Disputa Energética",

        description: {

            pt:
                "Projeto desenvolvido para explorar dados, interação e visualização de informações relacionadas ao consumo de energia.",

            en:
                "A project focused on data, interaction and visualization of information related to energy consumption."

        },

        icon:
            "fa-solid fa-bolt",

        image:
            "",

        links: [

            {
                label: {
                    pt: "GitHub",
                    en: "GitHub"
                },

                url:
                    "https://github.com/juliaDemartini/DisputaEnergetica",

                icon:
                    "fa-brands fa-github"
            }

        ],

        technologies: [

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

        overview: {

            pt:
                "Aplicação desenvolvida para trabalhar conceitos de visualização, interação e apresentação de informações relacionadas ao consumo energético.",

            en:
                "An application developed to explore concepts of visualization, interaction and presentation of information related to energy consumption."

        },

        problem: {

            pt:
                "Como transformar informações sobre energia em uma experiência digital mais clara, visual e interativa?",

            en:
                "How can energy-related information be transformed into a clearer, more visual and interactive digital experience?"

        },

        solution: {

            pt:
                "A aplicação organiza os dados e interações em uma interface web orientada à compreensão das informações e à participação do usuário.",

            en:
                "The application organizes data and interactions into a web interface focused on information understanding and user participation."

        },

        challenges: {

            pt: [

                "Organizar informações de forma visualmente compreensível.",

                "Transformar dados em elementos de interface fáceis de interpretar.",

                "Criar uma experiência interativa mantendo simplicidade de navegação."

            ],

            en: [

                "Organizing information in a visually understandable way.",

                "Transforming data into easy-to-interpret interface elements.",

                "Creating an interactive experience while keeping navigation simple."

            ]

        },

        learnings: {

            pt: [

                "Aprimoramento da manipulação de dados com JavaScript.",

                "Evolução na construção de interfaces interativas.",

                "Maior atenção à hierarquia visual e apresentação de informações.",

                "Experiência na transformação de conceitos em funcionalidades digitais."

            ],

            en: [

                "Improved data manipulation using JavaScript.",

                "Growth in building interactive interfaces.",

                "Greater attention to visual hierarchy and information presentation.",

                "Experience transforming concepts into digital functionality."

            ]

        },

        features: {

            pt: [

                "Visualização de informações",

                "Interações de usuário",

                "Interface responsiva",

                "Organização de dados"

            ],

            en: [

                "Information visualization",

                "User interactions",

                "Responsive interface",

                "Data organization"

            ]

        },

        requirements: {

            pt: [

                "HTML semântico",

                "CSS responsivo",

                "JavaScript",

                "Interface intuitiva"

            ],

            en: [

                "Semantic HTML",

                "Responsive CSS",

                "JavaScript",

                "Intuitive interface"

            ]

        },

        architecture: {

            pt:
                "Aplicação frontend estruturada em HTML, CSS e JavaScript, com separação entre apresentação, estrutura e lógica de interação.",

            en:
                "Frontend application structured with HTML, CSS and JavaScript, separating presentation, structure and interaction logic."

        },

        methods: {

            pt:
                "Desenvolvimento incremental da interface, implementação das interações e validação dos fluxos de usuário.",

            en:
                "Incremental interface development, interaction implementation and user flow validation."

        }

    },


    /* =====================================================
       03 · URL SHORTENER
    ===================================================== */

    {

        id: "url-shortener",

        number: "03",

        category: "BACKEND · API · FULL STACK",

        title: "URL Shortener",

        description: {

            pt:
                "Serviço de encurtamento de URLs desenvolvido para explorar APIs, persistência de dados e lógica de backend.",

            en:
                "A URL shortening service developed to explore APIs, data persistence and backend logic."

        },

        icon:
            "fa-solid fa-link",

        image:
            "",

        links: [

            {
                label: {
                    pt: "GitHub",
                    en: "GitHub"
                },

                url:
                    "https://github.com/juliaDemartini/UrlShortened",

                icon:
                    "fa-brands fa-github"
            }

        ],

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
                name: "Express",
                icon: "devicon-express-original"
            },

            {
                name: "SQL",
                icon: "devicon-postgresql-plain colored"
            }

        ],

        overview: {

            pt:
                "Projeto desenvolvido para explorar a construção de uma API de encurtamento de URLs, trabalhando conceitos de backend, rotas, persistência e manipulação de dados.",

            en:
                "A project focused on building a URL shortening API while exploring backend concepts, routing, persistence and data manipulation."

        },

        problem: {

            pt:
                "Como criar um serviço capaz de receber URLs, gerar identificadores menores e posteriormente redirecionar o usuário para o endereço original?",

            en:
                "How can a service receive URLs, generate shorter identifiers and later redirect users to the original address?"

        },

        solution: {

            pt:
                "Construção de uma API responsável por receber, processar e armazenar URLs, utilizando identificadores únicos para representar os endereços originais.",

            en:
                "Development of an API responsible for receiving, processing and storing URLs using unique identifiers to represent the original addresses."

        },

        challenges: {

            pt: [

                "Estruturar uma API com responsabilidades bem definidas.",

                "Criar uma lógica consistente para geração e recuperação das URLs.",

                "Persistir os dados corretamente.",

                "Trabalhar com rotas e diferentes respostas HTTP."

            ],

            en: [

                "Structuring an API with clearly defined responsibilities.",

                "Creating consistent URL generation and retrieval logic.",

                "Persisting data correctly.",

                "Working with routes and different HTTP responses."

            ]

        },

        learnings: {

            pt: [

                "Fundamentos de desenvolvimento de APIs REST.",

                "Maior compreensão sobre rotas, requisições e respostas HTTP.",

                "Experiência com persistência de dados.",

                "Evolução na organização de projetos backend.",

                "Compreensão mais prática da comunicação entre cliente e servidor."

            ],

            en: [

                "Fundamentals of REST API development.",

                "Greater understanding of routes, requests and HTTP responses.",

                "Experience with data persistence.",

                "Improved backend project organization.",

                "A more practical understanding of client-server communication."

            ]

        },

        features: {

            pt: [

                "Criação de URLs encurtadas",

                "Redirecionamento",

                "API",

                "Persistência de URLs",

                "Geração de identificadores"

            ],

            en: [

                "Short URL creation",

                "Redirection",

                "API",

                "URL persistence",

                "Identifier generation"

            ]

        },

        requirements: {

            pt: [

                "API REST",

                "Persistência de dados",

                "Validação de entradas",

                "Tratamento de requisições"

            ],

            en: [

                "REST API",

                "Data persistence",

                "Input validation",

                "Request handling"

            ]

        },

        architecture: {

            pt:
                "Aplicação baseada em API responsável pelo processamento das URLs e comunicação com a camada de persistência.",

            en:
                "API-based application responsible for URL processing and communication with the persistence layer."

        },

        methods: {

            pt:
                "Desenvolvimento incremental da API, testes das rotas e validação dos principais fluxos de criação e recuperação.",

            en:
                "Incremental API development, route testing and validation of the main creation and retrieval flows."

        }

    },


    /* =====================================================
       04 · FOOD EXPRESS
    ===================================================== */

    {

        id: "foodexpress",

        number: "04",

        category: "WEB · FULL STACK",

        title: "FoodExpress",

        description: {

            pt:
                "Aplicação web desenvolvida para explorar fluxos de pedidos, catálogo de produtos e experiências digitais.",

            en:
                "A web application developed to explore ordering flows, product catalogs and digital experiences."

        },

        icon:
            "fa-solid fa-burger",

        image:
            "",

        links: [

            {
                label: {
                    pt: "GitHub",
                    en: "GitHub"
                },

                url:
                    "https://github.com/juliaDemartini/FoodExpress",

                icon:
                    "fa-brands fa-github"
            },

            {
                label: {
                    pt: "Frontend",
                    en: "Frontend"
                },

                url:
                    "https://github.com/juliaDemartini/foodexpress-web",

                icon:
                    "fa-solid fa-code"
            }

        ],

        technologies: [

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

        overview: {

            pt:
                "Projeto desenvolvido para explorar a construção de uma experiência digital de pedidos, trabalhando interface, organização de produtos e fluxo de interação.",

            en:
                "A project developed to explore a digital ordering experience, working with interface design, product organization and user flows."

        },

        problem: {

            pt:
                "Como representar de forma simples e intuitiva um fluxo digital de seleção e pedido?",

            en:
                "How can a digital selection and ordering flow be represented in a simple and intuitive way?"

        },

        solution: {

            pt:
                "A aplicação organiza produtos, informações e ações em uma interface responsiva orientada ao fluxo do usuário.",

            en:
                "The application organizes products, information and actions in a responsive interface focused on the user flow."

        },

        challenges: {

            pt: [

                "Estruturar o fluxo de seleção e pedido de forma intuitiva.",

                "Organizar os componentes da interface.",

                "Manter uma experiência consistente em diferentes tamanhos de tela."

            ],

            en: [

                "Structuring the selection and ordering flow intuitively.",

                "Organizing interface components.",

                "Maintaining a consistent experience across different screen sizes."

            ]

        },

        learnings: {

            pt: [

                "Aprofundamento em JavaScript para criação de interações dinâmicas.",

                "Evolução na construção de interfaces responsivas.",

                "Maior atenção à experiência do usuário.",

                "Prática de organização e manutenção de projetos frontend."

            ],

            en: [

                "Deeper experience with JavaScript for dynamic interactions.",

                "Improved responsive interface development.",

                "Greater attention to user experience.",

                "Practice organizing and maintaining frontend projects."

            ]

        },

        features: {

            pt: [

                "Catálogo",

                "Cards de produtos",

                "Interações de usuário",

                "Layout responsivo",

                "Fluxo de pedido"

            ],

            en: [

                "Catalog",

                "Product cards",

                "User interactions",

                "Responsive layout",

                "Ordering flow"

            ]

        },

        requirements: {

            pt: [

                "HTML semântico",

                "CSS responsivo",

                "JavaScript",

                "Boa organização visual"

            ],

            en: [

                "Semantic HTML",

                "Responsive CSS",

                "JavaScript",

                "Good visual organization"

            ]

        },

        architecture: {

            pt:
                "Aplicação web estruturada em HTML, CSS e JavaScript, com separação das responsabilidades de apresentação e interação.",

            en:
                "Web application structured with HTML, CSS and JavaScript, separating presentation and interaction responsibilities."

        },

        methods: {

            pt:
                "Construção incremental da interface e validação dos principais fluxos de interação.",

            en:
                "Incremental interface development and validation of the main interaction flows."

        }

    },


    /* =====================================================
       05 · VALORECO
    ===================================================== */

    {

        id: "valoreco",

        number: "05",

        category: "IOT · AUTOMATION",

        title: "ValorEco",

        description: {

            pt:
                "Sistema inteligente de reciclagem que conecta hardware, automação e tecnologia para incentivar práticas sustentáveis.",

            en:
                "An intelligent recycling system connecting hardware, automation and technology to encourage sustainable practices."

        },

        icon:
            "fa-solid fa-recycle",

        image:
            "",

        links: [

            {
                label: {
                    pt: "GitHub",
                    en: "GitHub"
                },

                url:
                    "https://github.com/juliaDemartini/ValorEco",

                icon:
                    "fa-brands fa-github"
            }

        ],

        technologies: [

            {
                name: "Arduino",
                icon: "devicon-arduino-plain colored"
            },

            {
                name: "C++",
                icon: "devicon-cplusplus-plain colored"
            }

        ],

        overview: {

            pt:
                "Projeto que explora a integração entre software, hardware e automação para incentivar práticas sustentáveis por meio de um sistema inteligente de reciclagem.",

            en:
                "A project exploring the integration of software, hardware and automation to encourage sustainable practices through an intelligent recycling system."

        },

        problem: {

            pt:
                "Como utilizar tecnologia para tornar processos de reciclagem mais interativos e incentivar a participação das pessoas?",

            en:
                "How can technology make recycling processes more interactive and encourage people's participation?"

        },

        solution: {

            pt:
                "O conceito utiliza sensores e automação para identificar interações e associá-las a um sistema de recompensas.",

            en:
                "The concept uses sensors and automation to identify interactions and associate them with a reward system."

        },

        challenges: {

            pt: [

                "Integrar sensores físicos ao sistema.",

                "Projetar a lógica de funcionamento do protótipo.",

                "Testar o comportamento do hardware em diferentes situações.",

                "Estabelecer a comunicação entre os componentes físicos e a lógica do sistema."

            ],

            en: [

                "Integrating physical sensors into the system.",

                "Designing the prototype's operating logic.",

                "Testing hardware behavior under different conditions.",

                "Establishing communication between physical components and system logic."

            ]

        },

        learnings: {

            pt: [

                "Experiência prática com Arduino e programação de microcontroladores.",

                "Compreensão da comunicação entre software e componentes físicos.",

                "Aprendizado sobre prototipação e validação de soluções utilizando hardware.",

                "Desenvolvimento de raciocínio voltado para automação e sistemas embarcados."

            ],

            en: [

                "Hands-on experience with Arduino and microcontroller programming.",

                "Understanding communication between software and physical components.",

                "Learning about prototyping and hardware-based solution validation.",

                "Development of problem-solving skills focused on automation and embedded systems."

            ]

        },

        features: {

            pt: [

                "Sensores",

                "Microcontrolador",

                "Automação",

                "Sistema de recompensa",

                "Integração hardware/software"

            ],

            en: [

                "Sensors",

                "Microcontroller",

                "Automation",

                "Reward system",

                "Hardware/software integration"

            ]

        },

        requirements: {

            pt: [

                "Arduino",

                "Sensores compatíveis",

                "Lógica de controle",

                "Comunicação entre componentes"

            ],

            en: [

                "Arduino",

                "Compatible sensors",

                "Control logic",

                "Component communication"

            ]

        },

        architecture: {

            pt:
                "Sistema baseado em microcontrolador conectado a sensores responsáveis pela captura das interações e execução das ações automatizadas.",

            en:
                "Microcontroller-based system connected to sensors responsible for capturing interactions and executing automated actions."

        },

        methods: {

            pt:
                "Prototipação, experimentação com hardware, testes físicos e desenvolvimento incremental.",

            en:
                "Prototyping, hardware experimentation, physical testing and incremental development."

        }

    },


    /* =====================================================
       06 · MEU SALDO
    ===================================================== */

    {

        id: "meu-saldo",

        number: "06",

        category: "WEB · FINANCE · APPLICATION",

        title: "MeuSaldo",

        description: {

            pt:
                "Aplicação desenvolvida para organização e acompanhamento financeiro pessoal.",

            en:
                "An application developed for personal financial organization and tracking."

        },

        icon:
            "fa-solid fa-wallet",

        image:
            "",

        links: [

            {
                label: {
                    pt: "GitHub",
                    en: "GitHub"
                },

                url:
                    "https://github.com/juliaDemartini/MeuSaldo",

                icon:
                    "fa-brands fa-github"
            }

        ],

        technologies: [

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

        overview: {

            pt:
                "Aplicação criada para explorar organização de informações financeiras, interação com dados e construção de uma experiência digital voltada ao controle pessoal.",

            en:
                "An application created to explore financial information organization, data interaction and the construction of a digital experience focused on personal financial management."

        },

        problem: {

            pt:
                "Como transformar informações financeiras em uma interface simples que facilite o acompanhamento e a organização dos dados?",

            en:
                "How can financial information be transformed into a simple interface that facilitates data tracking and organization?"

        },

        solution: {

            pt:
                "Desenvolvimento de uma aplicação com interface focada na visualização e organização das informações financeiras.",

            en:
                "Development of an application with an interface focused on visualizing and organizing financial information."

        },

        challenges: {

            pt: [

                "Organizar informações financeiras de forma clara.",

                "Criar uma interface intuitiva para diferentes tipos de dados.",

                "Manter consistência visual entre diferentes estados da aplicação."

            ],

            en: [

                "Organizing financial information clearly.",

                "Creating an intuitive interface for different types of data.",

                "Maintaining visual consistency across different application states."

            ]

        },

        learnings: {

            pt: [

                "Evolução na manipulação de dados utilizando JavaScript.",

                "Aprimoramento da organização de interfaces.",

                "Maior atenção à experiência do usuário.",

                "Prática na construção de aplicações orientadas a dados."

            ],

            en: [

                "Improved data manipulation using JavaScript.",

                "Better interface organization.",

                "Greater attention to user experience.",

                "Practice building data-oriented applications."

            ]

        },

        features: {

            pt: [

                "Organização financeira",

                "Visualização de informações",

                "Interações de usuário",

                "Interface responsiva"

            ],

            en: [

                "Financial organization",

                "Information visualization",

                "User interactions",

                "Responsive interface"

            ]

        },

        requirements: {

            pt: [

                "HTML semântico",

                "CSS responsivo",

                "JavaScript",

                "Organização de dados"

            ],

            en: [

                "Semantic HTML",

                "Responsive CSS",

                "JavaScript",

                "Data organization"

            ]

        },

        architecture: {

            pt:
                "Aplicação frontend organizada em estrutura semântica, estilos responsivos e lógica JavaScript para manipulação das informações.",

            en:
                "Frontend application organized with semantic structure, responsive styling and JavaScript logic for data manipulation."

        },

        methods: {

            pt:
                "Desenvolvimento incremental, organização das funcionalidades e validação dos principais fluxos da aplicação.",

            en:
                "Incremental development, feature organization and validation of the application's main flows."

        }

    }

];


/* =========================================================
   PROJECT CARDS
========================================================= */

const projectsGrid =
    document.getElementById("projectsGrid");


function getProjectText(value) {

    if (
        typeof value === "object" &&
        value !== null &&
        value.pt !== undefined
    ) {

        return value[currentLanguage] || value.pt;

    }

    return value || "";

}


function renderProjects() {

    if (!projectsGrid) {
        return;
    }


    projectsGrid.innerHTML = "";


    projects.forEach(project => {

        const card =
            document.createElement("article");


        card.className =
            "project-card";


        let imageContent;


        if (project.image) {

            imageContent = `

                <img
                    src="${project.image}"
                    alt="${project.title}"
                >

            `;

        } else {

            imageContent = `

                <div class="project-image-placeholder">

                    <div class="project-placeholder-content">

                        <i class="${project.icon}"></i>

                        <span>
                            ${currentLanguage === "pt"
                                ? "..."
                                : "..."}
                        </span>

                    </div>

                </div>

            `;

        }


        const technologies =
            project.technologies
                .map(tech => `

                    <span>

                        <i class="${tech.icon}"></i>

                        ${tech.name}

                    </span>

                `)
                .join("");


        card.innerHTML = `

            <div class="project-image">

                ${imageContent}

                <div class="project-number">
                    ${project.number}
                </div>

                <div class="project-open">
                    ↗
                </div>

            </div>


            <div class="project-info">

                <div class="project-category">
                    ${project.category}
                </div>

                <div class="project-info-top">

                    <div>

                        <h3>
                            ${project.title}
                        </h3>

                        <p>
                            ${getProjectText(project.description)}
                        </p>

                    </div>

                </div>


                <div class="project-tech">

                    ${technologies}

                </div>

            </div>

        `;


        card.addEventListener("click", () => {

            openProject(project);

        });


        projectsGrid.appendChild(card);

    });

}


/* =========================================================
   PROJECT MODAL
========================================================= */

const modal =
    document.getElementById("projectModal");


const modalContent =
    document.getElementById("modalContent");


const modalClose =
    document.getElementById("modalClose");


const modalOverlay =
    document.getElementById("modalOverlay");


let currentProject = null;


/* =========================================================
   MODAL TAB STATE
========================================================= */

let currentModalTab = "overview";


/* =========================================================
   OPEN PROJECT
========================================================= */

function openProject(project) {

    if (!modal || !modalContent) {
        return;
    }


    currentProject = project;

    currentModalTab = "overview";


    const technologyHTML =
        project.technologies
            .map(tech => `

                <span>

                    <i class="${tech.icon}"></i>

                    ${tech.name}

                </span>

            `)
            .join("");


    const features =
        getProjectText(project.features);


    const requirements =
        getProjectText(project.requirements);


    const challenges =
        getProjectText(project.challenges);


    const learnings =
        getProjectText(project.learnings);


    const featuresHTML =
        features
            .map(item => `<li>${item}</li>`)
            .join("");


    const requirementsHTML =
        requirements
            .map(item => `<li>${item}</li>`)
            .join("");


    const challengesHTML =
        challenges
            .map(item => `<li>${item}</li>`)
            .join("");


    const learningsHTML =
        learnings
            .map(item => `<li>${item}</li>`)
            .join("");


    /* =====================================================
       GALLERY
    ===================================================== */

    let galleryHTML;


    if (project.image) {

        galleryHTML = `

            <div class="modal-gallery-item large">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                >

            </div>


            <div class="modal-gallery-item">

                <div class="modal-image-placeholder">

                    ${
                        currentLanguage === "pt"
                            ? "..."
                            : "..."
                    }

                </div>

            </div>


            <div class="modal-gallery-item">

                <div class="modal-image-placeholder">

                    ${
                        currentLanguage === "pt"
                            ? "..."
                            : "..."
                    }

                </div>

            </div>

        `;

    } else {

        galleryHTML = `

            <div class="modal-gallery-item large">

                <div class="modal-image-placeholder">

                    <div>

                        <strong>
                            ${
                                currentLanguage === "pt"
                                    ? "..."
                                    : "..."
                            }
                        </strong>

                        <br><br>

                        ${
                            currentLanguage === "pt"
                                ? "Coloque aqui um screenshot principal do projeto."
                                : "Place a main project screenshot here."
                        }

                    </div>

                </div>

            </div>


            <div class="modal-gallery-item">

                <div class="modal-image-placeholder">

                    Screenshot 02

                </div>

            </div>


            <div class="modal-gallery-item">

                <div class="modal-image-placeholder">

                    Screenshot 03

                </div>

            </div>

        `;

    }


    /* =====================================================
       PROJECT LINKS
    ===================================================== */

    const projectLinksHTML =
        project.links
            .map(link => `

                <a
                    href="${link.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="modal-link"
                >

                    <i class="${link.icon}"></i>

                    ${getProjectText(link.label)}

                    ↗

                </a>

            `)
            .join("");


    /* =====================================================
       MODAL HTML
    ===================================================== */

    modalContent.innerHTML = `

        <div class="modal-project-hero">

            <div class="modal-project-category">

                ${project.category}

            </div>


            <h2>
                ${project.title}
            </h2>


            <p>
                ${getProjectText(project.overview)}
            </p>


            <div class="modal-project-actions">

                ${projectLinksHTML}

            </div>

        </div>


        <div class="modal-gallery">

            ${galleryHTML}

        </div>


        <!-- ===============================================
             MODAL TABS
        ================================================ -->

        <div class="project-modal-tabs">

            <button
                class="project-tab active"
                data-tab="overview"
            >

                ${
                    currentLanguage === "pt"
                        ? "Visão Geral"
                        : "Overview"
                }

            </button>


            <button
                class="project-tab"
                data-tab="development"
            >

                ${
                    currentLanguage === "pt"
                        ? "Desenvolvimento"
                        : "Development"
                }

            </button>


            <button
                class="project-tab"
                data-tab="technologies"
            >

                ${
                    currentLanguage === "pt"
                        ? "Tecnologias"
                        : "Technologies"
                }

            </button>

        </div>


        <!-- ===============================================
             TAB CONTENT
        ================================================ -->

        <div class="project-tab-content">


            <!-- ===========================================
                 OVERVIEW
            ============================================ -->

            <div
                class="project-tab-panel active"
                data-panel="overview"
            >

                <div class="detail-grid">


                    <div class="detail-block">

                        <h3>

                            ${
                                currentLanguage === "pt"
                                    ? "O problema"
                                    : "The problem"
                            }

                        </h3>

                        <p>
                            ${getProjectText(project.problem)}
                        </p>

                    </div>


                    <div class="detail-block">

                        <h3>

                            ${
                                currentLanguage === "pt"
                                    ? "A solução"
                                    : "The solution"
                            }

                        </h3>

                        <p>
                            ${getProjectText(project.solution)}
                        </p>

                    </div>


                    <div class="detail-block">

                        <h3>

                            ${
                                currentLanguage === "pt"
                                    ? "Funcionalidades"
                                    : "Features"
                            }

                        </h3>

                        <ul>

                            ${featuresHTML}

                        </ul>

                    </div>


                    <div class="detail-block">

                        <h3>

                            ${
                                currentLanguage === "pt"
                                    ? "Requisitos"
                                    : "Requirements"
                            }

                        </h3>

                        <ul>

                            ${requirementsHTML}

                        </ul>

                    </div>


                </div>

            </div>


            <!-- ===========================================
                 DEVELOPMENT
            ============================================ -->

            <div
                class="project-tab-panel"
                data-panel="development"
            >

                <div class="detail-grid">


                    <div class="detail-block">

                        <h3>

                            ${
                                currentLanguage === "pt"
                                    ? "Desafios técnicos"
                                    : "Technical challenges"
                            }

                        </h3>


                        <ul>

                            ${challengesHTML}

                        </ul>

                    </div>


                    <div class="detail-block">

                        <h3>

                            ${
                                currentLanguage === "pt"
                                    ? "O que aprendi"
                                    : "What I learned"
                            }

                        </h3>


                        <ul>

                            ${learningsHTML}

                        </ul>

                    </div>


                    <div class="detail-block">

                        <h3>

                            ${
                                currentLanguage === "pt"
                                    ? "Estrutura / Arquitetura"
                                    : "Structure / Architecture"
                            }

                        </h3>


                        <p>

                            ${getProjectText(project.architecture)}

                        </p>

                    </div>


                    <div class="detail-block">

                        <h3>

                            ${
                                currentLanguage === "pt"
                                    ? "Métodos e desenvolvimento"
                                    : "Development approach"
                            }

                        </h3>


                        <p>

                            ${getProjectText(project.methods)}

                        </p>

                    </div>


                </div>

            </div>


            <!-- ===========================================
                 TECHNOLOGIES
            ============================================ -->

            <div
                class="project-tab-panel"
                data-panel="technologies"
            >

                <div class="detail-grid">


                    <div class="detail-block">

                        <h3>

                            ${
                                currentLanguage === "pt"
                                    ? "Tecnologias utilizadas"
                                    : "Technologies used"
                            }

                        </h3>


                        <div class="detail-tech">

                            ${technologyHTML}

                        </div>

                    </div>


                </div>

            </div>


        </div>

    `;


    /* =====================================================
       TAB EVENTS
    ===================================================== */

    const tabs =
        modalContent.querySelectorAll(".project-tab");


    const panels =
        modalContent.querySelectorAll(".project-tab-panel");


    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const target =
                tab.dataset.tab;


            currentModalTab =
                target;


            tabs.forEach(item => {

                item.classList.remove("active");

            });


            panels.forEach(panel => {

                panel.classList.remove("active");

            });


            tab.classList.add("active");


            const targetPanel =
                modalContent.querySelector(
                    `[data-panel="${target}"]`
                );


            if (targetPanel) {

                targetPanel.classList.add("active");

            }

        });

    });


    /* =====================================================
       OPEN MODAL
    ===================================================== */

    modal.classList.add("active");

    document.body.classList.add("modal-open");

    modal.scrollTop = 0;

}


/* =========================================================
   CLOSE PROJECT
========================================================= */

function closeProject() {

    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

    currentProject = null;

}


/* =========================================================
   MODAL EVENTS
========================================================= */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProject
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeProject
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("active")
        ) {

            closeProject();

        }

    }
);


/* =========================================================
   INIT
========================================================= */

renderProjects();

updateLanguage();


/* =========================================================
   HEADER SCROLL
========================================================= */

const header =
    document.querySelector(".header");


if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.background =
                "rgba(8,9,13,.88)";

        } else {

            header.style.background =
                "linear-gradient(to bottom, rgba(8,9,13,.96), rgba(8,9,13,.72), transparent)";

        }

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .timeline-item, .course-card"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: .08
        }

    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


/* =========================================================
   MOBILE MENU TOGGLE
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");


const navigation =
    document.querySelector(".navigation");


if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("active");


        /*
            Troca o ícone de barras
            para X e vice-versa.
        */

        const icon =
            menuToggle.querySelector("i");


        if (!icon) {
            return;
        }


        if (
            navigation.classList.contains("active")
        ) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        } else {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    });


    /*
        Fecha o menu ao clicar
        em qualquer link.
    */

    navigation
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "active"
                    );


                    const icon =
                        menuToggle.querySelector("i");


                    if (!icon) {
                        return;
                    }


                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }
            );

        });

}