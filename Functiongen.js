function *add(n){
    n1 = yield(n*2);
    console.log(n1);
}
iter = add(10);
n1= iter.next();
iter.next(n1.value*2);                    