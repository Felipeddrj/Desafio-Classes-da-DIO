
class Menuheroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }  
    atacar (){
        if (this.tipo.toLowerCase() === "guerreiro"){
        console.log(`O ${this.tipo} atacou com a espada`)
    }   else if(this.tipo.toLowerCase() === "mago"){
        console.log(`O ${this.tipo} atacou com magia!`)
    }   else if(this.tipo.toLowerCase() === "monge"){
        console.log(`O ${this.tipo} atacou usando artes marciais!`)
    }   else if(this.tipo.toLowerCase() === "ninja"){
        console.log(`O ${this.tipo} atacou com shuriken!`)
    }   else {
        console.log("Escolha uma classe válida")
    }
    
}    
}
let heroi = new Menuheroi("Sir Felipe", 24, "Ninja")
heroi.atacar()
   
