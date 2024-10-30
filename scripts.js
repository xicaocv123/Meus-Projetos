document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os links dos projetos
    const projectLinks = document.querySelectorAll(".project-description a");

    // Adiciona um evento de clique a cada link
    projectLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            // Exibe uma mensagem de confirmação antes de redirecionar
            const confirmation = confirm("Você será redirecionado para o GitHub. Deseja continuar?");
            if (!confirmation) {
                // Impede o redirecionamento caso o usuário cancele
                event.preventDefault();
            }
        });
    });
});