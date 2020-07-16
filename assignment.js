/*function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile();
console.log(result);*/





/*function woodCalculator(chair,table,bed){
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    var total = chair + table + bed;
    return total; 
}
var result = woodCalculator(1,2,1);
console.log(result);*/




/*function tinayFriend(names){
    var small = names[0];
    for(var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length < small.length){
            small = currentName;
        }
    }
    return small;
}
var result = tinayFriend([]);
console.log(result);*/



function brickCalculator(floor){
    if(floor<=10){
        var totalFeet = floor * 15;
        var totalBrick = totalFeet *1000;
    }
    else if(floor<=20){
        var totalFeet = floor * 12;
        var totalBrick = totalFeet *1000;
    }
    else{
        var totalFeet = floor * 10;
        var totalBrick = totalFeet *1000;
    }
    return totalBrick;
}
var result = brickCalculator(40);
console.log(result);





