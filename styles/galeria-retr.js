var fotos = document.getElementsByTagName("img");
var leyex = document.getElementsByClassName("leyen");
var can_f = 28;    /* cantidad de fotos = cantidad de botones-radio */
var nro_f = 1;                   /* nro de foto en pantalla */
var fx = ["1jOi_aLM7HV5zR8iXnbnw08JlmgofqIVT","1Ol4cEqEdGb-DWL252YYh3g4uxgqeBV4Q","1Nni4jq0WqEQKxI5urCuiRzUMxPotBUAc","11wsqLm04Gw_7BW7kB8_xW7DuFGrP4C36","1CTW0IowFynWEJ1TKrbE8oBYOEBR2NOF4","1949hD9NYtq7t3DrouMQlQSSLA_WECDQg","1xp-ZQt8a61OIa6Zhsq9GH31u07hcxPuz","1r31diwiNhc_gUClVEHmZdpOky19lLlfw","1ogq9ZiEI9ASx73U59l2TyJQaibzmao-4","1LcpdxHEvRfH76Yf2OpxJ5EFauNzuBPAj","1ihB0UnOfpaFcrDvTzE9Uj91ThXDOnWEW","1BVY2vnutktsE-lh_SX8yB1ZlGQy3E1HB","1ouILXZyzuB6nyo71oxTH272fObOWUpaf","1Cb4paXbhshttYZj2EuKgNgyqKCzbfGqQ","14CUT5vq2lxNo6_XrLtSFsAT9Pw3y0EhG","1cv6_9TVxVqxrcvj9_s79H9kjQWfIWFze","1zz3VaJ8UINmeVluyY5Dw-xAhtNvbxzkq","1GJBDpqmmbx67p6G_uxm-sW5B5G0K0Wb_","1wJFZZwvBuoPiLvkZls-38W50hf80ZebU","16ClaTNV4TqhvTy4rM6IBvzE0dc0n8E7c","13vMIxx_oHSQ2vpDaHkc-5PDNAB2D1SWh","1MgkQV31Z3Ghge6nVCgNy4Fl1WqYA5DhP","1i8uS6g2zsWasxhtf0omeBWpiveNMT9Ta","1-_RmDNzlSCQl4C3pdbMBmxZOvHA-bPuw","1y8dJSes4770XiyCaqXAPp0PtpwwDhqQE","1FdCReEDBx3_BqUQG5owNIapkO4aSpVPG","13pFXC61a3POki74Ox_8EhhwMDngUqv6i","1PAzebU7mJDm72tZNv0X7sZUhsS8wx68c"];
var ix = [304/401,4000/3000,4000/3000,2388/3155,2982/3818,2092/1920,2353/1770,4000/3000,403/622,1747/2171,1629/1922,4000/3000,3206/4152,2199/3259,2438/2828,4000/3000,4000/3000,2251/2795,2819/2237,2369/3504,1656/2286,3000/4000,4000/3000,630/774,1703/2455,3000/4000,4000/3000,2080/2301];
var tx = ["Ale & Laura","Ale & Vero","Ale & Vero","Alejandra","Derek","Derek","Firenze","Firenze","Julian","Julieta & Martina","Julieta & Martina","LAmetlla de Mar","María J.","Martín","Mercat Medieval","Mercat Medieval","Mercat Medieval","Montse","Montse & Aynara","Patrik & Derek","Plaza Dorrego","Plaza Dorrego","Plaza Dorrego","Sarah","Torelló","Torelló","Torelló","Torelló"]
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
