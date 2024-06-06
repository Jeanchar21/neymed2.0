var idp = 0
var nome = []
var nomesocial = []
var dtnf = []
var dtnasc = []
var cpnj = []
var rg = []
var sexo = []
var tel = []
var logra = []
var bair = []
var complem = []
var cdd = []
var uf = []


if (localStorage.hasOwnProperty("iduser")) {
    idp = JSON.parse(localStorage.getItem("iduser"))
    idp++
}

document.querySelector('input#idus').value = idp

if (localStorage.hasOwnProperty("nomes")){
    nome = JSON.parse(localStorage.getItem("nomes"))
}

if (localStorage.hasOwnProperty("nomesocial")){
    nomesocial = JSON.parse(localStorage.getItem("nomesocial"))
}

if (localStorage.hasOwnProperty("dtnf")){
    dtnf = JSON.parse(localStorage.getItem("dtnf"))
}


if (localStorage.hasOwnProperty("dtnasc")){
    dtnasc = JSON.parse(localStorage.getItem("dtnasc"))
}

if (localStorage.hasOwnProperty("cpf")){
    cpnj = JSON.parse(localStorage.getItem("cpf"))
}

if (localStorage.hasOwnProperty("rg")){
    rg = JSON.parse(localStorage.getItem("rg"))
}

if (localStorage.hasOwnProperty("sexo")){
    sexo = JSON.parse(localStorage.getItem("sexo"))
}

if (localStorage.hasOwnProperty("tel")){
    tel = JSON.parse(localStorage.getItem("tel"))
}

if (localStorage.hasOwnProperty("logra")){
    logra = JSON.parse(localStorage.getItem("logra"))
}

if (localStorage.hasOwnProperty("bairro")){
    bair = JSON.parse(localStorage.getItem("bairro"))
}

if (localStorage.hasOwnProperty("complem")){
    complem = JSON.parse(localStorage.getItem("complem"))
}

if (localStorage.hasOwnProperty("cdd")){
    cdd = JSON.parse(localStorage.getItem("cdd"))
}

if (localStorage.hasOwnProperty("uf")){
    uf = JSON.parse(localStorage.getItem("uf"))
}

//#region Máscaras de Input

var maskcpf = document.querySelector('input#cpf')
var cpfnjchk = document.getElementsByName('cpfr')
var nmcp = document.getElementById('cpfc')
var verifcp = 'CPF'
var cpfipt = document.getElementById('cpf')

function check() {
    if (cpfnjchk[0].checked){
        maskcpf.value = ''
        maskcpf.setAttribute('placeholder', "___.___.___-__")
        verifcp = 'CPF'
        nmcp.innerHTML = 'CPF'
    }else if (cpfnjchk[1].checked){
        maskcpf.value = ''
        maskcpf.setAttribute('placeholder', "__.___.___/____-__")
        nmcp.innerHTML = 'CNPJ'
        verifcp = "CNPJ"
    }
}

    maskcpf.addEventListener('input', (e) => {
    if (verifcp === 'CPF'){
           let validseq = maskcpf.value.replace(/\D/g, '').substring(0,11)
           let seqcpf = validseq.split("")
           let cpfform = ""
           if (seqcpf.length > 0){
            cpfform += `${seqcpf.slice(0,3).join("")}`
           }
           if (seqcpf.length > 3)
           {
            cpfform += `.${seqcpf.slice(3,6).join("")}`
           }
           if (seqcpf.length > 6)
           {
            cpfform += `.${seqcpf.slice(6,9).join("")}`
           }
           if (seqcpf.length > 9)
           {
            cpfform += ` - ${seqcpf.slice(9,11).join("")}`
           }
           maskcpf.value = cpfform

    }else if (verifcp === 'CNPJ'){

           let validseq = maskcpf.value.replace(/\D/g, '').substring(0,14)
           let seqcnpj = validseq.split("")
           let cnpjform = ""
           if (seqcnpj.length > 0){
            cnpjform += `${seqcnpj.slice(0,2).join("")}`
           }
           if (seqcnpj.length > 2)
           {
            cnpjform += `.${seqcnpj.slice(2,5).join("")}`
           }
           if (seqcnpj.length > 5)
           {
            cnpjform += `.${seqcnpj.slice(5,8).join("")}`
           }
           if (seqcnpj.length > 8)
           {
            cnpjform += `/${seqcnpj.slice(8,12).join("")}`
           }
           if (seqcnpj.length > 12)
           {
            cnpjform += ` - ${seqcnpj.slice(12,14).join("")}`
           }
           maskcpf.value = cnpjform
    }
    })

var maskrg = document.querySelector('input#rg')

maskrg.addEventListener('input', () => {
    let validrg = maskrg.value.replace(/\D/g, "").substring(0,8)

    let seqrg = validrg.split("")

    let rgform = ""

    if (seqrg.length > 0){
        rgform += `${seqrg.slice(0,2).join("")}`
    }
    if (seqrg.length > 2){
        rgform += `.${seqrg.slice(2,5).join("")}`
    }
    if (seqrg.length > 5){
        rgform += `.${seqrg.slice(5,8).join("")}`
    }

    maskrg.value = rgform

})

var masktel = document.querySelector('input#tel')

masktel.addEventListener('keypress', () => {
    let validtel = masktel.value.replace(/\D/g, "").substring(0,11)
    let seqtel = validtel.split("")
    let telform = ""

    if(seqtel.length > 0){
        telform += `(${seqtel.slice(0,2).join("")}`
    }
    if(seqtel.length > 1){
        telform += `) ${seqtel.slice(2,7).join("")}`
    }
    if(seqtel.length > 7){
        telform += ` - ${seqtel.slice(7,11).join("")}`
    }

    masktel.value = telform
})

//#endregion


let inputnome = document.getElementById('nomeusu')
let inputnmsc = document.getElementById('nomesoc')
let inputcpf = document.getElementById('cpf')
let inputrg = document.querySelector('input#rg')
let inputsex = document.querySelector('#sex')
inputsex.value = 'undefined'
let inputtel = document.querySelector('input#tel')
let inputlog = document.getElementById('log')
let inputbairro = document.querySelector('input#bairro')
let inputcomp = document.querySelector('input#comp')
let inputcdd = document.querySelector('input#cdd')
let inputuf = document.querySelector('select#uf')

//#region Métodos da tela de cadastro

function finalizar() {
    let inputdtnasc = new Date (document.querySelector('input#dtnas').value)
    if (inputnome.value == '' || maskcpf.value.length < 16 || inputrg.value.length < 10 || inputdtnasc == 'Invalid Date') {
        window.alert('Dados incompletos, por favor preencha os dados obrigatórios')
    }else {

        nome.push(inputnome.value)
        nomesocial.push(inputnmsc.value)
        var novadt = new Date(document.getElementById('dtnas').value)
        var ano = novadt.getFullYear();
        var mes = novadt.getMonth()+1

        if (mes < 10) {
            mes = '0' + mes
        }
        var dia = novadt.getUTCDate();
        if(dia < 10) {
            dia = '0' + dia
        }
        var datadocaso = ano + "-" + mes + "-" + dia;
        dtnf.push(datadocaso)
        let nasc = inputdtnasc.getUTCDate() + "/" + (inputdtnasc.getMonth() + 1) + "/" + inputdtnasc.getFullYear()
        dtnasc.push(nasc)
        cpnj.push(maskcpf.value)
        rg.push(inputrg.value)
        sexo.push(inputsex.value)
        tel.push(inputtel.value)
        logra.push(inputlog.value)
        bair.push(inputbairro.value)
        complem.push(inputcomp.value)
        cdd.push(inputcdd.value)
        uf.push(inputuf.value)

        localStorage.setItem("iduser", JSON.stringify(idp))
        localStorage.setItem("nomes", JSON.stringify(nome))
        localStorage.setItem("nomesocial", JSON.stringify(nomesocial))
        localStorage.setItem("dtnf", JSON.stringify(dtnf))
        localStorage.setItem("dtnasc", JSON.stringify(dtnasc))
        localStorage.setItem("cpf", JSON.stringify(cpnj))
        localStorage.setItem("rg", JSON.stringify(rg))
        localStorage.setItem("sexo", JSON.stringify(sexo))
        localStorage.setItem("tel", JSON.stringify(tel))
        localStorage.setItem("logra", JSON.stringify(logra))
        localStorage.setItem("bairro", JSON.stringify(bair))
        localStorage.setItem("complem", JSON.stringify(complem))
        localStorage.setItem("cdd", JSON.stringify(cdd))
        localStorage.setItem("uf", JSON.stringify(uf))

        window.alert(`Usuário cadastrado com sucesso! ID: ${idp}`)
        window.open('Registro.html', '_self')
    }
}

function cancelar() {
    window.open('Registro.html', '_self')
}

//#endregion