  
 
  let primera = ['como','cuando'];
  let segunda = ['conquistar', 'descubrir' ];
  let tercera = ['elmundo','laprogramación'];
  let cuarta = ['.com','.es','.org'];
  let dominio = "";

primera.forEach((primera) =>{
    segunda.forEach((segunda) =>{
        tercera.forEach((tercera) =>{ 
            cuarta.forEach((cuarta) =>{ 
                console.log(primera + segunda + tercera + cuarta);
                dominio += primera + segunda + tercera + cuarta + '<br>';
            });
        });
    });
});

document.querySelector("p").innerHTML = dominio;

