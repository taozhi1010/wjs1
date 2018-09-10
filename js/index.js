$(function(){
     console.log("嘻嘻哈哈");
     var mySwiper = new Swiper ('.swiper-container',{
         autoplay:{
                 delay: 2500,
                 disableOnInteraction: false,
             },
             loop:true,
             direction : 'horizontal',
          pagination: '.swiper-pagination',
       
        pagination: {
         el: '.swiper-pagination',
         clickable:true
         },

         // Navigation arrows
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },

 
 })
 mySwiper.params.pagination.clickable = true ;
//此外还需要重新初始化pagination
})

