function createDisciplina(dia, hora, nome, descricao, prof, semestre){
    return `
    <div class="card" id="card">  
    <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">${dia} ${hora}</h6>
        <h5 class="card-title">${nome}</h5>
        <p class="card-text">
        ${descricao}
        </p>
    </div>
    <div class="card-footer">
        <small class="text-muted">Prof: ${prof}</small>
        <small class="text-muted">${semestre} Semestre</small>
    </div>
    </div>
    `
}

let delay = -0.3

document.querySelector("#card").innerHTML =

createDisciplina("Segunda-Feira", "19:00", "Téc. de Prog. Web", 
"Proporcionar aos estudantes da disciplina conhecimentos teóricos e práticos sobre o desenvolvimento de projetos de aplicações baseadas em ambientes Web com PHP.", 
"Toni", "5º "
) + 
createDisciplina("Terça-Feira", "19:00", "Auditoria e Segurança", 
"A disciplina tem como objetivo apresentar os componentes de Segurança da Informação e discutir como devem ser estruturados e aplicados nas organizações.", 
"Paulo", "7º "
) +
createDisciplina("Terça-Feira", "19:00", "Redes II", 
"Consolidar os conhecimentos sobre Roteamento, serviços de sistemas operacionais e mecanismos de segurança em redes de computadores.", 
"Paulo", "5º "
) 
