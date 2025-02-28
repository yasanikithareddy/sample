function fetchUserID(userid){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const user = { id: userid , name: 'JOHN DOE' , type: 'premium'};
            resolve(user);
        },1000);
    });
}

function fetchUserDetails(UserType){
    return new Promise((resolve,reject) => {
        const settings = UserType === 'premium' ?
        {theme: "dark", notification: true, accesslevel: "high"}:
        {theme: "light", notification: false, accesslevel: "low"};
        resolve(settings);
    });
}

async function display(){
    let user = await fetchUserID(1);
    let settings = await fetchUserDetails(user.type);
    console.log(settings);
} 
display();