function makeCounter(){
    let privateCounter = 0;

    return {
        increase: function(){
            privateCounter ++;
        },
        decrease: function(){
            privateCounter --;
        },
        getValue: function(){
            return privateCounter;
        }
    }
}

let counter1 = makeCounter();
counter1.increase();
counter1.increase();
counter1.getValue(); //2
let counter2 = makeCounter();
