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

                 </tr>`
          return row

        });

      });

    });

  });

})();
