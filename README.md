# Encurtador de Links

Este projeto é um encurtador de URLs simples e eficiente, desenvolvido para demonstrar habilidades em desenvolvimento web front-end e integração com APIs.

## 🚀 Tecnologias Utilizadas

*   **HTML5**
*   **CSS3**
*   **JavaScript (ES6+)**

## ✨ Funcionalidades

*   **Encurtar URLs**: Converta URLs longas em links curtos.
*   **Consultar Estatísticas**: Obtenha o URL original e o número de visitas de um link encurtado.
*   **Design Responsivo**: Interface adaptável a diferentes tamanhos de tela.

## 🛠️ Como Rodar Localmente

### Pré-requisitos

*   Navegador web moderno.
*   **API de encurtamento de links rodando em `http://localhost:8080`**.

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/thoncoder/encurtador-de-link-fe.git
    ```
2.  **Navegue até o diretório:**
    ```bash
    cd encurtador-de-link-fe
    ```
3.  **Abra `index.html` no seu navegador.**

### Configuração da API

O front-end espera uma API em `http://localhost:8080` com as rotas:
*   `POST /encurtar`
*   `GET /stats/{code}`

## 💡 Como Usar

*   **Encurtar**: Digite a URL no campo e clique "Encurtar". O link encurtado aparecerá.
*   **Consultar**: Digite o código encurtado no campo e clique "Consultar" para ver o URL original e as visitas.
*   
## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
