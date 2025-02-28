let p = new Promise((resolve,reject) => {
    if(true)
        resolve("success");

    else
       reject("Failure");
})
.then(result =>{console.log(result)});