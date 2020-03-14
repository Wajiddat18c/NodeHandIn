const url = window.location.href;
let newUrl;

if (url === "http://localhost:3000/corona"){
    newUrl ="http://localhost:3000/view";
}else{
    newUrl = "http://localhost/view"
}
console.log(newUrl)



// $.getJSON("http://localhost:3000/view", 
$.getJSON(newUrl, 
function(data){
    // console.log(data);
    $(data).each(function(i, virus){
        $("#virusBody").append($("<tr>")
        .append($("<td>").append(virus.country))
        .append($("<td>").append(virus.cases))
        .append($('<td style= "background-color: yellow; ">').append(virus.todayCases))
        .append($('<td style="color: white; background-color: red; ">').append(virus.deaths))
        .append($('<td style= "background-color: green; ">').append(virus.recovered)));
    });
})
    .done(function(){
        alert("Page Loaded");
    })
    .fail(function(e){
        alert("ERROR, Please refresh this page", e);
        console.log("error");
        console.error(e);
    })


    function myFunction() {
        let input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("virusTable");
        tr = table.getElementsByTagName("tr");
      
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }