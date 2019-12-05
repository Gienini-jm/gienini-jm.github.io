var fotos = document.getElementsByTagName("img");
var leyex = document.getElementsByClassName("leyen");
var nro_f = 1;     /* nro de foto en pantalla */
var ix = [1.883,0.604,1.333,1.333,1.333,0.857,1.333,2.208,1.431,1.439,1.333,1.878,1.471,1.752,1.812,1.818,1.333,2.119,2.201,1.949,1.86,0.574,3.893,1.333,2.283,1.333,0.67,0.67,1.353,1.368,2.314,1.396,1.436,1.447,1.462,1.333,1.333,1.333,1.333,1.493,1.494,2.504,1.494,1.5,1.673,1.685,1.709,1.792,1.984,1.715];
var tx = ["Argentina - La Boca","Argentina - Campo de Mayo & Rita","Argentina - El Rosedal","Argentina - El Rosedal & Olgui","Rio de la Plata & Edu","Argentina - Av. de Mayo","Argentina - El Rosedal & cuentos","Parque Nac. Los Cardones","San Antonio de los Cobres","España - Platja Icaria 4","España - Platja Icaria 2","España - Platja Icaria 3","España - Platja Icaria,","España - Platja Icaria","España - Port Olimpic 2","España - Port Olimpic 1","España - Liri","Sant Pau Seguries 1","Sant Pau Seguries","España - Ibon Paderna","España - Les Forquetes","España - St. Pere Torelló 3","plana de Vic","España - St. Joan de les Abadesses & Ale","España - Sta Maria Besora 2","España - Sta Maria Besora 1","España - St. Pere Torelló 7","España - St. Pere Torelló 8","España - El Masnou","España - L'Ametlla 1","España - Sta Maria Besora 4","España - L'Ametlla","España - St. Joan de les Abadesses 1","Sant Pau Seguries 2","España - Llac de La Pera","España - Deltebre & Sarah","España - El Masnou 2","Ermita de la Font de Sant Martí","España - Ibon Llardaneta","España - Alp","España - la Plana de Vic","Fageda d'en Jordàx","España - St. Pere Torelló 6","España - Vilanova i La Geltrux","Fageda d'en Jordà","España - Sta Maria Besora 3","Santa Fe del Montseny","Santa Fe del Montseny 1","Pont de Malafogassa","Camping Malafogassa"];
var ir = 0;
var ww = 0;
var wh = 0;
var wr = 0;
var tt = "";

/* por tecla */
function tecla(event) {
  var x = event.key;
  if (x=="ArrowDown")                           {mostrar_foto(1)}
  else {if (x=="ArrowUp")                       {mostrar_foto(50)}
  else {if (x=="p" || x=="P" || x=="ArrowLeft") {mostrar_foto(nro_f - 1)}
  else {if (x=="n" || x=="N" || x=="ArrowRight"){mostrar_foto(nro_f - 1 + 2)}   /* nro_f -1+2=nro_f +1 ????? */
  else {if (x>=0 && x<=9)                       {mostrar_foto(x)}}}}}}

/* Muestra la foto nro */
function mostrar_foto(nro) {
  if (nro < 1)       {nro = 50}
  else {if (nro > 50){nro = 1}}
  tt = tx[nro-1];
  fotos[0].src = "galeria/paisajes/"+tt+".jpg";
  ir = ix[nro-1];
  leyex[0].innerHTML = tt;
  nro_f = nro;
  calculo_prop()}

/* Muestra la foto nro */
function calculo_prop() {
  if (wr >= ir)
       {fotos[0].style.width  = (ir*wh)+"px";
        fotos[0].style.height =      wh+"px";
        fotos[0].style.margin =       0+"px";}
  else {fotos[0].style.width  =      ww+"px";
        fotos[0].style.height = (ww/ir)+"px";
        fotos[0].style.margin = (wh-ww/ir)/2+"px";}}
