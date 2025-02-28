function fetchUserID(userId){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const user = {id:userId, name:'John doe', type:'premium'};
            resolve(user);
        },1000);
    });
}

function fetchUserDetails(UserType){
    return new Promise((resolve,reject) => {
        console.log(`Fetching settings for: ${UserType}`);
        const details = UserType === 'premium'?
        {theme:"dark", notification:true , accesslevel: "high"}:
        {theme: "light", notification: false , accesslevel: "low"};
        resolve(details);
    });
}

fetchUserID(1).then(user => fetchUserDetails(user.type))
.then(settings => {console.log(settings)})
.catch(error => {console.log("error occured")});