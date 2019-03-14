$(document).ready(function(){
  
  var quote, 
      author;
      
 function getNewQuote(){
      $.ajax({
        url: 'https://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
          method: 'getQuote', 
          lang: 'en',
          format: 'jsonp'
        },
        success: function(res){
          console.log(quote);
          quote = res.quoteText;
          author = res.quoteAuthor;
          
          $('.quote').text(quote);
          
          if(author){
            $('#author').text(' - ' +  author);
          } else {
            $('#author').text('-   Unknown');
          }
         }
        
       });
    }  
    
  getNewQuote();
    
    
    

});