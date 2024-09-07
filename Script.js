document.getElementById('cpfForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cpf = document.getElementById('cpf').value;
    
    if (cpf === '') {
        alert('Por favor, insira um CPF válido.');
        return;
    }

    // Simulação de busca das informações do candidato
    const candidatos = {
        "12345678901": {
            statusInscricao: "Homologada",
            localProva: "Universidade X - Sala 12",
            statusRecursos: "Sem recursos",
            statusMatricula: "Não realizada"
        },
        "09876543210": {
            statusInscricao: "Aguardando confirmação",
            localProva: "Universidade Y - Sala 5",
            statusRecursos: "Em análise",
            statusMatricula: "Matrícula realizada"
        }
    };

    if (candidatos[cpf]) {
        document.getElementById('statusInscricao').innerText = candidatos[cpf].statusInscricao;
        document.getElementById('localProva').innerText = candidatos[cpf].localProva;
        document.getElementById('statusRecursos').innerText = candidatos[cpf].statusRecursos;
        document.getElementById('statusMatricula').innerText = candidatos[cpf].statusMatricula;

        document.getElementById('info').classList.remove('info-hidden');
        document.getElementById('info').style.display = 'block';
    } else {
        alert('CPF não encontrado. Por favor, verifique se está correto.');
    }
});
