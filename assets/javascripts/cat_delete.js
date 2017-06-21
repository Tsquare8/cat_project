(function() {

  $(function() {


    $.get("http://localhost:1337/cat", function(data) {

      $.each(data, function(index, value) {

        //use below to loop thru database and pull and display data
        $("table").append(function() {

          row = `<tr class="row">

                   <td><img id="image" src="${value.image}"></td>
                   <td><span>${value.breed}</span></td>
                   <td><span>${value.size}</span></td>
                   <td><span>${value.life_span}</span></td>
                   <td><span>${value.general_health}</span></td>
                   <td><span>${value.active}</span></td>
                   <td><span><button class='remove' id='${value.id}'>Delete Breed From Database</button></span></td>

                 </tr>`
          return row
        });

      });
    });
    // console.log($(.remove));

      //click on delete button to remove row from DOM and table
      $("#table").on("click", ".remove", function() {
        let idDelete = $(this).attr("id");

        $.ajax({
          url: ("http://localhost:1337/cat/" + idDelete),
          type: "DELETE"
          // , success: location.reload();  Tried this but when active it breaks the page
          //Is there another way?
        });
      });
  });

})();
