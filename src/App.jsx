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

const MoonIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path>
    </svg>
);

const SunIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="M4.93 4.93l1.41 1.41"></path>
        <path d="M17.66 17.66l1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="M4.93 19.07l1.41-1.41"></path>
        <path d="M17.66 6.34l1.41-1.41"></path>
    </svg>
);

// Ícones de navegação (Substituídos por placeholders temporários legíveis)
const NavIcon = ({ title, ...props }) => (
    <div className="w-5 h-5 mr-3 flex items-center justify-center text-xs font-bold rounded-full bg-blue-100 dark:bg-gray-600 text-blue-800 dark:text-blue-300" {...props} title={title}>
        {title.substring(0, 1)}
    </div>
);


// --- CONFIGURAÇÃO E DADOS ---

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

// Dados dos Membros (Com descrições mais simples e URLs de Postimages)
const MEMBERS = [
    { 
        name: 'Murilo Vilela de Brito', 
        ra: '844853', 
        photoUrl: 'https://i.postimg.cc/sDKHt9jT/Untitled-image.jpg', // Link Imgur corrigido
        description: 'Responsável pela compilação e análise inicial dos dados de **Globalização e Nova Ordem Mundial**, focando na correlação entre geopolítica e economia.'
    },
    { 
        name: 'Matheus Costa', 
        ra: '846573', 
        photoUrl: 'https://i.postimg.cc/VLj06DrH/matheus.jpg', 
        description: 'Encarregado da pesquisa e redação detalhada dos conceitos de **Corrupção, Estado/Governo e Políticas Públicas**, garantindo a fundamentação teórica em Ciências Sociais.' 
    },
    { 
        name: 'Vitória Marques', 
        ra: '845918', 
        photoUrl: 'https://i.postimg.cc/4NTnrVLp/vitoria.jpg', 
        description: 'Líder na estruturação do conteúdo de **Mídia e Inspiração** (Seção 3), selecionando vídeos, palestras e músicas que complementam a reflexão crítica.' 
    },
    { 
        name: 'Daniel Henrique de Sousa Barboza', 
        ra: '846353', 
        photoUrl: 'https://i.postimg.cc/RFHVYZwJ/daniel.jpg', 
        description: 'Dedicado à pesquisa e documentação das **Experiências Exitosas** (Seção 5), focando em casos práticos de superação da pobreza e combate à corrupção.' 
    },
    { 
        name: 'Laura Aguiar', 
        ra: '846067', 
        photoUrl: 'https://i.postimg.cc/K8PP6mrd/laura-2.jpg', 
        description: 'Especialista na pesquisa e articulação dos conceitos de **Pobreza e Dimensões da Sustentabilidade**, garantindo a profundidade da análise social e ecológica.' 
    },
    { 
        name: 'Enzo Damasceno Bazan', 
        ra: '840295', 
        photoUrl: 'https://i.postimg.cc/y8Dqjrmx/enzo.jpg', 
        description: 'Responsável pela pesquisa e organização das **Referências e Indicações Bibliográficas** (Seção 6). Garantiu a correta citação das fontes utilizadas.' 
    },
];


// --- COMPONENTES DE VISUALIZAÇÃO (PÁGINAS) ---

// 0. Visualização da Página Inicial (Home)
const HomeView = ({ title, course, semester }) => (
    <div className="min-h-[80vh] flex items-center justify-center text-center rounded-xl shadow-2xl overflow-hidden" 
         style={{ 
             // ATENÇÃO: SUBSTITUA ESTA URL PELA IMAGEM DE FUNDO ESCOLHIDA (Link Direto do Postimages!)
             backgroundImage: 'url(https://placehold.co/1200x800/1F2937/FFFFFF?text=INSIRA+A+IMAGEM+DE+FUNDO+AQUI)', 
             backgroundSize: 'cover', 
             backgroundPosition: 'center' 
         }}>
        
        <div className="py-20 px-8 bg-black/60 rounded-xl max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-lg font-semibold text-emerald-300 mb-3">
                {/* 2) UMA FRASE QUE DEFINE O SITE */}
                A Reflexão Crítica como Motor da Transformação Social.
            </p>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-white mb-4">
                {title}
            </h1>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto">
                Uma análise aprofundada sobre os desafios contemporâneos e as dimensões da sustentabilidade no cenário global.
            </p>
            <p className="mt-8 text-sm text-gray-300">
                Trabalho para a disciplina: {course} | {semester}
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
                Somos um grupo de estudantes do curso [Nome do Curso] da [Nome da Faculdade/Universidade] e este projeto é o resultado de uma reflexão aprofundada sobre os temas discutidos nas Unidades Curriculares.
            </p>
            <p>
                Nosso objetivo é fornecer uma plataforma de conhecimento acessível e instigar o pensamento crítico sobre questões fundamentais como governança, justiça social e meio ambiente.
            </p>
        </div>
        
        {/* Layout de 3 colunas no desktop, 2 no tablet e 1 no mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            
            {MEMBERS.map((member, index) => (
                <div key={index} className="p-6 bg-gray-100 dark:bg-gray-600 rounded-lg shadow-md border border-gray-200 dark:border-gray-500 text-center">
                    <img 
                         src={member.photoUrl} 
                         alt={`Foto de ${member.name}`} 
                         onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x120/CC0000/FFFFFF?text=ERRO+FOTO"; }}
                         className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-500 dark:border-emerald-300"/>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-blue-500 dark:text-blue-400 mb-3">RA: {member.ra}</p>
                    <p className="text-gray-700 dark:text-gray-200 text-left italic text-sm">
                        {member.description}
                    </p>
                </div>
            ))}

        </div>
    </section>
);

// 2. Visualização Conceitos-Chave
const ConceitosView = () => (
    <section>
        <h2 className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-8 border-b-2 border-blue-500 dark:border-blue-400 pb-2">
            2. Conceitos-Chave para a Reflexão
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Estrutura para cada conceito (1-7) */}
            {[
                { title: 'Globalização', content: 'A Globalização é um processo complexo e multifacetado de crescente interconexão e integração econômica, política, social e cultural entre países e sociedades ao redor do mundo. Caracteriza-se pelo aprofundamento das relações internacionais, facilitadas pelo desenvolvimento de tecnologias de transporte e comunicação, e tem como base a expansão do sistema capitalista de produção. Embora remonte historicamente às Grandes Navegações, sua consolidação e intensidade atuais são fruto das sucessivas Revoluções Industriais e do avanço tecnológico (Mundo Educação; Toda Matéria, acesso em Nov. 2025).', refs: [{ url: 'https://mundoeducacao.uol.com.br/geografia/globalizacao.htm', title: 'Mundo Educação (Globalização)' }, { url: 'https://www.todamateria.com.br/globalizacao/', title: 'Toda Matéria (Globalização)' }] },
                { title: 'Nova Ordem Mundial', content: 'O conceito de Nova Ordem Mundial refere-se à nova configuração geopolítica global que emergiu após o término da Guerra Fria e o colapso da União Soviética (por volta de 1990). Marcou a transição da ordem bipolar (EUA vs. URSS) para uma ordem majoritariamente **multipolar**, onde o poder é medido não apenas pelo poder militar, mas sobretudo pela capacidade econômica (disponibilidade de capitais, avanço tecnológico) de potências como Estados Unidos, Japão e União Europeia. Este período também é marcado pelo aprofundamento da Globalização, que se torna a principal ferramenta da expansão capitalista (Quero Bolsa; Mundo Educação, acesso em Nov. 2025).', refs: [{ url: 'https://querobolsa.com.br/enem/historia-geral/nova-ordem-mundial', title: 'Quero Bolsa (Nova Ordem Mundial)' }, { url: 'https://mundoeducacao.uol.com.br/geografia/nova-ordem-mundial.htm', title: 'Mundo Educação (Nova Ordem Mundial)' }] },
                { title: 'Corrupção', content: 'A Corrupção é definida como o **uso indevido do poder confiado** a alguém (geralmente detentores de poder decisório nas esferas oficiais) para a obtenção de vantagens não oficiais, sejam elas pessoais, partidárias ou para o benefício de um grupo. Em termos práticos, envolve trocas entre poder decisório e poder econômico, visando ganhos ilegais. Ela pode ser classificada como **Pequena Corrupção** (pequenos favores ou subornos em serviços públicos) ou **Grande Corrupção** (que afeta o governo em larga escala, como desvio de verbas e peculato), sendo um sintoma de instituições frágeis e baixa transparência política (Transparência Internacional; SciELO, acesso em Nov. 2025).', refs: [{ url: 'https://pt.wikipedia.org/wiki/Corrup%C3%A7%C3%A3o', title: 'Wikipédia (Corrupção, citação da Transparência Internacional)' }, { url: 'https://www.scielo.br/j/rbcpol/a/VPBTRQmsPqT8KLqJJmcnqpn/?format=html&lang=pt', title: 'SciELO (Unificando os conceitos de corrupção)' }] },
                { title: 'Políticas Públicas', content: 'Políticas Públicas são o **conjunto de ações, decisões e programas** implementados por governos e instituições governamentais (o Estado) para abordar questões e problemas de interesse público e garantir os direitos dos cidadãos. É a forma como o Estado materializa um projeto de governo, visando atingir metas específicas em áreas como saúde, educação, meio ambiente, e assistência social. O ciclo de vida de uma política pública envolve as etapas de formulação, implementação e avaliação, sendo essencial a participação popular e a busca pela promoção do bem-estar social (FGV; Portal de Educação Ambiental, acesso em Nov. 2025).', refs: [{ url: 'https://periodicos.fgv.br/cgpc/announcement/view/328', title: 'FGV (Políticas Públicas)' }, { url: 'https://semil.sp.gov.br/educacaoambiental/prateleira-ambiental/politica-publica/', title: 'Portal de Educação Ambiental (Política Pública)' }] },
                { title: 'Estado/Governo', content: 'Embora usados frequentemente como sinônimos, **Estado e Governo** possuem diferenças conceituais cruciais nas Ciências Políticas. O **Estado** é a sociedade política organizada, a instituição jurídica e permanente que possui soberania, território e povo. Ele engloba a estrutura administrativa e os três poderes (Executivo, Legislativo e Judiciário). O **Governo**, por sua vez, é o grupo político ou o conjunto de órgãos que está no comando do Estado temporariamente, sendo responsável pela orientação política geral e pela gestão da administração pública (Revista Brasileira Multidisciplinar; InfoEscola, acesso em Nov. 2025).', refs: [{ url: 'https://revistarebram.com/index.php/revistauniara/article/view/183', title: 'Revista Brasileira Multidisciplinar (Estado e Governo)' }, { url: 'https://www.infoescola.com/direito/diferencas-entre-estado-e-governo/', title: 'InfoEscola (Diferenças entre Estado e Governo)' }] },
                { title: 'Pobreza', content: 'A Pobreza não é mais vista apenas como a privação de renda monetária (pobreza monetária). Atualmente, o conceito de **Pobreza Multidimensional** busca englobar todos os tipos de privações que impedem os indivíduos de exercerem suas capacidades e funcionamentos na sociedade. O Índice de Pobreza Multidimensional (IPM), por exemplo, utiliza dimensões como **saúde, educação e padrão de vida** (que inclui acesso à água, saneamento e eletricidade) para medir a pobreza. Assim, a pobreza é entendida como a privação de direitos e o acesso limitado a condições básicas de existência e desenvolvimento humano (UFSM; SciELO, acesso em Nov. 2025).', refs: [{ url: 'https://www.ufsm.br/app/uploads/sites/533/2019/05/POBREZA_MULTIDIMENSIONAL.pdf', title: 'UFSM (Pobreza Multidimensional)' }, { url: 'https://www.scielo.br/j/rep/a/xqBvfZ5JqBZHvYqnFMNCcWv/', title: 'SciELO (Pobreza multidimensional no Brasil)' }] },
                { title: 'Dimensões da Sustentabilidade', content: 'A Sustentabilidade é o equilíbrio dinâmico entre diferentes dimensões para garantir um modo de vida justo, produtivo e capaz de perdurar. O conceito pluridimensional da sustentabilidade ultrapassa a visão meramente ecológica e se estrutura em eixos indissociáveis. As cinco dimensões mais aceitas, propostas por Sachs, são: **Social** (equidade e distribuição de renda), **Econômica** (eficiência e gestão de recursos), **Ecológica/Ambiental** (preservação de recursos e ecossistemas), **Geográfica/Espacial** (qualidade do espaço urbano e rural) e **Cultural** (respeito e preservação da diversidade). A dimensão política (governança) também é crucial para garantir a implementação dessas ações (Wikipédia; Unesp, acesso em Nov. 2025).', refs: [{ url: 'https://pt.wikipedia.org/wiki/Sustentabilidade', title: 'Wikipédia (Dimensões da sustentabilidade)' }, { url: 'https://revista.fct.unesp.br/index.php/geografiaematos/article/download/1724/sergiosilva/0', title: 'Unesp (A sustentabilidade e suas dimensões)' }] },
            ].map((item, index) => (
                <div key={index} className={`bg-gray-100 dark:bg-gray-600 p-6 rounded-lg shadow-md border-l-4 border-emerald-500 dark:border-emerald-300 ${item.title === 'Dimensões da Sustentabilidade' ? 'col-span-full' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-200 mb-3">{item.content}</p>
                    <p className="text-sm italic text-gray-600 dark:text-gray-400">
                        {item.refs.map((ref, i) => (
                            <React.Fragment key={i}>
                                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Referência: {ref.title}</a>
                                {i < item.refs.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            ))}
        </div>
    </section>
);


// 3. Visualização Mídia e Inspiração (Com Abas)
const MidiaView = () => {
    const [activeTab, setActiveTab] = useState('musicas');

    const renderContent = () => {
        switch (activeTab) {
            case 'musicas':
                return (
                    <div className="space-y-4 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 p-6 rounded-lg border border-gray-200 dark:border-gray-500">
                        <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">Reflexão em Ritmo e Poesia</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                <strong className="text-gray-800 dark:text-white">Música 1:</strong> [Título da Música] - Artista.
                                <p className="text-sm italic text-gray-600 dark:text-gray-400">Descrição: [Explique brevemente como a música se relaciona com Globalização, Pobreza ou Corrupção.]</p>
                            </li>
                            <li>
                                <strong className="text-gray-800 dark:text-white">Música 2:</strong> [Título da Música] - Artista.
                                <p className="text-sm italic text-gray-600 dark:text-gray-400">Descrição: [Explique brevemente como a música se relaciona com Sustentabilidade ou Políticas Públicas.]</p>
                            </li>
                            <li>[Adicionar mais sugestões...]</li>
                        </ul>
                    </div>
                );
            case 'videos':
                return (
                    <div className="space-y-4 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 p-6 rounded-lg border border-gray-200 dark:border-gray-500">
                        <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">Documentários e Análises Visuais</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                <strong className="text-gray-800 dark:text-white">Documentário 1:</strong> <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">[Título do Documentário]</a> (Link).
                                <p className="text-sm italic text-gray-600 dark:text-gray-400">Tópico: [Ex: Impactos da Globalização].</p>
                            </li>
                            <li>
                                <strong className="text-gray-800 dark:text-white">Vídeo 2:</strong> <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">[Título do Vídeo/Reportagem]</a> (Link).
                                <p className="text-sm italic text-gray-600 dark:text-gray-400">Tópico: [Ex: Crítica à Corrupção Sistêmica].</p>
                            </li>
                            <li>[Adicionar mais sugestões...]</li>
                        </ul>
                    </div>
                );
            case 'palestras':
                return (
                    <div className="space-y-4 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 p-6 rounded-lg border border-gray-200 dark:border-gray-500">
                        <h3 className="text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">Insights de Especialistas</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                <strong className="text-gray-800 dark:text-white">Palestra 1:</strong> <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">[Título da Palestra]</a> - Palestrante (Link).
                                <p className="text-sm italic text-gray-600 dark:text-gray-400">Foco: [Ex: O Futuro da Sustentabilidade Urbana].</p>
                            </li>
                            <li>
                                <strong className="text-gray-800 dark:text-white">Palestra 2:</strong> <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">[Título do Talk]</a> - Palestrante (Link).
                                <p className="text-sm italic text-gray-600 dark:text-gray-400">Foco: [Ex: Pobreza e Políticas Públicas Inclusivas].</p>
                            </li>
                            <li>[Adicionar mais sugestões...]</li>
                        </ul>
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
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
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
            4. ONGs: Transparência e Cidadania Global
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            ONGs de destaque nacional e internacional em combate à corrupção, transparência, pobreza e proteção ambiental.
        </p>

        <div className="space-y-6">
            {/* Categoria: Combate à Corrupção e Transparência */}
            <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Combate à Corrupção e Transparência</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200 list-disc ml-6">
                    <li><strong>ONG Internacional 1:</strong> <a href="mailto:contato@ong1.org" className="text-blue-500 dark:text-blue-400 hover:underline">contato@ong1.org</a></li>
                    <li><strong>ONG Nacional 1:</strong> <a href="mailto:faleconosco@ongbrasil1.org" className="text-blue-500 dark:text-blue-400 hover:underline">faleconosco@ongbrasil1.org</a></li>
                    <li>[Adicionar mais e-mails/organizações aqui...]</li>
                </ul>
            </div>

            {/* Categoria: Estudos sobre a Pobreza */}
            <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Estudos sobre a Pobreza e Justiça Social</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200 list-disc ml-6">
                    <li><strong>ONG Internacional 2:</strong> <a href="mailto:info@ong2.org" className="text-blue-500 dark:text-blue-400 hover:underline">info@ong2.org</a></li>
                    <li><strong>ONG Nacional 2:</strong> <a href="mailto:ajuda@ongbrasil2.org" className="text-blue-500 dark:text-blue-400 hover:underline">ajuda@ongbrasil2.org</a></li>
                    <li>[Adicionar mais e-mails/organizações aqui...]</li>
                </ul>
            </div>

            {/* Categoria: Proteção Ambiental */}
            <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Proteção e Defesa Ambiental</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200 list-disc ml-6">
                    <li><strong>ONG Internacional 3:</strong> <a href="mailto:office@ong3.org" className="text-blue-500 dark:text-blue-400 hover:underline">office@ong3.org</a></li>
                    <li><strong>ONG Nacional 3:</strong> <a href="mailto:contato@ongbrasil3.org" className="text-blue-500 dark:text-blue-400 hover:underline">contato@ongbrasil3.org</a></li>
                    <li>[Adicionar mais e-mails/organizações aqui...]</li>
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
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            Estudos de caso e iniciativas que demonstraram resultados positivos nas áreas de corrupção, pobreza e meio ambiente.
        </p>

        <div className="space-y-6">
            {/* Exemplo de Experiência 1: Transparência Municipal */}
            <article className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Iniciativa: [Título da Experiência]</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Área: Combate à Corrupção | Local: [Local]</p>
                <p className="text-gray-700 dark:text-gray-200">
                    [INSIRA A DESCRIÇÃO AQUI] Detalhe o problema, a solução implementada e os resultados alcançados. Mantenha o foco no impacto positivo e nas lições aprendidas.
                </p>
            </article>

            {/* Exemplo de Experiência 2: Sustentabilidade Rural */}
            <article className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg border-l-4 border-blue-500 dark:border-blue-400 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Projeto: [Título do Projeto Sustentável]</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Área: Meio Ambiente e Pobreza | Local: [Local]</p>
                <p className="text-gray-700 dark:text-gray-200">
                    [INSIRA A DESCRIÇÃO AQUI] Descreva como a iniciativa promoveu a sustentabilidade e melhorou a qualidade de vida da comunidade.
                </p>
            </article>
            
            {/* Adicionar mais exemplos de Experiências Exitosas */}
        </div>
    </section>
);

// 6. Visualização Referências
const ReferenciasView = () => (
    <section>
        <h2 className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-8 border-b-2 border-blue-500 dark:border-blue-400 pb-2">
            6. Referências e Indicações Bibliográficas
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            Fontes utilizadas para a fundamentação teórica e dos conceitos, seguindo as normas da ABNT.
        </p>

        <div className="space-y-4 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 p-6 rounded-lg border border-gray-200 dark:border-gray-500">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Referências dos Conceitos</h3>
            <ul className="list-disc ml-6 space-y-3 text-sm">
                {[
                    { text: 'FGV. Políticas públicas: o que são, quem faz e como faz?', url: 'https://periodicos.fgv.br/cgpc/announcement/view/328' },
                    { text: 'INFOESCOLA. Diferenças entre Estado e Governo.', url: 'https://www.infoescola.com/direito/diferencas-entre-estado-e-governo/' },
                    { text: 'MUNDO EDUCAÇÃO. Globalização: o que é, como surgiu, fases.', url: 'https://mundoeducacao.uol.com.br/geografia/globalizacao.htm' },
                    { text: 'MUNDO EDUCAÇÃO. Nova Ordem Mundial: o que é, características.', url: 'https://mundoeducacao.uol.com.br/geografia/nova-ordem-mundial.htm' },
                    { text: 'PORTAL DE EDUCAÇÃO AMBIENTAL. Política Pública.', url: 'https://semil.sp.gov.br/educacaoambiental/prateleira-ambiental/politica-publica/' },
                    { text: 'QUERO BOLSA. Nova Ordem Mundial: entenda o que é e principais.', url: 'https://querobolsa.com.br/enem/historia-geral/nova-ordem-mundial' },
                    { text: 'REVISTA BRASILEIRA MULTIDISCIPLINAR. Estado e Governo: Diferença Conceitual e Implicações Práticas na Pós-Modernidade.', url: 'https://revistarebram.com/index.php/revistauniara/article/view/183' },
                    { text: 'SCIELO. Pobreza multidimensional no Brasil: uma análise do período 2004-2015.', url: 'https://www.scielo.br/j/rep/a/xqBvfZ5JqBZHvYqnFMNCcWv/' },
                    { text: 'SCIELO. Unificando os conceitos de corrupção: uma abordagem através da nova metodologia dos conceitos.', url: 'https://www.scielo.br/j/rbcpol/a/VPBTRQmsPqT8KLqJJmcnqpn/?format=html&lang=pt' },
                    { text: 'TODA MATÉRIA. Globalização: o que é, origem, efeitos, vantagens e desvantagens.', url: 'https://www.todamateria.com.br/globalizacao/' },
                    { text: 'UFSM. Pobreza multidimensional: um estudo de caso das privações.', url: 'https://www.ufsm.br/app/uploads/sites/533/2019/05/POBREZA_MULTIDIMENSIONAL.pdf' },
                    { text: 'UNESP. A sustentabilidade e suas dimensões como fundamento da qualidade de vida.', url: 'https://revista.fct.unesp.br/index.php/geografiaematos/article/download/1724/sergiosilva/0' },
                    { text: 'WIKIPÉDIA. Corrupção.', url: 'https://pt.wikipedia.org/wiki/Corrup%C3%A7%C3%A3o' },
                    { text: 'WIKIPÉDIA. Sustentabilidade.', url: 'https://pt.wikipedia.org/wiki/Sustentabilidade' },
                ].map((ref, index) => (
                    <li key={index}>
                        {ref.text} Disponível em: &lt;<a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">{ref.url}</a>&gt;. Acesso em: 17 nov. 2025.
                    </li>
                ))}
            </ul>
            <p className="mt-4 font-semibold text-red-600 dark:text-red-400">
                ATENÇÃO: Lembre-se que o plágio (cópia sem citação/referência) é avaliado com nota ZERO. **Você deve formatar as referências acima no padrão ABNT completo** (sobrenome em caixa alta, ponto, etc.) e garantir que todas as fontes usadas em seu trabalho estejam listadas.
            </p>
        </div>
    </section>
);


// --- COMPONENTE PRINCIPAL ---

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Efeito para aplicar a classe 'dark' ao <html> body baseado no estado
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const projectTitle = "[TÍTULO DO SEU PROJETO AQUI]";
    const projectCourse = "[Nome do Curso/Disciplina]";
    const projectSemester = "[Ano/Semestre]";
    
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomeView title={projectTitle} course={projectCourse} semester={projectSemester} />;
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
                return <HomeView title={projectTitle} course={projectCourse} semester={projectSemester} />;
        }
    };

    const handleNavClick = (pageId) => {
        setCurrentPage(pageId);
        setIsSidebarOpen(false); 
        window.scrollTo(0, 0); 
    };

    // A cor de fundo principal é gerenciada pelo <html> no useEffect, mas o Fallback é útil
    const mainBackgroundClass = 'bg-gray-50 dark:bg-gray-800';

    return (
        <div className={`min-h-screen ${mainBackgroundClass} font-sans antialiased`}>
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
                        <div className="text-2xl font-extrabold text-emerald-500 dark:text-emerald-300 cursor-pointer" onClick={() => setCurrentPage('home')}>
                            SITE CRÍTICO
                        </div>
                    </div>

                    {/* Toggle Dark Mode */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-gray-800 dark:text-yellow-300 focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? <SunIcon /> : <MoonIcon />}
                    </button>
                </nav>
            </header>

            {/* CONTAINER PRINCIPAL: Sidebar + Conteúdo */}
            <div className="md:grid md:grid-cols-[250px_1fr] max-w-6xl mx-auto">
                
                {/* Overlay de Fechamento (Mobile) */}
                {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
                
                {/* SIDEBAR (Menu Lateral Colapsável) */}
                <aside 
                    className={`fixed md:sticky top-16 left-0 z-40 
                                w-64 md:w-full h-[calc(100vh-64px)] 
                                bg-white dark:bg-gray-700 p-4 shadow-xl md:shadow-lg md:rounded-r-xl md:rounded-xl 
                                transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 
                                transition-transform duration-200 ease-in-out`}
                >
                    <nav className="flex flex-col space-y-2">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 border-b dark:border-gray-600 pb-2">Navegação Principal</h3>
                        
                        {navItems.map(item => {
                            const isActive = currentPage === item.id;
                            const colorClass = isActive ? 'text-blue-600 dark:text-blue-300 font-bold' : 'text-gray-800 dark:text-gray-100';

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`p-3 rounded-lg text-left hover:bg-gray-100 dark:hover:bg-gray-600 transition-all flex items-center ${colorClass} ${isActive ? 'bg-blue-500/10 dark:bg-blue-800/20 shadow-sm' : ''}`}
                                >
                                    <NavIcon title={item.icon} />
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
            <footer className="bg-gray-800 dark:bg-gray-900 text-white p-6 text-center mt-6 md:mt-12">
                <p className="text-sm">Desenvolvido para a Atividade Avaliativa | {projectCourse} - {projectSemester}</p>
            </footer>
        </div>
    );
};

export default App;