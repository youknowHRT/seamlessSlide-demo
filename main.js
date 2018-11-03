let n;
getStart()
setInterval(()=>{
    makeLeave(getImage(n))
    .one('transitionend',(e)=>{
       makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n+=1;
},3000)

// 以上为mainCode
function x(n){
    if(n>3){
        n=n%3
        if(n===0){
            n=3
        }
    }
    return n
}
function getImage(n){
   return $(`.images>img:nth-child(${x(n)})`)
}
function getStart(){
    n=1;
    $(`.images>img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}
function makeLeave($node){
    $node.removeClass('current enter').addClass('leave')
    return $node
}
function makeEnter($node){
    $node.removeClass('leave current').addClass('enter')
}
function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
}
