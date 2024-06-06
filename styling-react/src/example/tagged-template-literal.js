

function tagged(...args){
    console.log(args);
}
tagged`hello ${{foo:'bar'}} ${() => 'world'}!`;
// [ [ 'hello ', ' ', '!' ], { foo: 'bar' }, [Function (anonymous)] ]