class BancoDeDados {
    constructor() {
        this.alunos = [];
        this.professores = [];
    }

    getAlunos () {
        return this.alunos;
    }

     getAlunoPorId (id) {
        return this.alunos.filter((aluno) => aluno.id == id);
    }
    addAluno (aluno) {
        this.alunos.push(aluno);
    }

    getProfessores () {
        return this.professores;
    }
     getProfessoresPorId (id) {
        
    }
    addProfessor (professor) {
        this.professores.push(professor);
    }
}

module.exports = new BancoDeDados();
