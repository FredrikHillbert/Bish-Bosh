
function buildNumbers() {
//skapar upp rangeNumbers som en variable som håller nummret som är valt i första rangen
  var rangeNumber = document.getElementById("rangeNumbers").value;
  //skapar upp bish och bosh nummrena som är valda i deras respektive rangers
  var bishNumber = parseInt(document.getElementById("bish").value);
  var boshNumber = parseInt(document.getElementById("bosh").value);
  //nollställer de tidigare elements innerhtml - vilket gör det möjligt att ta bort och lägga till genom att dra upp och ned på första rangern
  var diver = document.getElementById("divNumbers");
  diver.innerHTML = "";
 //Loopar igenom varje tal upp till och med det tal vi har valt på första rangern
 for (let index = 1; index <= rangeNumber; index++) 
 {
   //skapar upp element div och p och sätter texten på elementet p till där index är för att skapa 1,2,3 osv
         var div = document.createElement("div");
         var text = document.createElement("p");
         text.innerHTML = index;

  //sätter sedan elementet text:s id till index för att sedan kunna köra nästa if sats
         text.id = index;
  //här appendar vi texten till diven ifall index inte finns, det vill säga att den texten redan viss på diven
         if(!document.getElementById(index))
         {
          div.appendChild(text);
          document.getElementById("divNumbers").appendChild(div)
         }
  //ser om det är en bish bosh
          if(index % boshNumber == 0 && index % bishNumber == 0){
            //bishbosh
            document.getElementById(index).innerHTML = "BISH-BOSH";
            div.style.backgroundColor = "purple"
          }
  // ser om det är en bosh
          else if(index % boshNumber == 0){
              //bosh
            document.getElementById(index).innerHTML = "BOSH";
            div.style.backgroundColor = "red";
          }
  //ser om det är en bish
          else if( index % bishNumber == 0){
            //bish
            document.getElementById(index).innerHTML = "BISH";
            div.style.backgroundColor = "blue";
          }
  //om inget av detta så sätter vi ett nummer så att det inte blir så att om en p blir en bosh så blir det aldrig en siffra igen
          else {
            document.getElementById(index).innerHTML = index;
          }
 }
}