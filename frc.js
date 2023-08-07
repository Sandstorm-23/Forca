

const header = document.querySelector('#header');





let p1 = ['c','a','p','i','v','a','r','a']
let p2 = ['c','a','v','a','l','o']
let p3 = ['r','a','m','o','m']
let p4 = ['p','i','c','o','l','e']



let tx1 = document.querySelector("#d2")
let tx2 = document.querySelector('#d3')
let tx3 = document.querySelector('#d4')



let v = []
let x = []
let ps = []
let hp = 5 
let pu = ""

function easy(){
  let e1 = ['c','a','s','a']
  let e2 = ['p','o','r','t','a']
  let e3 = ['t','e','l','a']
  let e4 = ['r','a','t','o']

  let ae = [e1,e2,e3,e4]
  let se = (parseInt(Math.random() * 4))
  pu = (ae[se])

  v = []
  x = []

  for (let n in pu) {

    v.push(0)
    x.push (' _')
    
    }
  
  
    tx1.innerHTML = (x.join(''))
    
}

function medio(){
  let m1 = ['b','r','i','l','h','o']
  let m2 = ['t','e','c','l','a','d','o']
  let m3 = ['p','i','n','c','e','i','s']
  let m4 = ['c','o','v','e','i','r','o']

  let am = [m1,m2,m3,m4]
  let sm = (parseInt(Math.random() * 4))
  pu = (am[sm])

  v = []
  x = []

  for (let n in pu) {

    v.push(0)
    x.push (' _')
    
    }
  
  
    tx1.innerHTML = (x.join(''))
    
}

function dificil(){
  let d1 = ['d','e','g','u','s','t','a','d','o','r']
  let d2 = ['a','r','m','a','d','i','l','h','a','s']
  let d3 = ['r','e','f','o','r','m','a','d','a']
  let d4 = ['i','n','t','e','r','f','a','c','e']

  let ad = [d1,d2,d3,d4]
  let sd = (parseInt(Math.random() * 4))
  pu = (ad[sd])

  v = []
  x = []

  for (let n in pu) {

    v.push(0)
    x.push (' _')
    
    }
  
  
    tx1.innerHTML = (x.join(''))
    
}



function enviar() {



let s1 = document.querySelector('#i1')
let ss1 = String(s1.value.toLowerCase())



ps.push(ss1)

if (pu.indexOf(ss1) > -1) {




while (pu.indexOf(ss1) > -1) {

let rs = (pu.indexOf(ss1))
let rs2 = (pu[rs])
pu[rs] = 0
x[rs] = rs2 
tx1.innerHTML = (x.join(" "))
tx2.innerHTML = (`letras usadas: ${ps}`)
s1.value = ""

}
} else {
  s1.value = ""
  tx2.innerHTML = (`letras usadas: ${ps}`)

    hp = hp - 1
   
    document.querySelector("#vid5").src="vidaboll.png";
    if (hp == 3){ 
      document.querySelector("#vid4").src="vidaboll.png"
    
    }else if (hp == 2) {
      document.querySelector("#vid3").src="vidaboll.png"
    } else if (hp == 1) {
      document.querySelector("#vid2").src="vidaboll.png"
    }else if (hp == 0)  {
      document.querySelector("#vid1").src="vidaboll.png"
    }
    
    

}

if (hp == 0) {
alert('Você perdeu, Pagina reiniciada')
location.reload(true)

}else if (JSON.stringify(pu) == JSON.stringify(v)) {
   
    tx1.innerHTML = (` Parabéns você ganhou <br> ${x.join(" ")}`)


}else {

tx2.innerHTML = (hp.join(""))
document.querySelector('#i1').value = ""
}


}


const form = document.querySelector('form');
const svg = document.querySelector('svg');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();

});


function redefinir()  {
  svg.classList.add('hide')

}

button.addEventListener('click', () => {

  const type = form.i1.getAttribute('type');
  if(type === 'string') {
    button.textContent = 'enviar';
    form.i1.setAttribute('type', 'string');
    svg.classList.remove('hide')
  } else {
    button.textContent = 'enviar';
    form.i1.setAttribute('type', 'string');
    svg.classList.add('hide')

  }

  
});


