import Card from "@/components/Card"

export default function Portfolio() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            <Card title='Sistema de gerenciamento e automação de NFS-e' desenvolvimento={true} description='Sistema de gerenciamento e automação de NFS-e, com integração com a API SOAP da Nota Carioca, permitindo a emissão, cancelamento e consulta de notas fiscais eletrônicas e exportação para planilha Excel' tech={["Python", "Django", "PostgreSQL"]} mostrar={false} repo="#" image="/images/cards/APIestagio.png"
            />

            <Card title="API de Gestão de Estágios" description="API REST para gestão de estágios, com autenticação por token, controle de acesso por perfis (Aluno, Secretaria e Coordenador), cadastro de documentação e fluxo de aprovação e reprovação de documentos." tech={["Python", "Django", "SQLite"]} mostrar={true} repo="https://github.com/Projetos-de-Extensao/PBE_26.1_8002_IV.git" image="/images/cards/APIestagio.png"
            />

            <Card title="Site Portfólio" description="Site de portfólio pessoal criado para apresentar meus projetos, habilidades e experiências como desenvolvedor." tech={["TypeScript", "React", "Next.js", "Tailwind CSS"]} mostrar={true} repo="https://github.com/Heitor65/SitePortfolio.git" image="/images/cards/portifolio.png"
            />

            <Card title="API de Feriados Brasileiros" description="API REST que retorna exclusivamente feriados com respaldo jurídico nacional e estadual para setor privado e público, diferenciando feriados fixos, móveis baseados na Páscoa e datas específicas por UF." tech={["Python", "Flask", "Pydantic"]} mostrar={true} repo="https://github.com/Heitor65/br-holidays-api.git" image="/images/cards/br_holidays2.png"
            />

        </div>
    );
}