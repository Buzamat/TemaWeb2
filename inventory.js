
function buttonpress(){

let shoppingcart = ['chess', 'checkers'];
var temp=' ';
shoppingcart.forEach(function(item, index, array) {
   temp=temp+item+', '})
   alert('vector= '+temp);

   temp=' ';
shoppingcart.push('monopoly');
shoppingcart.forEach(function(item, index, array) {
    temp=temp+item+', ';})
    alert('after push (monopoly): '+temp);
    temp=' ';

shoppingcart.pop();
shoppingcart.forEach(function(item, index, array) {
    temp=temp+item+', ';})
    alert('after pop: '+temp);
    temp=' ';

    let shoppingcart2 = ['NuTeSuparaFrate', 'Table'];
    shoppingcart2.forEach(function(item, index, array) {
        temp=temp+item+', '})
        alert('vector 2 = '+temp);
     
        temp=' ';

    let shoppingcart3= shoppingcart.concat(shoppingcart2);

    shoppingcart3.forEach(function(item, index, array) {
        temp=temp+item+', ';})
        alert('after concat vector1+vector2: '+temp);
        temp=' ';

    shoppingcart3.sort();
    shoppingcart3.forEach(function(item, index, array) {
        temp=temp+item+', ';})
        alert('sorted: '+temp);
        temp=' ';

        
        var game1 = {type:"Board", price:20, discount:20,name:"ChessPRO"};
        alert('The game '+game1.name+' costs '+game1.price);

        temp=Math.random();
        alert('Un numar random:' + temp);
        temp=arseInt((Math.random() * 100), 10);
        alert('Un numar random mai frumos:'+ temp);
        temp=parseFloat(Math.random());
        alert('Alt numar random facut cu parsefloat:'+ temp);
    }