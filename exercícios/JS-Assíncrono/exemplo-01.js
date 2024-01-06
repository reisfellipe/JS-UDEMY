const loginUser = (email,password,onSuccess,onError) => {
    setTimeout(()=>{
        const error = false;

        if(error){
            return onError(new Error('error in login!'));
        }

        console.log('user logged!');
        onSuccess({email});
    }, 1500);

    console.log('after setTimeOut');
};

const getUserVideos = (email,callback)=>{
    setTimeout(()=>{
        callback(['video1', 'video2', 'video3'])
    },2000);
};

const user = loginUser(
    'reisfellipe11@gmail.com', '#2q2yuul28',
     (user)=>{
    getUserVideos(user.email, (videos)=>{
        console.log({videos});
    })
}, (error)=>{
    console.log({error});
});
