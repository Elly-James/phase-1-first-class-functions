function receivesAFunction(something){
    
something();
}

receivesAFunction(returnsANamedFunction);

function returnsANamedFunction(){
    return (function addNum(){ return 4+5});
}
function returnsAnAnonymousFunction(){
    return (function(){
        console.log("Hello, there!")
    })
}