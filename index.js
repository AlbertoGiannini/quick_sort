let delay = 1600/1000;
let time_comparacao = 400;
let flag = 0;
var size = document.querySelector("#size").value;
var inpt = document.querySelector("#input").value;

$('input[type=range]')
    .popup(

    );

function changeBlocks() {   
    let k = inpt.split(",");
    let innhtml = " ";
    for (let i = 0; i < k.length; i++) {
        innhtml += `<div class="sc-jRQAMF eRnhep" style="order: 0; id=${i} >${k[i]}"</div>`;
    }
    document.querySelector(".horzx .nums").innerHTML = innhtml;
}

async function quickSortTransfer(vet,esq,dir) {
    var i, j ,x , temp;

    x = vet[(esq + dir) / 2]; //Pivo
    i = esq;
    j = dir;
    do{
        while(x > vet[i]) i++;
        while(x < vet[j]) j--;
        if(i <= j)
        {
            temp = vet[i];
            vet[i] = vet[j];
            vet[j] = temp;
            i++;
            j--;
        }
    } while(i <= j);
    if(esq < j) quickSortTransfer(vet, esq, j);
    if(i < dir) quickSortTransfer(vet, i, dir);

}

function changeinput(e) {
    let k = e.target.value;
    k = k.trim();
    let flag = 0
      if(k.substring(k.length - 1) === ",") {
        k = k.substring(0, k.length - 1);
        flag = 1;
    }
    k = k.replace(/^,+|,+$/g, ''); 
    if(k === "") {
        alert("vc não vai bugar meu programa");
        size = 0;
        document.querySelector(".horzx .nums").innerHTML = "";
        return;
    }
    let arr = k.split(",");
    let valor = "";
    let innhtml = "";   
    let p = 0; 
    for(let i = 0; i < arr.lenght; i++) {
        if(!isNaN(arr[i])) {
            if(i === 0){
                valor = "" + arr[i];
            }else {
                valor += "," + arr[i];
            }
            p += 1;
            size = p;

            innhtml += `<div class="sc-jRQAMF eRnhep" style="order: 0; id=${i} >${k[i]}"</div>`;

        }else {
            break;
        }
        
    }
    if(flag === 1 ) {
        valor += ",";
    }
    inpt = valor;
    if(inpt === "") {
        size = "" + 0;
    }
    document.querySelector(".horzx .nums").innerHTML = innhtml;
} 


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}



