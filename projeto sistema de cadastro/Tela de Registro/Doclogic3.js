    //#region check infos
    var idp = 0
    var idlimit = 0
    var nome = []
    var nomesocial = []
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
        idlimit = JSON.parse(localStorage.getItem("iduser"))
    }

    if (localStorage.hasOwnProperty("nomes")){
        nome = JSON.parse(localStorage.getItem("nomes"))
    }

    if (localStorage.hasOwnProperty("nomesocial")){
        nomesocial = JSON.parse(localStorage.getItem("nomesocial"))
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

    //#endregion

    //#region search bar
    var sugestoes = []
    const searchWreapper = document.querySelector('.search')
    const inputpesq = searchWreapper.querySelector('input')
    const sugestBox = searchWreapper.querySelector('.list')
    const configSearch = document.querySelector('input#searchnome')

    function Config(){
        if (configSearch.checked == true){
            searchWreapper.style.display = 'inline-flex'
        }else{
            searchWreapper.style.display = 'none'
        }
    }

    if (localStorage.hasOwnProperty("nomes")){
        sugestoes = JSON.parse(localStorage.getItem("nomes"))
    }

    inputpesq.onkeyup = (e) => {
        let userData = e.target.value
        let emptyArray = []

        if (userData) {
            emptyArray = sugestoes.filter((data)=>{
                return data.toLocaleLowerCase().indexOf(userData.toLowerCase() > -1)
            })

            emptyArray = emptyArray.map((data)=>{
                return data = `<li>${data}</li>`
            })
            searchWreapper.classList.add('active')
            ShowSuggestions(emptyArray)
            let allList = sugestBox.querySelectorAll('li')
            for (let i = 0; i < allList.length; i++) {
                allList[i].setAttribute('onclick', 'select(this)')
            }

            if (e.key == 'Enter'){
                if(userData){
                    let allList = sugestBox.querySelectorAll('li')
                    select(allList[0])
                }
            }
    
            if (e.key == 'Escape'){
                searchWreapper.classList.remove('active')
            }
        }else{
            searchWreapper.classList.remove('active')
        }
    }

    function select(element){
        let selectData = element.textContent
        inputpesq.value = selectData

        if(selectData){
            document.querySelector('input#idb').value = nome.indexOf(selectData)
            if(nome.indexOf(selectData) === -1){
                document.querySelector('input#idb').value = ''
            }
        }
    
        searchWreapper.classList.remove('active')
    }
    
    function ShowSuggestions(list){
        let listData
        if(!list.length){
            userData = inputpesq.value
            listData = `<li>${userData}</li>`
        }else{
            listData = list.join('')
        }
        sugestBox.innerHTML = listData
    }
    //#endregion

function Buscar() {
    if (document.querySelector('input#idb').value == ''){
        if(inputpesq.value.length !== 0){
            window.alert('Não há nenhum registro de ID usuário com este nome')
        }else{
        window.alert('Digite o número ID desejado')
        }
    }else{
        idp = Number (document.querySelector('input#idb').value)

        if (idp > idlimit){
            window.alert('Não há nenhum registro com este ID')

        } else {
            document.querySelector('section#result').style.display='block'
            let inputnome = document.getElementById('nomeusu')
            let inputnmsc = document.getElementById('nomesoc')
            let inputdtnasc = document.querySelector('input#dtnas')
            let inputcpf = document.querySelector('input#cpf')
            let inputrg = document.querySelector('input#rg')
            let inputsex = document.querySelector('#sex')
            let inputtel = document.querySelector('input#tel')
            let inputlog = document.querySelector('input#log')
            let inputbairro = document.querySelector('input#bairro')
            let inputcomp = document.querySelector('input#comp')
            let inputcdd = document.querySelector('input#cdd')
            let inputuf = document.querySelector('#ufa')

            var labelcpf = document.querySelector('label#cpfc')
            if (cpnj[idp].length > 16){
                labelcpf.innerHTML = "CNPJ"
            }else if (cpnj[idp].length == 16){
                labelcpf.innerHTML = "CPF"
            }

            inputnome.value = nome[idp]
            inputnmsc.value = nomesocial[idp]
            inputdtnasc.value = dtnasc[idp]
            inputcpf.value = cpnj[idp]
            inputrg.value = rg[idp]
            inputsex.value = sexo[idp]
            inputtel.value = tel[idp]
            inputlog.value = logra[idp]
            inputbairro.value = bair[idp]
            inputcomp.value = complem[idp]
            inputcdd.value = cdd[idp]
            inputuf.value = uf[idp]
        }
    }
}