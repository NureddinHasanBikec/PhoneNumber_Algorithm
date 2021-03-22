function formatPhoneNumber(number) {

    var x = 0, groups = [], len, num;
    
    num = number+'';

    num = num.replace(/\D/g,'');

    len = num.length;

    num = num.split('').reverse();

    while( x < len/3){
       groups[x] = num.splice(-3,3).reverse().join('');
	   x++;
    }

    if( groups.length > 3 ){
       groups[2] = groups[2].concat( groups.splice( 3 - groups.length, 1 ) );
    }   
  
    return groups.join('-');
}
console.log(formatPhoneNumber(122122212))