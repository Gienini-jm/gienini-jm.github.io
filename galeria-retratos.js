var fotos = document.getElementsByTagName("img");
var leyex = document.getElementsByClassName("leyen");
var nro_f = 1;     /* nro de foto en pantalla */
var ix = [0.758,1.333,1.333,0.757,0.781,1.09,1.329,1.333,0.648,0.805,0.848,1.333,0.772,0.675,0.862,1.333,1.333,0.805,1.26,0.676,0.724,0.75,1.333,0.814,0.694,0.75,1.333,0.904];
var tx = ["Ale & Laura","Ale & Vero 1","Ale & Vero","Ale","Derek 1","Derek","Napoli in Firenze 2","Napoli in Firenze","Diego","Juli & Martina-","Juli & Martina","L'Ametlla","Paula","Martín","Mercat Medieval 1","Mercat Medieval 2","Mercat Medieval 3","Montse","Montse y Aynara","Patrick & Derek","Plaza Dorrego 1","Plaza Dorrego 2","Plaza Dorrego 3","Sarah","Virgen del Rocío en Torelló 3","Virgen del Rocío en Torelló 2","Virgen del Rocío en Torelló 4","Virgen del Rocío en Torelló 1"];
var ir = 0;
var ww = 0;
var wh = 0;
var wr = 0;
var tt = "";

/* por tecla */
function tecla(event) {
  var x = event.key;
  if (x=="ArrowDown")                           {mostrar_foto(1)}
  else {if (x=="ArrowUp")                       {mostrar_foto(0)}
  else {if (x=="p" || x=="P" || x=="ArrowLeft") {mostrar_foto(nro_f - 1)}
  else {if (x=="n" || x=="N" || x=="ArrowRight"){mostrar_foto(nro_f - 1 + 2)}   /* nro_f -1+2=nro_f +1 ????? */
  else {if (x>=0 && x<=9)                       {mostrar_foto(x)}}}}}}

/* Muestra la foto nro */
function mostrar_foto(nro) {
  if (nro < 1)       {nro = 28}
  else {if (nro > 28){nro = 1}}
  tt = tx[nro-1];
  fotos[0].src = "galeria/retratos/"+tt+".jpg";
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
