const form = document.getElementById("form");
const lista = document.getElementById("lista");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function salvarLocalStorage() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function renderizar() {
    lista.innerHTML = "";

    usuarios.forEach((usuario, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${usuario.nome} - ${usuario.email}
            <button onclick="remover(${index})">X</button>
        `;
        lista.appendChild(li);
    });
    document.getElementById("contador").innerText =
        `Total de usuários: ${usuarios.length}`;
}

function remover(index) {
    usuarios.splice(index, 1);
    salvarLocalStorage();
    renderizar();
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    usuarios.push({ nome, email });

    salvarLocalStorage();
    renderizar();

    form.reset();
});

renderizar();
