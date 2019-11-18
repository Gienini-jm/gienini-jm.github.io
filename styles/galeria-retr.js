var fotos = document.getElementsByTagName("img");
var cajas = document.getElementsByClassName("caja_foto");
var dots  = document.getElementsByClassName("dot");
var can_f = cajas.length;    /* cantidad de fotos = cantidad de botones-radio */
var nro_f = 1;                   /* nro de foto en pantalla */

cambio_win();
mostrar_foto(1);

/* por tecla */
function tecla(event) {
  var x = event.key;
  if (x=="ArrowDown")                     {mostrar_foto(1)};
  if (x=="ArrowUp")                       {mostrar_foto(0)};
  if (x=="p" || x=="P" || x=="ArrowLeft") {mostrar_foto(nro_f - 1)};
  if (x=="n" || x=="N" || x=="ArrowRight"){mostrar_foto(nro_f - 1 + 2)}; /* nro_f-1+2=nro_f+1 ????? */
  if (x>=0 && x<=9)                       {mostrar_foto(x)};};

/* por cambio de tamaño de window */
function cambio_win() {
  var ww = window.innerWidth;
  var wh = window.innerHeight-22;
  var wr = ww / wh;
  for (i = 0; i < can_f; i++) {
    ir = fotos[i].getAttribute("width") / fotos[i].getAttribute("height");
    if (wr > ir)
       {fotos[i].style.width  = (ir*wh)+"px";
        fotos[i].style.height =      wh+"px";}
    else
       {fotos[i].style.width  =      ww+"px";
        fotos[i].style.height = (ww/ir)+"px";
        fotos[i].style.margin = (wh-ww/ir)/2+"px";}};};

/* Muestra la foto nro */
function mostrar_foto(nro) {
if (nro < 1)
    {nro = can_f}
else {if (nro > can_f){nro = 1}}
for (i = 0; i < can_f; i++) {
	cajas[i].style.display = "none";
	dots[i].className = dots[i].className.replace(" active", "");};
dots[nro-1].className += " active";
cajas[nro-1].style.display = "flex";
nro_f = nro};
