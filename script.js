$(document).ready(function(){
  $(window).scroll(function(){
    if(this.ScrollY > 20){
      $('.navbar').addClass("sticky");
    } else{
      $('.navbar').removeClass("sticky");
    }
  })
})