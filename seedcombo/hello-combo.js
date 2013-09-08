define('hello5',function(){
    console.log( 'hello5' );    
});
define('hello6',{ foo : 'bar' });
define('hello4',['hello5','hello6'],function(){
    console.log( 'hello4' );    
});
define('hello1',function(){
    console.log( 'hello1' );    
});
define('hello2',['hello5'],function(){
    console.log( 'hello2' );    
});
define('hello3',['hello4'], function(){
    console.log( 'hello3' );    
});
define( 'hello', ['hello1','hello2','hello3'], function(){
    console.log( 'hello' );      
});
seed.use( 'hello', function(){
    console.log( 'use hello done' );
});
