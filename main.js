const formone=document.getElementById('formone')
const names=document.getElementById('name')
const degree=document.getElementById('degree')
const errornum=document.getElementById('errornum')

formone.addEventListener('submit',function(e) {
  e.preventDefault()

  if (Number(degree.value)<50 || Number(degree.value)>100) {
    errornum.classList.add('bbbl')
    setTimeout(function () {errornum.classList.remove('bbbl')},5000)
  }else {
    let a={
      name: null,
      degree: null,
    }
    a.name=names.value
    a.degree=Number(degree.value)
    
    fetch('https://script.google.com/macros/s/AKfycbyBj3zZgAEQ38LmOf7UH_NwiGfmI6LrjXyhUnY7ELPPGyZQ1zaHLyQLyP6o5mkkjBPG/exec',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(a)
    }).then(data => data.json()).then(data=> console.log(data))
  }
})






