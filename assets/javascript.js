var teams = ['NJ Devils', 'NY Rangers', 'Chicago Blackhawks'];
 
    
    function appendNewButton(hockey){ 
       
        var a = $("<button>")
        
      
        a.addClass('hockey');
        a.attr('data-name', hockey);
        a.text(hockey);
        $('#buttonsView').append(a);
    
    }

    
    function renderButtons(){ 
        
        for (var i = 0; i < teams.length; i++){
            appendNewButton(teams[i])
        }
    }
 
 
    function displayHockeyInfo(){
        $('.hockeyDiv').empty();
        var hockey = $(this).attr('data-name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + hockey + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
          var hockeyDiv = $('<div class="hockeyDiv">');

          var results = response.data;
               

           for (var i = 0; i < results.length; i++) {

                    
           if (results[i].rating == "r" || results[i].rating == "pg13"|| results[i].rating == "")
           {
            
           }
           else {
              var gifDiv = $('<div class="item">')
                    var p = $('<p id = "ice">').text("Rating: " + results[i].rating);
                    
                  
           
 
              var hockeyImage = $('<img>');
                hockeyImage.addClass('puck');
                hockeyImage.attr('src', results[i].images.fixed_height.url );
                hockeyImage.attr('data-still' , results[i].images.fixed_height_still.url);
                hockeyImage.attr('data-animate' , results[i].images.fixed_height.url);
                hockeyImage.attr('data-state' , 'still');
                hockeyDiv.append(p);
                 hockeyDiv.append(hockeyImage);

            $('#hockeyView').prepend(hockeyDiv);
 
                 }   
                }
        
                });
                }

             $('#hockeyView').on('click', '.puck', function(){
               
                var state = $(this).attr('data-state'); 
                if ( state == 'still'){
               $(this).attr('src', $(this).data('animate'));
               $(this).attr('data-state', 'animate');
             }else{
               $(this).attr('src', $(this).data('still'));
               $(this).attr('data-state', 'still');
               }
               });

              renderButtons();

              $('#addHockey').on('click', function(){

               var hockey = $('#hockey-input').val().trim();

                teams.push(hockey);
        
                appendNewButton(hockey);

                return false;
                });

              $(document).on('click', '.hockey', displayHockeyInfo);
    