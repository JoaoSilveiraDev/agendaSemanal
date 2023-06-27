tarefa1 = []
tarefa2 = []
tarefa3 = []
tarefa4 = []
tarefa5 = []
tarefa6 = []
tarefa7 = []


//////////////////////////////////////////////////////////////////////////////////////

document.getElementById("segunda").addEventListener("dblclick", ()=>{
    var texto = prompt("Digite suas tarefas de hoje...")
    var container = document.getElementById("textoSegunda")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(texto))
    container.appendChild(elemento)
    tarefa1.push(texto)
})

document.getElementById("terca").addEventListener("dblclick", ()=>{
    var texto = prompt("Digite suas tarefas de hoje...")
    var container = document.getElementById("textoTerca")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(texto))
    container.appendChild(elemento)
    tarefa2.push(texto)
    localStorage.setItem(1, tarefa2)
    
})

document.getElementById("quarta").addEventListener("dblclick", ()=>{
    var texto = prompt("Digite suas tarefas de hoje...")
    var container = document.getElementById("textoQuarta")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(texto))
    container.appendChild(elemento)
    tarefa3.push(texto)
    localStorage.setItem(2, tarefa3)
    
})

document.getElementById("quinta").addEventListener("dblclick", ()=>{
    var texto = prompt("Digite suas tarefas de hoje...")
    var container = document.getElementById("textoQuinta")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(texto))
    container.appendChild(elemento)
    tarefa4.push(texto)
    localStorage.setItem(3, tarefa4)
    
})

document.getElementById("sexta").addEventListener("dblclick", ()=>{
    var texto = prompt("Digite suas tarefas de hoje...")
    var container = document.getElementById("textoSexta")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(texto))
    container.appendChild(elemento)
    tarefa5.push(texto)
    localStorage.setItem(4, tarefa5)
    
})

document.getElementById("sabado").addEventListener("dblclick", ()=>{
    var texto = prompt("Digite suas tarefas de hoje...")
    var container = document.getElementById("textoSabado")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(texto))
    container.appendChild(elemento)
    tarefa6.push(texto)
    localStorage.setItem(5, tarefa6)
    
})

document.getElementById("domingo").addEventListener("dblclick", ()=>{
    var texto = prompt("Digite suas tarefas de hoje...")
    var container = document.getElementById("textoDomingo")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(texto))
    container.appendChild(elemento)
    tarefa7.push(texto)
    localStorage.setItem(6, tarefa7)
    
})

/////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("botao1").addEventListener("click", ()=>{
    localStorage.setItem(0, JSON.stringify(tarefa1))
})
document.getElementById("botao2").addEventListener("click", ()=>{
    localStorage.setItem(1, JSON.stringify(tarefa2))
})
document.getElementById("botao3").addEventListener("click", ()=>{
    localStorage.setItem(2, JSON.stringify(tarefa3))
})
document.getElementById("botao4").addEventListener("click", ()=>{
    localStorage.setItem(3, JSON.stringify(tarefa4))
})
document.getElementById("botao5").addEventListener("click", ()=>{
    localStorage.setItem(4, JSON.stringify(tarefa5))
})
document.getElementById("botao6").addEventListener("click", ()=>{
    localStorage.setItem(5, JSON.stringify(tarefa6))
})
document.getElementById("botao7").addEventListener("click", ()=>{
    localStorage.setItem(6, JSON.stringify(tarefa7))
})

/////////////////////////////////////////////////////////////////////////////////////////
addEventListener("load", ()=>{
    if(localStorage.getItem(0) != null){
    //segunda
    var container = document.getElementById("textoSegunda")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(localStorage.getItem(0)))
    container.appendChild(elemento)
    }

    if(localStorage.getItem(1) != null){
    //terca
    var container = document.getElementById("textoTerca")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(localStorage.getItem(1)))
    container.appendChild(elemento)
    }

    if(localStorage.getItem(2) != null){
    //quarta
    var container = document.getElementById("textoQuarta")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(localStorage.getItem(2)))
    container.appendChild(elemento)
    }

    if(localStorage.getItem(3) != null){
    //quinta
    var container = document.getElementById("textoQuinta")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(localStorage.getItem(3)))
    container.appendChild(elemento)
    }
    
    if(localStorage.getItem(4) != null){
    //sexta
    var container = document.getElementById("textoSexta")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(localStorage.getItem(4)))
    container.appendChild(elemento)
    }

    if(localStorage.getItem(5) != null){
    //sabado
    var container = document.getElementById("textoSabado")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(localStorage.getItem(5)))
    container.appendChild(elemento)
     }
    if(localStorage.getItem(6) != null){
    //domingo
    var container = document.getElementById("textoDomingo")
    var elemento = document.createElement("p")
    elemento.appendChild(document.createTextNode(localStorage.getItem(6)))
    container.appendChild(elemento)
    }

})
/////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("botao11").addEventListener("click", ()=>{
    localStorage.setItem(0, "")
    location.reload()
})
document.getElementById("botao12").addEventListener("click", ()=>{
    localStorage.setItem(1, "")
    location.reload()
})
document.getElementById("botao13").addEventListener("click", ()=>{
    localStorage.setItem(2, "")
    location.reload()
})
document.getElementById("botao14").addEventListener("click", ()=>{
    localStorage.setItem(3, "")
    location.reload()
})
document.getElementById("botao15").addEventListener("click", ()=>{
    localStorage.setItem(4, "")
    location.reload()
})
document.getElementById("botao16").addEventListener("click", ()=>{
    localStorage.setItem(5, "")
    location.reload()
})
document.getElementById("botao17").addEventListener("click", ()=>{
    localStorage.setItem(6, "")
    location.reload()
})