const buttonTheme = document.getElementById('buttonTheme')
const redondoTheme = document.getElementById('redondoTheme')

/*body*/ 
const body = document.getElementById('body')

/*containerOfertas*/
const containerOfertas = document.getElementById('containerOfertas')

/*cardProductOferta*/ 
const cardProductOferta = document.querySelectorAll('.card-product-oferta');

/*cardProductOferta*/ 

const cardProduct = document.querySelectorAll('.card-product');

/*menu desplegable*/
const menuDesplegable = document.getElementById('menuDesplegable')

/*boton menu*/ 
const buttonMenu = document.getElementById('buttonMenu')


redondoTheme.addEventListener('click',()=>{
    moverFuncion()
})



function moverFuncion(){
     /*TEMA EN NEGRO*/ 
    redondoTheme.style.left= '72%'
    redondoTheme.style.transition= '2s'
    redondoTheme.style.backgroundColor='rgb(146, 146, 146)'

    /*button theme*/
    buttonTheme.style.backgroundColor='black'
   
    /*body*/
    body.style.backgroundColor='#454545' 
    body.style.color='#F9F5F6' 
    body.style.transition= '1s'

  
    /*containerOfertas */
    containerOfertas.style.backgroundColor = '#454545' 
    containerOfertas.style.transition= '1s'
    

     /*cardProduct*/

     cardProduct.forEach(elemento => {
        elemento.style.backgroundColor = '#272829' 
        elemento.style.transition= '1s'
        // Cambia el color a azul (puedes usar cualquier color válido)
      });
   /*cardProductOferta*/
      cardProductOferta.forEach(elemento => {
        elemento.style.backgroundColor = '#272829' // Cambia el color a azul (puedes usar cualquier color válido)
 
      });
   
      menuDesplegable.style.backgroundColor='#272829'

console.log(redondoTheme.offsetLeft)
        /*TEMA EN BLANCO*/ 
    if(redondoTheme.offsetLeft == 194){
        redondoTheme.style.left= '51%'
        redondoTheme.style.backgroundColor='white'

        buttonTheme.style.backgroundColor='rgb(146, 146, 146)'
            /*body*/
        body.style.backgroundColor='#F9F5F6' 
        body.style.transition= '2s'
        body.style.color= 'black'
         /*containerOfertas */
    containerOfertas.style.backgroundColor = '#F9F5F6' 
  

    cardProductOferta.forEach(elemento => {
        elemento.style.backgroundColor = 'rgb(233, 233, 233)' 
      });

      cardProduct.forEach(elemento => {
        elemento.style.backgroundColor = 'rgb(233, 233, 233)'
        elemento.style.transition= '1s' 
      });

      menuDesplegable.style.backgroundColor='rgb(233, 233, 233)'

       }
}


/*boton menu  60px*/ 

let boton = false

buttonMenu.addEventListener('click',()=>{
if(boton==false){
  openMenu()
  boton = true
}
else{
  closeMenu()
  boton = false
}

})




function openMenu(){
  menuDesplegable.style.display='block'
  menuDesplegable.style.left='26%'

}
 
function closeMenu(){
  
  menuDesplegable.style.left='100%'
  menuDesplegable.style.display='none'

}

