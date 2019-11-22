var fotos = document.getElementsByTagName("img");
var leyex = document.getElementsByClassName("leyen");
var can_f = 50;    /* cantidad de fotos = cantidad de botones-radio */
var nro_f = 1;                   /* nro de foto en pantalla */
var fx = ["1XyyImNnt2Ctlf2OukbGd7XKyUNERwnK-","1CQD3KIExflUgQP5PLM7nGViYaQlB2ia-","1pZQZKLqGx9zPmKqVbu9Hlg_ZCsW7CYeU","1ZKeKWJR-_-xLfXe3FtGyL2xNEFpgpcNI","158f3e5Ji6gamhqcoulX3H-sjXh9PsTda","1zpILZ4tSOBKK28rrOQuTJZTc8wWZb-GU","1KDXsRhUeK6-38M5Cj3auOLsF7bc39y4T","1geb6Evzpq4HolN9l0FXY5OtEUF2ad1LJ","1-b5LHCKjxR5oRxuGMZIGvMis1zOm8HDw","1Wrv5MkpUE4-z3EEUFOzobNpFHJsS4_a5","10PS9VVe5CeuFhqO-B8iJ_BoDW0YFhyh_","1hWd6KvhBSmmWrHFgfE4cWWCyTWrsKUl4","1QfZbf3O-CZv-hf-s3zWfWG-xgR22w9JX","1j6PbJeoPDEV3ZNJV1QkfptoAp7QmKMuI","1k9O8OjQKF6z5YYTxFzUKM_vi47tQMjB0","1uG8KH5RdVvMtwxPynq3Sx1c-WrbA0gi7","1ud5fTU86UcCGe9yYDv5iTzQDvUL7730X","1x4xwS7w0N_6q9SpIpfG6s4r-38Wq1VGf","10HrhwIZiKr_TL4kvrmQ6KePUHRCuDNSz","1h4klNjhtMkpDPUJM-EThkq6YIcaCsjWN","1tNhvj0R-JLX3GKJaJGsE5d47TcKmwAO3","1AkrGE3mKtjRbaQu0itF7ZwvGLyHohj9P","1OWnZop4wEdXiYuUfWSgeBAVarN8d2nuj","1fvfk8tt6yi3aBwVCgeWWXBbJqDD_CACn","1TsnTb4muT9SK-axsbwvI_s90x2D4D6JB","1J2pXUwjZehuZOK24BN5aIxVbaljATdm3","1_cPOwGwnPVTOAK7JAEtXR2O0HanATeTO","1BgUEvBO3ptuUS-Ghr9M3fyh9z35iv0MF","1xn-adapjDyjaqSaMnFTGUEkyBTP7uWvj","1ZQaMTF3uMpSkWcBCqfkYZJ77VIrP5SqD","1-V5xooJwmIWXUAy4jHYLyjGHUP-LO1-w","1aGztfEbX-XNhV2TSXmItRhY1u7qa9zEW","19nXPfsmCOkOPw18FKZKV54e0yP12jRRt","1FEeblgrHbFKhr9nIzhbBPxgJvXk0bfoy","1uHwjZBBwJApdLV9z-qaZMfrom2plzu5N","1Je1M-s5DZYtjTY1on_b_d-jsghwIM7d2","1FzOQime2IOPwlDPuNFAeUINU0zs05l33","1lkd8By3Gm8r9Utghwh0ON2X88l30A5Ya","1lXFY9o94vSb1fXGDSxKfPviQhaN3pTPo","1yR520HhRYxkdaJLVw3QOuU5c6JkfJMOu","1A72KDfbvydciZ5h64Jpn8gyFDcNeqc5g","1foNcw966Ct1KzAH3vFRbJDTHHmAUs6Gt","1gq8JT8OYBXX4If5JQGz2WXFLpHkxInnS","117XxsjudfS68XWr4Bk7wMn1UE6OzE2hB","1AEUt3BkVCzf7xqJSabTeK78hGydqJt9n","1p9zBIsHwhI6Zi_m-Di___9u2xQElw7i2","1uNbvPaItbVYvlb3hS7_HwUj20dvskx_E","1WfMXTOP5foRKOjxYHtfe3kEcI5mlhxrJ","1EZ_LO83GbIed21kgereJ_tNLhLnOJtkP","1CwScov-BAWGGhsfrOL445f-4enjaTuxn"];
var ix = [2576/1368,1302/2157,2576/1932,2576/1932,2576/1932,2571/3000,2576/1932,4000/1812,2628/1837,3246/2256,4000/3000,3288/1751,3946/2682,4000/2283,3924/2166,3866/2126,2816/2112,3425/1616,3147/1430,4000/2052,1600/860,975/1700,3947/1014,2816/2112,1349/591,1600/1200,1232/1840,1232/1840,3101/2292,2841/2077,1553/671,2515/1802,2149/1497,2732/1888,2790/1908,2816/2112,4000/3000,4000/3000,4000/3000,872/584,1840/1232,2259/902,1840/1232,1800/1200,3347/2001,1501/891,3882/2272,4000/2232,3212/1619,3009/1755];
var tx = ["La Boca","Campo de Mayo","El rosedal","El rosedal & Olga","Río de la Plata","Avenida de Mayo","El rosedal & cuentos","Catamarca","San Antonio de los Cobres","Platja Icaria","Platja Icaria","Platja Icaria","Platja Icaria","Platja Icaria","Platja Icaria","Platja Icaria","Liri","Sant Pau Seguries","Sant Pau Seguries","Ibon de Paderna","Les Forquetes","Sant Pere Torelló","La Plana deVic","St Joan de les Abadesses","Santa Maria Besora","Santa Maria Besora","Sant Pere Torelló","Sant Pere Torelló","El Masnou","L'Ametlla de Mar","Santa Maria Besora","L'Ametlla de Mar","Liri","Sant Pau Seguries","Llacs de la Pera","Deltebre","El Masnou","Hermita de Sant Martí","Llardaneta","Alp","La Plana deVic","Fageda d'en Jordà/div>","Sant Pere Torelló","El Masnou","Fageda d'en Jordà","Santa Maria Besora","Sta Fe del Montseny","Sta Fe del Montseny","Pont de Malafogasa","Pont de Malafogasa"]
var ir = 3/4;
var ww = 1;
var wh = 1;
var wr = 1;

/* por tecla */
function tecla(event) {
  var x = event.key;
  if (x=="ArrowDown")                           {mostrar_foto(1)}
  else {if (x=="ArrowUp")                       {mostrar_foto(0)}
  else {if (x=="p" || x=="P" || x=="ArrowLeft") {mostrar_foto(nro_f - 1)}
  else {if (x=="n" || x=="N" || x=="ArrowRight"){mostrar_foto(nro_f - 1 + 2)}   /* nro_f -1+2=nro_f +1 ????? */
  else {if (x>=0 && x<=9)                       {mostrar_foto(x)}}}}}};

/* Muestra la foto nro */
function mostrar_foto(nro) {
  if (nro < 1)          {nro = can_f}
  else {if (nro > can_f){nro = 1}};
  fotos[0].src = "http://drive.google.com/uc?export=view&id="+fx[nro-1];
  ir = ix[nro-1];
  leyex[0].innerHTML = tx[nro-1];
  nro_f = nro;
  calculo_prop()};

/* Muestra la foto nro */
function calculo_prop() {
  if (wr > ir)
       {fotos[0].style.width  = (ir*wh)+"px";
        fotos[0].style.height =      wh+"px";}
  else {fotos[0].style.width  =      ww+"px";
        fotos[0].style.height = (ww/ir)+"px";
        fotos[0].style.margin = (wh-ww/ir)/2+"px";};}
