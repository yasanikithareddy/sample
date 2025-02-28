function double(num){
    return new Promise((resolve,reject) =>{
        resolve(num*2);
    });
}

async function print(){
    let a = await double(10);
    let b = await double(20);
    let c = await double(30);
    console.log(a+b+c);
}
print()
