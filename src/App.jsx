import React, { useState, useEffect } from 'react';

// --- SVGS SIMPLES E FUNCIONAIS (Para evitar bugs de importação) ---

const MenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const CloseIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

// Ícones de navegação (REMOVIDOS para atender à solicitação)
const NavIcon = (props) => (
    <div className="w-5 h-5 mr-3 flex items-center justify-center text-xs font-bold" {...props}>
        {/* Placeholder vazio */}
    </div>
);


// --- COMPONENTE PRINCIPAL ---

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // --- CONFIGURAÇÃO E DADOS MOVIDOS PARA DENTRO DO COMPONENTE ---
    
    // Dados acadêmicos
    const projectTitle = "Desafios Contemporâneos: Uma Análise Crítica da Governança Global, Pobreza e Sustentabilidade";
    const projectCourse = "Estudos Contemporâneos";
    const projectSemester = "2025/2";
    
    // URLs das charges e vídeos
    const RACISMO_CHARGE_URL = "https://i.postimg.cc/prCCR7L3/negl.png";
    const DESIGUALDADE_CHARGE_URL = "https://i.postimg.cc/TPK4QR3t/charg.jpg";
    const CIDADE_DE_DEUS_VIDEO_URL = "#"; // Sem vídeo, apenas o resumo
    const END_OF_POVERTY_VIDEO_URL = "https://www.youtube.com/embed/nUd-y0Hamrg"; 
    const GERANDO_FALCOES_VIDEO_URL = "https://www.youtube.com/embed/1sUypKJxjB4";
    const GERANDO_PALESTRA_URL = "https://www.youtube.com/embed/R0aP1XK6rus";


    // Dados de navegação
    const navItems = [
        { id: 'home', title: 'Início', icon: 'H' },
        { id: 'quemsomos', title: '1. Quem Somos', icon: 'U' },
        { id: 'conceitos', title: '2. Conceitos-Chave', icon: 'B' },
        { id: 'midia', title: '3. Mídia e Inspiração', icon: 'M' },
        { id: 'ongs', title: '4. ONGs e Cidadania', icon: 'O' },
        { id: 'experiencias', title: '5. Experiências Exitosas', icon: 'A' },
        { id: 'referencias', title: '6. Referências', icon: 'L' },
    ];

    // Dados dos Membros (Com descrições e URLs de fotos atualizadas)
    const MEMBERS = [
        { 
            name: 'Murilo Vilela de Brito', 
            ra: '844853', 
            photoUrl: 'https://i.postimg.cc/sDKHt9jT/Untitled-image.jpg', 
            description: 'Coordenador geral do projeto e responsável pela estrutura metodológica do trabalho e pela seção de Experiências Exitosas.'
        },
        { 
            name: 'Matheus Costa', 
            ra: '846573', 
            photoUrl: 'https://i.postimg.cc/VLj06DrH/matheus.jpg', 
            description: 'Membro responsável pela análise crítica do conceito de Racismo e Desigualdade, com foco na contextualização histórica e social.' 
        },
        { 
            name: 'Vitória Marques', 
            ra: '845918', 
            photoUrl: 'https://i.postimg.cc/4NTnrVLp/vitoria.jpg', 
            description: 'Focou na pesquisa de campo e na compilação de dados para as seções de ONGs e Mídia, buscando o alinhamento com os Objetivos de Desenvolvimento Sustentável (ODS).' 
        },
        { 
            name: 'Daniel Henrique de Sousa Barboza', 
            ra: '846-353', 
            photoUrl: 'https://i.postimg.cc/RFHVYZwJ/daniel.jpg', 
            description: 'Responsável pela pesquisa e detalhamento dos conceitos de Globalização e Nova Ordem Mundial, analisando seus impactos econômicos e geopolíticos.' 
        },
        { 
            name: 'Laura Aguiar', 
            ra: '846067', 
            photoUrl: 'https://i.postimg.cc/K8PP6mrd/laura-2.jpg', 
            description: 'Encarregada da pesquisa e desenvolvimento da seção de Sustentabilidade e suas dimensões, garantindo a abordagem integrada do tema no trabalho.' 
        },
        { 
            name: 'Enzo Damasceno Bazan', 
            ra: '840295', 
            photoUrl: 'https://i.postimg.cc/y8Dqjrmx/enzo.jpg', 
            description: 'Responsável pela pesquisa e organização das Referências e Indicações Bibliográficas. Garantiu a correta citação das fontes utilizadas e contribuiu na revisão do conteúdo, focando na coerência dos argumentos.' 
        },
    ];

    // --- SUBCOMPONENTES (Definidos como Funções que usam dados de App) ---
    
    // 0. Visualização da Página Inicial (Home)
    const HomeView = () => (
        <div className="min-h-[80vh] flex items-center justify-center text-center rounded-xl shadow-2xl overflow-hidden" 
             style={{ 
                 // ATENÇÃO: SUBSTITUA ESTA URL PELA IMAGEM DE FUNDO ESCOLHIDA
                //  backgroundImage: 'url(https://placehold.co/1200x800/10B981/FFFFFF?text=INSIRA+A+IMAGEM+DE+FUNDO+AQUI)', 
                 backgroundSize: 'cover', 
                 backgroundPosition: 'center' 
             }}>
            
            <div className="py-20 px-8 bg-black/60 rounded-xl max-w-4xl mx-auto backdrop-blur-sm">
                <p className="text-sm font-semibold text-emerald-300 mb-3 md:text-xl">
                    A Reflexão Crítica como Motor da Transformação Social.
                </p>
                <h1 className="text-lg sm:text-6xl font-extrabold leading-tight text-white mb-4 border-2 border-solid p-1">
                    {projectTitle}
                </h1>
                <p className="text-sm text-blue-300 max-w-3xl mx-auto md:text-xl">
                    Uma análise aprofundada sobre os desafios contemporâneos e as dimensões da sustentabilidade no cenário global.
                </p>
                <p className="mt-8 text-sm text-gray-300">
                    Trabalho para a disciplina: {projectCourse} | {projectSemester}
                </p>
            </div>
        </div>
    );


    // 1. Visualização Quem Somos Nós
    const QuemSomosView = () => (
        <section>
            <h2 className="text-3xl font-bold text-emerald-500 dark:text-emerald-300 mb-6 border-b-2 border-emerald-500 dark:border-emerald-300 pb-2">
                1. Quem Somos Nós
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-200 mb-8">
                <p>
                    Somos um grupo de estudantes do curso [Nome do Curso] da [Nome da Faculdade/Universidade] e este projeto é o resultado de uma reflexão aprofundada sobre os temas discutidos nas Unidades Curriculares de {projectCourse}.
                </p>
                <p>
                    Nosso objetivo é fornecer uma plataforma de conhecimento acessível e instigar o pensamento crítico sobre questões fundamentais como governança, justiça social e meio ambiente.
                </p>
            </div>
            
            {/* Otimização de responsividade: 3 colunas em LG, 2 em SM, 1 em Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                
                {MEMBERS.map((member, index) => (
                    <div key={index} className="p-6 bg-gray-100 dark:bg-gray-600 rounded-xl shadow-md border border-gray-200 dark:border-gray-500 text-center">
                        <img src={member.photoUrl} 
                             alt={`Foto de ${member.name}`} 
                             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/CC0000/FFFFFF?text=ERRO+FOTO"; }}
                             className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-500 dark:border-emerald-300"/>
                        
                        {/* Redução de fonte em mobile para o nome */}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1">{member.name}</h3>
                        <p className="text-sm text-blue-500 dark:text-blue-400 mb-3">RA: {member.ra}</p>
                        <p className="text-gray-700 dark:text-gray-200 text-left italic text-sm">
                            {member.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );

    // 2. Visualização Conceitos-Chave (Reestruturada)
    const ConceitosView = () => (
        <section>
            <h2 className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-8 border-b-2 border-blue-500 dark:border-blue-400 pb-2">
                2. Conceitos-Chave para a Reflexão
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Conceito 1: Globalização & Nova Ordem Mundial (Unidos) */}
                <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-md border-l-4 border-emerald-500 dark:border-emerald-300">
                    {/* Redução de fonte em mobile para o título */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3">Globalização & Nova Ordem Mundial</h3>
                    <p className="text-gray-700 dark:text-gray-200 mb-4">
                        A Globalização é o processo de intensa integração econômica, política, social e cultural em escala mundial, impulsionada pelo desenvolvimento de transportes e comunicações. A **Nova Ordem Mundial** refere-se à configuração geopolítica que sucedeu a Guerra Fria, marcada pela multipolaridade econômica (EUA, UE, Japão, China) e pela aceleração da própria Globalização. Este fenómeno estabelece a hegemonia do sistema capitalista e a interdependência entre nações, mas também acirra desigualdades e conflitos regionais (Mundo Educação; Quero Bolsa, acesso em Nov. 2025).
                    </p>

                    {/* Crítica da Globalização - Adicionado a pedido do usuário */}
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-2 border-t pt-3 dark:border-gray-500">
                        Crítica da Governança Global (Joseph Stiglitz)
                    </h4>
                    <p className="text-gray-700 dark:text-gray-200 mb-3 text-sm italic">
                        O economista Joseph Stiglitz, em "A Globalização e Seus Descontentes", critica veementemente o papel de instituições como o FMI e o Banco Mundial. Ele argumenta que a imposição de políticas rígidas (austeridade e privatização), sem considerar as realidades locais, aprofunda a pobreza, o desemprego e a desigualdade, agindo em prol dos interesses de países ricos e carecendo de transparência e participação democrática. Stiglitz defende uma globalização reformada, ética e centrada no desenvolvimento humano.
                    </p>
                    
                    <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-3">
                        <a href="https://mundoeducacao.uol.com.br/geografia/globalizacao.htm" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Referência: Mundo Educação (Globalização)</a>
                        <br/>
                        <a href="https://querobolsa.com.br/enem/historia-geral/nova-ordem-mundial" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Referência: Quero Bolsa (Nova Ordem Mundial)</a>
                        <br/>
                        <a href="https://en.wikipedia.org/wiki/Globalization_and_Its_Discontents" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Referência: Wikipedia (A Globalização e Seus Descontentes)</a>
                    </p>
                </div>

                {/* Conceito 2: Racismo e Desigualdade Estrutural (Com Charge) */}
                <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-md border-l-4 border-red-600 dark:border-red-400">
                    {/* Redução de fonte em mobile para o título */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3">Racismo e Desigualdade Estrutural</h3>
                    <p className="text-gray-700 dark:text-gray-200 mb-3">
                        O Racismo Estrutural é o conjunto de práticas e mecanismos institucionais e sociais que privilegiam grupos majoritários e sistematicamente desfavorecem grupos minoritários, como a população negra, em acesso à educação, saúde, justiça e renda. Diferente do ato individual, o racismo estrutural opera na base da sociedade, perpetuando desigualdades históricas e econômicas.
                    </p>
                    
                    {/* Charge de Racismo - Inserida aqui */}
                    <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/50 rounded-lg border border-red-400 dark:border-red-600 text-center">
                        {/* Otimização de imagem para mobile: Largura total com altura auto */}
                        <img src={RACISMO_CHARGE_URL} alt="Charge sobre Racismo Estrutural: Duas pessoas brancas e uma pessoa negra, e uma mão aponta para o jovem negro dizendo: 'NÃO TEMOS CERTEZA, MAS FOI ELE!'" className="w-full h-auto max-h-64 object-contain mx-auto rounded-lg"/>
                        <p className="text-xs italic text-red-500 dark:text-red-400 mt-2">
                            Charge: Crítica à criminalização seletiva e ao racismo institucional.
                        </p>
                    </div>

                    <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-3">
                        Referência: <span className="text-blue-500 dark:text-blue-400">Análise do Grupo (Conceito Próprio)</span>
                    </p>
                </div>

                {/* Conceito 3: Políticas Públicas & Estado/Governo (Unidos) */}
                <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-md border-l-4 border-emerald-500 dark:border-emerald-300">
                    {/* Redução de fonte em mobile para o título */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3">Políticas Públicas & Estado/Governo</h3>
                    <p className="text-gray-700 dark:text-gray-200 mb-3">
                        O **Estado** é a instituição política permanente que detém soberania sobre um território e povo. O **Governo** é o grupo temporário que administra e executa o poder. As **Políticas Públicas** são o conjunto de ações e programas implementados pelo Governo, dentro da estrutura do Estado, para concretizar direitos sociais e solucionar problemas de interesse público (Ex: saúde, educação, habitação). A distinção é crucial para entender a permanência das instituições (Estado) versus a transitoriedade da gestão (Governo) (Revista Brasileira Multidisciplinar; FGV, acesso em Nov. 2025).
                    </p>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-3">
                        <a href="https://revistarebram.com/index.php/revistauniara/article/view/183" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Referência: Revista Brasileira Multidisciplinar (Estado e Governo)</a>
                        <br/>
                        <a href="https://periodicos.fgv.br/cgpc/announcement/view/328" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Referência: FGV (Políticas Públicas)</a>
                    </p>
                </div>

                {/* Conceito 4: Pobreza (Multidimensional) - Com Charge de Desigualdade */}
                <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-md border-l-4 border-emerald-500 dark:border-emerald-300">
                    {/* Redução de fonte em mobile para o título */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3">Pobreza (Multidimensional)</h3>
                    <p className="text-gray-700 dark:text-gray-200 mb-3">
                        O conceito moderno de Pobreza Multidimensional transcende a mera falta de renda (pobreza monetária). Ele mede a privação de direitos básicos em dimensões como **saúde, educação e padrão de vida** (acesso a água, saneamento, eletricidade, etc.). A pobreza, nesse sentido, é uma condição estrutural de ausência de capacidades e acessos necessários para o pleno desenvolvimento humano, sendo um reflexo das desigualdades históricas e da má distribuição de recursos (UFSM; SciELO, acesso em Nov. 2025).
                    </p>
                    
                    {/* Charge de Desigualdade - Inserida aqui */}
                    <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/50 rounded-lg border border-red-400 dark:border-red-600 text-center">
                        {/* Otimização de imagem para mobile: Largura total com altura auto */}
                        <img src={DESIGUALDADE_CHARGE_URL} alt="Charge sobre Pobreza e Direitos Humanos: Uma família sentada na rua lendo o livro 'Direitos Humanos', enquanto o filho diz: 'Pai, eu quero viver nesse mundo!'" className="w-full h-auto max-h-64 object-contain mx-auto rounded-lg"/>
                        <p className="text-xs italic text-red-500 dark:text-red-400 mt-2">
                            Charge: Crítica à discrepância entre os direitos garantidos na lei e a realidade da pobreza.
                        </p>
                    </div>

                    <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-3">
                        <a href="https://www.ufsm.br/app/uploads/sites/533/2019/05/POBREZA_MULTIDIMENSIONAL.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Referência: UFSM (Pobreza Multidimensional)</a>
                        <br/>
                        <a href="https://www.scielo.br/j/rep/a/xqBvfZ5JqBZHvYqnFMNCcWv/" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Referência: SciELO (Pobreza multidimensional no Brasil)</a>
                    </p>
                </div>

                {/* Conceito 5: Dimensões da Sustentabilidade */}
                <div className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-md border-l-4 border-emerald-500 dark:border-emerald-300 col-span-full">
                    {/* Redução de fonte em mobile para o título */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3">Dimensões da Sustentabilidade</h3>
                    <p className="text-gray-700 dark:text-gray-200 mb-3">
                        A Sustentabilidade exige um equilíbrio entre as dimensões **Social** (equidade), **Econômica** (eficiência), **Ambiental/Ecológica** (preservação de recursos), **Geográfica** (organização espacial) e **Cultural** (respeito à diversidade). O desenvolvimento sustentável é aquele que atende às necessidades do presente sem comprometer a capacidade das futuras gerações de atenderem às suas próprias necessidades, requerendo uma abordagem integrada das políticas públicas (Wikipédia; Unesp, acesso em Nov. 2025).
                    </p>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-3">
                        <a href="https://pt.wikipedia.org/wiki/Sustentabilidade" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Referência: Wikipédia (Dimensões da sustentabilidade)</a>
                        <br/>
                        <a href="https://revista.fct.unesp.br/index.php/geografiaematos/article/download/1724/sergiosilva/0" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Referência: Unesp (A sustentabilidade e suas dimensões)</a>
                    </p>
                </div>
            </div>
        </section>
    );


    // 3. Visualização Mídia e Inspiração (Com Abas)
    const MidiaView = () => {
        const [activeTab, setActiveTab] = useState('musicas');

        const musicas = [
            { title: '"Mercedes-Benz" - Janis Joplin', description: 'Faz uma crítica irônica ao consumismo e ao sonho materialista, dialogando com a globalização e suas desigualdades ao mostrar como o valor das pessoas é associado ao que elas possuem.' },
            { title: '"Alkymist" - Rashid', description: 'Aborda pobreza, desigualdade social e a luta diária da periferia, trazendo um relato realista de como fatores estruturais dificultam a ascensão social.' },
            { title: '"Apesar de Você" - Chico Buarque', description: 'Letra que critica o autoritarismo e a falta de liberdade, refletindo sobre corrupção e falhas no poder público.' },
            { title: '"Xibom Bombom" - As Meninas', description: 'De forma leve, a música critica a desigualdade e a má administração do dinheiro público, aproximando-se do tema políticas públicas.' },
        ];

        const videos = [
            { 
                title: 'Unnatural Causes: Is Inequality Making Us Sick? (2008)', 
                link: END_OF_POVERTY_VIDEO_URL, 
                description: 'Investiga as origens históricas e estruturais da pobreza global e as raízes socioeconômicas e raciais da desigualdade na saúde, ligando-se diretamente aos temas de Racismo, Pobreza e Políticas Públicas.',
                hasEmbed: true
            },
            // Documentário Cidade de Deus (Mantido o resumo e o placeholder para o link do vídeo)
            { 
                title: 'Cidade de Deus (2002)', 
                link: CIDADE_DE_DEUS_VIDEO_URL, 
                description: 'Cidade de Deus (2002), dirigido por Fernando Meirelles e baseado na obra de Paulo Lins, retrata a formação e a expansão do crime organizado em uma comunidade periférica do Rio de Janeiro entre as décadas de 1960 e 1980. A narrativa acompanha a trajetória de diversos personagens que crescem em um ambiente marcado pela pobreza, exclusão social, violência precoce e ausência quase total do Estado. A história é contada a partir da perspectiva de Buscapé, um jovem que busca escapar da violência e sonha em se tornar fotógrafo. Em contraste, vemos a ascensão de Zé Pequeno, que desde criança se envolve com o crime e se torna um dos traficantes mais temidos da região. O filme mostra como a falta de oportunidades, o racismo estrutural, a desigualdade econômica e a ausência de políticas públicas eficientes contribuem para que muitos jovens sejam empurrados para o crime como forma de sobrevivência. A produção também destaca o impacto da globalização e do crescimento urbano desordenado, evidenciando como comunidades marginalizadas acabam isoladas social, política e economicamente. A obra revela a falência das instituições públicas — como polícia, educação e assistência social - que deveriam oferecer suporte à população, mas se mostram ineficazes ou corrompidas. Mais do que retratar a violência, Cidade de Deus funciona como uma crítica social profunda, mostrando como fatores estruturais moldam trajetórias individuais. O filme evidencia a perpetuação de ciclos de pobreza e violência e demonstra que os problemas apresentados não são casos isolados, mas reflexos de desigualdades históricas no Brasil.',
                hasEmbed: false
            }
        ];

        // APENAS UMA PALESTRA (Gerando Falcões), conforme última solicitação.
        const palestras = [
            { 
                title: 'Transformando Vidas: O Impacto da Gerando Falcões (Edu Lyra)', 
                link: GERANDO_PALESTRA_URL, 
                description: 'Apresentação de Edu Lyra sobre a metodologia da Gerando Falcões e o conceito de "Favela 3D", mostrando como a inovação e o empreendedorismo social podem transformar a pobreza em potência.', 
                hasEmbed: true 
            },
        ];

        const renderContent = () => {
            switch (activeTab) {
                case 'musicas':
                    return (
                        <div className="space-y-4 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 p-6 rounded-lg border border-gray-200 dark:border-gray-500">
                            {/* Redução de fonte em mobile para o título */}
                            <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">Músicas</h3>
                            <ul className="list-disc ml-6 space-y-3">
                                {musicas.map((m, i) => (
                                    <li key={i}>
                                        {/* Redução de fonte para o negrito nos itens de lista */}
                                        <strong className="text-sm sm:text-base text-gray-800 dark:text-white">{m.title}</strong>
                                        <p className="text-sm italic text-gray-600 dark:text-gray-400">{m.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                case 'videos':
                    return (
                        <div className="space-y-6 text-gray-700 dark:text-gray-200">
                            {/* Redução de fonte em mobile para o título */}
                            <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">Vídeos e Documentários</h3>
                            {videos.map((v, i) => (
                                <div key={i} className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg border border-gray-200 dark:border-gray-500">
                                    {/* Redução de fonte em mobile para o título do vídeo */}
                                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3">{v.title}</h4>
                                    
                                    {/* Embed do Vídeo (Otimizado para Responsividade) */}
                                    {v.hasEmbed && v.link !== CIDADE_DE_DEUS_VIDEO_URL ? (
                                        <div className="w-full relative overflow-hidden rounded-lg mb-4" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                                            <iframe 
                                                className="absolute top-0 left-0 w-full h-full"
                                                src={v.link} 
                                                title={v.title} 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                referrerPolicy="strict-origin-when-cross-origin" 
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <div className="w-full h-64 bg-gray-300 dark:bg-gray-500 flex items-center justify-center text-gray-600 dark:text-gray-300 rounded-lg mb-4">
                                            <p className="p-4 text-center font-semibold">RESUMO DO FILME. Não há vídeo para incorporação.</p>
                                        </div>
                                    )}

                                    <p className="text-gray-700 dark:text-gray-200">{v.description}</p>
                                </div>
                            ))}
                        </div>
                    );
                case 'palestras':
                    return (
                        <div className="space-y-6 text-gray-700 dark:text-gray-200">
                            {/* Redução de fonte em mobile para o título */}
                            <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">Palestras On-line</h3>
                            {palestras.map((p, i) => (
                                <div key={i} className="bg-gray-100 dark:bg-gray-600 p-6 rounded-lg border border-gray-200 dark:border-gray-500">
                                    {/* Redução de fonte em mobile para o título da palestra */}
                                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3">{p.title}</h4>

                                    {p.hasEmbed ? (
                                        <div className="w-full relative overflow-hidden rounded-lg mb-4" style={{ paddingTop: '56.25%' }}>
                                            <iframe 
                                                className="absolute top-0 left-0 w-full h-full"
                                                src={p.link} 
                                                title={p.title} 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                referrerPolicy="strict-origin-when-cross-origin" 
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <div className="w-full h-24 bg-gray-300 dark:bg-gray-500 flex items-center justify-center text-gray-600 dark:text-gray-300 rounded-lg mb-4">
                                            <p className="p-4 text-center font-semibold">LINK DE EMBED PENDENTE.</p>
                                        </div>
                                    )}

                                    <p className="text-gray-700 dark:text-gray-200">Foco: {p.description}</p>
                                </div>
                            ))}
                        </div>
                    );
                default:
                    return null;
            }
        };

        return (
            <section>
                <h2 className="text-3xl font-bold text-emerald-500 dark:text-emerald-300 mb-8 border-b-2 border-emerald-500 dark:border-emerald-300 pb-2">
                    3. Mídia e Inspiração (Sugestões de Conteúdo)
                </h2>
                <p className="lg text-gray-700 dark:text-gray-200 mb-6">
                    Material cuidadosamente selecionado para aprofundar seu conhecimento sobre os temas abordados.
                </p>

                {/* Menu de Abas */}
                <div className="flex flex-wrap border-b dark:border-gray-500 mb-6">
                    {['musicas', 'videos', 'palestras'].map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)} 
                            className={`px-4 py-2 font-semibold border-b-3 transition-colors ${activeTab === tab ? 'text-emerald-500 dark:text-emerald-300 border-emerald-500 dark:border-emerald-300' : 'text-gray-600 dark:text-gray-300 border-transparent hover:text-emerald-500 dark:hover:text-emerald-300'}`}
                        >
                            {tab === 'musicas' ? 'Músicas' : tab === 'videos' ? 'Vídeos/Documentários' : 'Palestras On-line'}
                        </button>
                    ))}
                </div>
                
                {/* Conteúdo da Aba Ativa */}
                {renderContent()}

            </section>
        );
    };


    // 4. Visualização ONGs
    const OngsView = () => (
        <section>
            <h2 className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-8 border-b-2 border-blue-500 dark:border-blue-400 pb-2">
                4. ONGs: Ação da Cidadania
            </h2>
            <p className="lg text-gray-700 dark:text-gray-200 mb-6">
                Organização brasileira respeitada, focada em combate à fome e promoção da inclusão social.
            </p>

            <div className="space-y-6">
                {/* Ação da Cidadania (Única ONG) */}
                <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500">
                    {/* Redução de fonte em mobile para o título */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3">Ação da Cidadania (Brasil)</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-200 list-disc ml-6">
                        <li>
                            {/* Redução de fonte para o negrito nos itens de lista */}
                            <strong className="text-sm sm:text-base text-emerald-500 dark:text-emerald-300">Missão:</strong> Focada em combate à fome, pobreza e exclusão social.
                        </li>
                        <li>
                            {/* Redução de fonte para o negrito nos itens de lista */}
                            <strong className="text-sm sm:text-base text-emerald-500 dark:text-emerald-300">Atuação:</strong> Atua com distribuição de alimentos, políticas públicas e desenvolvimento comunitário.
                        </li>
                        <li>
                            {/* Redução de fonte para o negrito nos itens de lista */}
                            <strong className="text-sm sm:text-base text-emerald-500 dark:text-emerald-300">Website:</strong> <a href="https://www.acaodacidadania.org.br/" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">https://www.acaodacidadania.org.br/</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );

    // 5. Visualização Experiências Exitosas
    const ExperienciasView = () => (
        <section>
            <h2 className="text-3xl font-bold text-emerald-500 dark:text-emerald-300 mb-8 border-b-2 border-emerald-500 dark:border-emerald-300 pb-2">
                5. Experiências de Sucesso e Boas Práticas
            </h2>
            <p className="lg text-gray-700 dark:text-gray-200 mb-6">
                Iniciativas de ONGs ou grupos sociais que demonstraram resultados positivos no combate à desigualdade, racismo e na promoção da sustentabilidade.
            </p>

            <div className="space-y-6">
                {/* Exemplo de Experiência 1: Gerando Falcões (ÚNICA Experiência) */}
                <article className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 shadow-md">
                    {/* Redução de fonte em mobile para o título */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2">Experiência de Sucesso: O Modelo da ONG Gerando Falcões</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Área: Pobreza e Transformação Social | Iniciativa: Gerando Falcões</p>
                    <p className="text-gray-700 dark:text-gray-200 mb-4">
                        A Gerando Falcões (GF) é considerada uma das experiências mais bem-sucedidas de transformação social em comunidades. Fundada por Edu Lyra, a ONG desenvolveu o conceito de "Favela 3D: Digital, Digna e Desenvolvida", que integra educação, geração de renda, sustentabilidade e políticas públicas. O sucesso do modelo se deve ao uso de gestão profissional, forte integração com o poder público para criar políticas eficientes e o envolvimento direto da comunidade.
                    </p>
                    
                    {/* Vídeo da Gerando Falcões */}
                    <div className="w-full relative overflow-hidden rounded-lg mb-4" style={{ paddingTop: '56.25%' }}>
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full"
                            src={GERANDO_FALCOES_VIDEO_URL} 
                            title="Gerando Falcões: Apresentação" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        ></iframe>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-gray-200">
                        **O que foi feito:** Implementação de programas educativos e profissionalizantes; parcerias com empresas para geração de emprego e renda; projetos de moradia digna, saneamento e revitalização urbana; adoção de práticas sustentáveis, como reciclagem e energia solar; acompanhamento familiar e apoio psicológico.
                    </p>
                </article>
                
            </div>
        </section>
    );

    // 6. Visualização Referências
    const ReferenciasView = () => {
        // References data defined here to avoid re-calculating
        const references = [
            { text: 'AÇÃO DA CIDADANIA. Website oficial.', url: 'https://www.acaodacidadania.org.br/' },
            { text: 'Análise do Grupo. Conceito Próprio.', url: '#' },
            { text: 'CIDADE DE DEUS (2002). Direção: Fernando Meirelles e Kátia Lund. (Resumo do Grupo, base: Análise da obra).', url: '#' },
            { text: 'FGV. Políticas públicas: o que são, quem faz e como faz?', url: 'https://periodicos.fgv.br/cgpc/announcement/view/328' },
            { text: 'GERANDO FALCÕES. Vídeo de Apresentação (YouTube).', url: 'https://youtu.be/1sUypKJxjB4' },
            { text: 'MUNDO EDUCAÇÃO. Globalização: o que é, como surgiu, fases.', url: 'https://mundoeducacao.uol.com.br/geografia/globalizacao.htm' },
            { text: 'QUERO BOLSA. Nova Ordem Mundial: entenda o que é e principais.', url: 'https://querobolsa.com.br/enem/historia-geral/nova-ordem-mundial' },
            { text: 'REVISTA BRASILEIRA MULTIDISCIPLINAR. Estado e Governo: Diferença Conceitual e Implicações Práticas na Pós-Modernidade.', url: 'https://revistarebram.com/index.php/revistauniara/article/view/183' },
            { text: 'SCIELO. Pobreza multidimensional no Brasil: uma análise do período 2004-2015.', url: 'https://www.scielo.br/j/rep/a/xqBvfZ5JqBZHvYqnFMNCcWv/' },
            { text: 'STIGLITZ, Joseph. A Globalização e Seus Descontentes. (Resumo do Grupo, base: Wikipedia).', url: 'https://en.wikipedia.org/wiki/Globalization_and_Its_Discontents' }, 
            { text: 'UFSM. Pobreza multidimensional: um estudo de caso das privações.', url: 'https://www.ufsm.br/app/uploads/sites/533/2019/05/POBREZA_MULTIDIMENSIONAL.pdf' },
            { text: 'UNESP. A sustentabilidade e suas dimensões como fundamento da qualidade de vida.', url: 'https://revista.fct.unesp.br/index.php/geografiaematos/article/download/1724/sergiosilva/0' },
            { text: 'UNNATURAL CAUSES: Is Inequality Making Us Sick? (2008). Direção: L. Adelman, L. Smith, W. Riseborough.', url: 'https://www.youtube.com/embed/nUd-y0Hamrg' },
            { text: 'WIKIPÉDIA. Sustentabilidade.', url: 'https://pt.wikipedia.org/wiki/Sustentabilidade' },
        ];
        
        return (
            <section>
                <h2 className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-8 border-b-2 border-blue-500 dark:border-blue-400 pb-2">
                    6. Referências e Indicações Bibliográficas
                </h2>
                <p className="lg text-gray-700 dark:text-gray-200 mb-6">
                    Fontes utilizadas para a fundamentação teórica e dos conceitos, seguindo as normas da ABNT.
                </p>

                <div className="space-y-4 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 p-6 rounded-lg border border-gray-200 dark:border-gray-500">
                    <h3 className="xl font-bold text-gray-800 dark:text-white mb-3">Referências dos Conceitos</h3>
                    <ul className="list-disc ml-6 space-y-3 text-sm md:flex flex-col">
                        {references.map((ref, index) => (
                            <li key={index}>
                                {ref.text} Disponível em: &lt;<a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline break-all">{ref.url}</a>&gt;. Acesso em: 17 nov. 2025.
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    };

    // --- LÓGICA DO COMPONENTE PRINCIPAL ---
    
    // Efeito para aplicar ou remover a classe 'dark' no elemento <html>
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Função para mapear o ID da página ao componente
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomeView />;
            case 'quemsomos':
                return <QuemSomosView />;
            case 'conceitos':
                return <ConceitosView />;
            case 'midia':
                return <MidiaView />;
            case 'ongs':
                return <OngsView />;
            case 'experiencias':
                return <ExperienciasView />;
            case 'referencias':
                return <ReferenciasView />;
            default:
                return <HomeView />;
        }
    };

    const handleNavClick = (pageId) => {
        setCurrentPage(pageId);
        setIsSidebarOpen(false); // Fecha o menu lateral em mobile após a seleção
        window.scrollTo(0, 0); // Volta ao topo da página
    };

    // O div principal agora garante que o conteúdo não fique "flutuando"
    return (
        <div className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-sans antialiased min-h-screen transition-colors duration-300">
            {/* Navbar de Navegação Principal (FIXO NO TOPO) */}
            <header className="sticky top-0 z-50 bg-white dark:bg-gray-700 shadow-lg h-16">
                <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center h-full">
                    <div className="flex items-center">
                        {/* Botão de Menu para Mobile */}
                        <button 
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="md:hidden text-gray-800 dark:text-white focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 mr-4"
                            aria-label="Toggle Menu"
                        >
                            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                        <div className="text-lg font-extrabold text-emerald-500 dark:text-emerald-300 cursor-pointer" onClick={() => setCurrentPage('home')}>
                            TRABALHO DE ESTUDOS CONTEMPORÂNEOS
                        </div>
                    </div>
                </nav>
            </header>

            {/* CONTAINER PRINCIPAL: Sidebar + Conteúdo */}
            <div className="md:grid md:grid-cols-[250px_1fr] max-w-6xl mx-auto">
                
                {/* SIDEBAR (Menu Lateral Colapsável) */}
                {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
                
                <aside 
                    className={`fixed md:sticky top-16 left-0 z-40 
                                w-64 md:w-full h-[calc(100vh-64px)] 
                                bg-white dark:bg-gray-700 p-4 shadow-xl md:shadow-lg md:rounded-xl 
                                transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 
                                transition-transform duration-200 ease-in-out`}
                >
                    <nav className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 border-b dark:border-gray-600 pb-2">Navegação Principal</h3>
                        
                        {navItems.map(item => {
                            const isActive = currentPage === item.id;
                            const colorClass = isActive ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-gray-800 dark:text-gray-100';

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    // Removido o NavIcon do item aqui
                                    className={`p-3 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-gray-600 transition-all ${colorClass} ${isActive ? 'bg-blue-500/10 dark:bg-blue-300/20 shadow-sm' : ''}`}
                                >
                                    {item.title}
                                </button>
                            );
                        })}
                    </nav>
                </aside>
                
                {/* CONTEÚDO PRINCIPAL (Exibe a página ativa) */}
                <main className="p-4 sm:p-6 lg:p-8 md:pt-8 md:min-h-[calc(100vh-64px-5rem)]">
                    <div className="bg-white dark:bg-gray-700 p-6 sm:p-10 rounded-xl shadow-lg min-h-full">
                        {renderPage()}
                    </div>
                </main>
            </div>

            {/* Rodapé */}
            <footer className="bg-gray-800 dark:bg-gray-800 text-white p-6 text-center mt-6 md:mt-12">
                <p className="text-sm">Desenvolvido para a Atividade Avaliativa | {projectCourse} - {projectSemester}</p>
            </footer>
        </div>
    );
};

export default App;