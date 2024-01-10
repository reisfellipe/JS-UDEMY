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

// Promise.all
const yt = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('videos from youtube');
    },2000);
})

const fb = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('post from facebook');
    },3000);
})

//nesse caso a Promise.all só é executada quando todas as promises terminarem de ser executadas baseadas no tempo que cada um levará
Promise.all([yt,fb]).then((result)=>{
    console.log({result});
});