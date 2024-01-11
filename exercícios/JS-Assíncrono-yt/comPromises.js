// const loginUser = (email,password,onSuccess,onError) => {
//     setTimeout(()=>{
//         const error = true;

//         if(error){
//             return onError(new Error('error in login!'));
//         }

//         console.log('user logged!');
//         onSuccess({email});
//     }, 1500);
// };

const loginUser = (email,password) => {
    return new Promise((resolve,reject)=>{
        const error = false;

        if(error){
            reject(new Error("error in login!"));
        }

        console.log('User logged!');
        resolve({email});
    });
};

const getUserVideos = (email)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('getUserVideos');
            resolve(['video1', 'video2', 'video3']);
        },2000);
    });        
};

const getVideoDetails = (video)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('getVideoDetails');
            resolve({title: "video title"});
        },2500);
    });
};

loginUser('reisfellipe11@gmail.com', '2312837')
.then((user)=> getUserVideos(user.email))
.then((videos)=> getVideoDetails(videos[0]))
.then((videoDetails)=> console.log({videoDetails}))
.catch((error)=> console.log({error}));

// Promise.all