# Projeto Animalec - Tarefa 3.1b

## Descrição
Este projeto implementa a estrutura baseada em HTML5 para o sistema Animalec, uma plataforma de aprendizagem sobre animais, incluindo um back-office de administração.

## Estrutura do Projeto

```
Tarefa_3.1b/
├── index.html              # Página principal do website
├── admin/
│   ├── login.html         # Página de login do back-office
│   └── dashboard.html     # Painel de administração
├── css/
│   ├── styles.css         # Estilos da página principal
│   └── admin.css          # Estilos do back-office
├── js/
│   ├── admin-login.js     # Funcionalidade do login
│   └── admin.js           # Funcionalidade do dashboard
└── README.md              # Este ficheiro
```

## Funcionalidades

### Página Principal (index.html)
- Estrutura semântica HTML5
- Navegação principal
- Secções para animais, quizzes, especialistas e patrocinadores
- Design responsivo

### Back-office (admin/)
- **Login**: Sistema de autenticação simples (user: admin, password: admin123)
- **Dashboard**: Painel com estatísticas gerais
- **Gestão de Entidades**:
  - Animais
  - Utilizadores
  - Quizzes
  - Questões
  - Patrocinadores (nova entidade)
  - Especialistas (nova entidade)

## Como Usar

1. **Abrir a página principal**: Abra `index.html` no navegador
2. **Aceder ao back-office**: Clique em "Admin" na navegação ou aceda diretamente a `admin/login.html`
3. **Login**: Use as credenciais:
   - Utilizador: admin
   - Password: admin123
4. **Navegar no back-office**: Use o menu lateral ou superior para aceder às diferentes secções

## Características Técnicas

- **HTML5 Semântico**: Uso adequado de elementos semânticos (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`)
- **CSS3**: Estilos modernos com flexbox e grid
- **JavaScript**: Funcionalidade interativa sem dependências externas
- **Design Responsivo**: Adaptável a diferentes tamanhos de ecrã
- **Acessibilidade**: Estrutura clara e navegação consistente

## Entidades Adicionais Implementadas

### Patrocinadores
- Gestão de informações de contacto
- Ligação aos animais patrocinados
- Estado ativo/inativo

### Especialistas
- Informações de contacto e qualificações
- Áreas de especialidade
- Estado ativo/inativo

## Notas Importantes

- Este é um protótipo funcional para demonstração da estrutura HTML5
- Os dados são estáticos e os formulários não persistem informação
- O sistema de login é básico e serve apenas para demonstração
- Para produção, seria necessário implementar:
  - Backend com base de dados
  - Sistema de autenticação seguro
  - Validação de dados
  - Persistência de informação

## Estrutura Semântica HTML5

O projeto utiliza elementos semânticos apropriados:
- `<header>`: Para cabeçalhos de página e secções
- `<nav>`: Para navegação principal e secundária
- `<main>`: Para conteúdo principal
- `<section>`: Para agrupar conteúdo temático
- `<article>`: Para conteúdo independente
- `<aside>`: Para navegação lateral no back-office
- `<footer>`: Para informações de rodapé

Esta estrutura semântica melhora a acessibilidade, SEO e manutenibilidade do código.