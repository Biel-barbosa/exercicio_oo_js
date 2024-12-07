class Animal {
    constructor(nome, idade) {
        if (this.constructor === Animal) {
            throw new Error("Não pode instanciar a classe abstrata Animal diretamente!");
        }
        this.nome = nome;
        this.idade = idade;
    }


    fazerSom() {
        throw new Error("Método 'fazerSom' deve ser implementado nas subclasses");
    }

    descricao() {
        return `${this.nome} tem ${this.idade} anos.`;
    }

    
}

class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade); 
    }

    fazerSom() {
        return "Au Au!";
    }
}

class Gato extends Animal {
    constructor(nome, idade) {
        super(nome, idade); 
    }

    fazerSom() {
        return "Miau!";
    }
}

const cachorro1 = new Cachorro("Rex", 5);
const gato1 = new Gato("Mimi", 3);
const cachorro2 = new Cachorro("Bolt", 2);

console.log(cachorro1.descricao()); 
console.log(cachorro1.fazerSom()); 

console.log(gato1.descricao()); 
console.log(gato1.fazerSom()); 

console.log(cachorro2.descricao()); 
console.log(cachorro2.fazerSom()); 
