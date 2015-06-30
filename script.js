$(document).ready(function(){
  $("a").click(function(event){
    alert("Testing here!");
  });
});

$( "form" ).submit(function( event ) {
  if ( $( "input:first" ).val() === "correct" ) {
    $( "span" ).text( "Validated..." ).show();
    return;
  }

  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
  event.preventDefault();
});