const API_LINK="http://localhost:8080";

const formEncurtar = document.getElementById("encurtar-link");
const create_link_result = document.getElementById("create-link-result");
formEncurtar.addEventListener('submit', async (event)=> {
    event.preventDefault();
    const originalUrl = document.getElementById("originalUrl").value;

    try {
        const response = await fetch(API_LINK+"/encurtar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ originalUrl })
        });
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        const urlEncurtada = document.getElementById("urlEncurtada");
        urlEncurtada.innerText = data.urlEncurtada;
        create_link_result.style.display = "flex";
    } catch (error) {
        console.error(error);
    }
});


const formConsultar = document.getElementById("consultar-link");
const consulta_resultado = document.getElementById("consulta-resultado");
formConsultar.addEventListener('submit', async (event)=> {
    event.preventDefault();

    // resetar
    document.getElementById("consultaErro").style.display = "none";
    consulta_resultado.style.display = "none";


    const code = document.getElementById("code").value;
    try {
        const response = await fetch(API_LINK+"/stats/"+code);
        const data = await response.json();
        if (data.code == null) {
            throw new Error(404)
        }
        const linkConsulta = document.getElementById("linkConsulta");
        const visitasConsulta = document.getElementById("visitasConsulta");
        linkConsulta.innerText = data.originalUrl;
        visitasConsulta.innerText = data.visitas;
        consulta_resultado.style.display = "block";
    } catch (error) {
        if (error.message = 404) {
            document.getElementById("consultaErro").style.display = "block";
            return;
        }
        console.error(error);
    }

});