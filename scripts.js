const cursor = document.querySelector('.cursor');
const titleContainer = document.querySelector('.titleContainer')
const bodyContainer = document.querySelector('.bodyContainer')

// document.addEventListener('mousemove', e => {
//     cursor.setAttribute('style', `top: ${e.pageY - (cursor.scrollHeight/2)}px; left: ${e.pageX - (cursor.scrollWidth/2)}px`);
// })

$(window).on('load', function() {
    $(window).on('mousemove', function(e){
        //console.log(e.pageX)
        cursor.setAttribute('style', `top: ${e.pageY - (cursor.scrollHeight/2)}px; left: ${e.pageX - (cursor.scrollWidth/2)}px`)
    })
    $(window).on('scroll', function(e){

        var bottom = $(this).scrollTop() + $(this).innerHeight();
        //console.log(bottom)
        $('#titleImage').each(function(i, obj){
            if (window.scrollY < titleContainer.scrollHeight){
                //console.log("I going")
                obj.setAttribute('style', `transform: rotate(${window.scrollY/2}deg)`)
            }
        })
        $('.fade').each(function(){
            //location of element
            //console.log($(this))
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            if (objectBottom < bottom){
                if ($(this).css('opacity')==0) {
                    $(this).fadeTo(500,1);
                }
            }else{
                if ($(this).css('opacity')==1){
                    $(this).fadeTo(500, 0)
                }
            }
        })
        $('.subtextContainer').each(function(i, obj){
            var objectTop = $(this).offset().top;
            //console.log(objectTop)
            //console.log(origin)
            if (objectTop < bottom){
                //console.log(obj);
                obj.setAttribute("style", 'transform: translateX(0%)');
            }
            else{
                obj.setAttribute('style', 'transform: null')
            }
        })
        $('.coding').each(function(i, obj){
            var objectTop = $(this).offset().top;
            if (objectTop < bottom){
                bodyContainer.setAttribute('style', 'background-color: #80ffdd')
            }else{
                bodyContainer.setAttribute('style', 'background-color: #cea3a2')
            }
        })
    }).scroll();
})

function scrollFunction(pos){
    window.scrollTo({
        top: pos,
        left: 0,
        behavior: 'smooth'
    })
}