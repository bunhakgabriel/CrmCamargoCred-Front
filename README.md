# CRM Camargo Cred

## 📖 Sobre o projeto

O **CRM Camargo Cred** é um sistema desenvolvido para auxiliar na gestão de clientes e vendedores de um escritório de crédito consignado. O projeto surgiu a partir da necessidade de centralizar e organizar informações que anteriormente eram mantidas principalmente por meio de arquivos físicos.

A aplicação foi desenvolvida especificamente para atender às necessidades do escritório e já está em funcionamento em ambiente de produção, sendo utilizada em sua rotina de trabalho.

O projeto está em evolução contínua e possui planos para incorporar novas funcionalidades ao longo do tempo, incluindo recursos para **gestão de contratos, gestão financeira** e outras necessidades relacionadas à operação do escritório.




## ✨ Funcionalidades

### 🔐 Autenticação e controle de acesso

* Autenticação utilizando conta Google.
* Restrição de acesso por e-mail autorizado.
* Apenas funcionários previamente autorizados podem acessar o sistema.

### 👥 Gestão de clientes

* Cadastro, edição, visualização e exclusão de clientes.
* Registro de informações pessoais.
* Cadastro de informações do cônjuge.
* Registro de informações bancárias.
* Registro de informações relacionadas ao INSS.
* Cadastro de endereço com preenchimento através da API de CEP dos Correios.
* Associação opcional do cliente a um vendedor responsável.
* Upload e armazenamento de documentos relacionados ao cliente.
* Visualização dos documentos cadastrados.
* Download dos documentos armazenados.

### 👨‍💼 Gestão de vendedores

* Cadastro, edição, visualização e exclusão de vendedores.
* Manutenção da base de vendedores do escritório.
* Disponibilização dos vendedores cadastrados para associação aos clientes.

### 🔗 Relacionamento entre clientes e vendedores

* Associação de clientes a vendedores responsáveis.
* Seleção do vendedor através de uma lista com os vendedores cadastrados.
* Visualização das informações relacionadas ao cliente e ao vendedor.

### 📄 Gestão de documentos

* Upload de documentos vinculados aos clientes.
* Visualização dos documentos armazenados.
* Download dos documentos quando necessário.


## 🛠️ Tecnologias

### Frontend

* **React** — desenvolvimento da interface da aplicação.
* **TypeScript** — tipagem estática e maior segurança durante o desenvolvimento.
* **Tailwind CSS** — estilização e construção da interface.
* **AG Grid React** — exibição e gerenciamento de dados em tabelas.
* **Axios** — comunicação com a API do backend.
* **React Hook Form** — gerenciamento dos formulários.
* **Yup** — validação dos dados dos formulários.
* **Zustand** — gerenciamento de estado da aplicação.
* **TanStack Query** — gerenciamento de requisições, cache e dados provenientes da API.
* **Firebase** — integração com os serviços do Firebase, incluindo autenticação com contas Google.

### Configuração

* **Variáveis de ambiente** — configuração de parâmetros específicos para os diferentes ambientes da aplicação, permitindo utilizar a API localmente durante o desenvolvimento e a API de produção quando publicada.

## 🏗️ Arquitetura

O frontend foi organizado buscando separar as responsabilidades da aplicação e facilitar a reutilização de componentes e a manutenção do código.

A estrutura principal do projeto é organizada da seguinte forma:

```text
src/
├── api/             # Configuração e comunicação com a API
├── componentes/     # Componentes reutilizáveis em diferentes páginas
├── firebase/        # Configurações e integração com o Firebase
├── interfaces/      # Interfaces utilizadas pela aplicação
├── pages/           # Páginas e funcionalidades da aplicação
├── routes/          # Configuração das rotas
├── services/        # Funções responsáveis pelas chamadas aos endpoints da API
├── store/           # Gerenciamento de estado global
├── types/           # Tipagens utilizadas no projeto
└── utils/           # Funções utilitárias
```

### Organização das páginas

Cada página possui sua própria estrutura e pode conter componentes específicos daquela funcionalidade.

```text
pages/
├── Clientes/
│   ├── componentes/
│   └── Clientes.tsx
│
├── Dashboard/
├── Vendedores/
├── cadastro-clientes/
├── cadastro-vendedores/
└── login/
```

Os componentes localizados em `src/componentes` são destinados a elementos reutilizáveis por diferentes páginas da aplicação. Já os componentes dentro de `pages/<pagina>/componentes` são específicos daquela funcionalidade e não precisam fazer parte da estrutura global de componentes.

Essa organização permite manter componentes específicos próximos da funcionalidade que os utiliza, enquanto componentes compartilhados permanecem centralizados e disponíveis para toda a aplicação.


## 🧩 Principais desafios técnicos

### 📊 Integração do AG Grid com a API

Um dos desafios do desenvolvimento do frontend foi integrar o **AG Grid** ao backend de forma eficiente para trabalhar com os dados de clientes e vendedores.

A implementação envolveu recursos como **paginação, filtros e carregamento dos dados através da API**, evitando a necessidade de carregar todos os registros de uma só vez.

### ⚡ Gerenciamento dos dados com TanStack Query

Outro ponto importante foi utilizar o **TanStack Query** para gerenciar os dados provenientes da API, trabalhando com recursos como **cache, controle de carregamento, atualização e invalidação dos dados**.

A integração entre o TanStack Query, os serviços responsáveis pelas chamadas à API e as grids permitiu manter os dados apresentados na interface sincronizados com o backend, além de proporcionar um gerenciamento mais eficiente das requisições realizadas pela aplicação.

## 👨‍💻 Minha atuação no projeto

Fui responsável pelo desenvolvimento completo do frontend da aplicação, desde a implementação das interfaces e funcionalidades até sua integração com o backend.

Diferentemente de projetos em que as decisões sobre o produto partiram de mim, neste projeto o desenvolvimento foi orientado pelas necessidades e requisitos apresentados pelo escritório. Ao longo da utilização do sistema, novos requisitos e ajustes foram identificados, e fui responsável por analisar essas necessidades e implementá-las na aplicação.

Minha atuação incluiu:

- Desenvolvimento completo do frontend utilizando React e TypeScript.
- Implementação das interfaces e fluxos de utilização do sistema.
- Desenvolvimento dos formulários de cadastro e gerenciamento de clientes e vendedores.
- Implementação da autenticação e controle de acesso no frontend.
- Integração com a API do backend.
- Implementação das tabelas, paginação e filtros utilizando AG Grid.
- Gerenciamento dos dados e requisições utilizando TanStack Query.
- Implementação do upload e gerenciamento dos documentos na interface.
- Adaptação e evolução do sistema conforme novos requisitos e necessidades do escritório.
- Correção e ajustes de funcionalidades conforme o sistema passou a ser utilizado em produção.

