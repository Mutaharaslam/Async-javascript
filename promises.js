let posts = [
    {
        title: "title 1",
        body: "I'm Body 1"
    },
    {
        title: "title 2",
        body: "I'm Body 2"
    },
    {
        title: "title 3",
        body: "I'm Body 3"
    },
    {
        title: "title 4",
        body: "I'm Body 4"
    }
]

function getPosts() {
    setTimeout(() => {
        let outPut = '';
        posts.forEach((post, index) => {
            outPut += `<h4>${post.title}</h4> <p>${post.body} </p>`
        });
        document.body.innerHTML = outPut;
    }, 1000);
}

// Now Promisis comes in
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let failed = false;
             if(!failed){
                resolve();
             } else {
                reject('Error: Something is not good')
             }
        }, 2000)
    })

}

createPost({title: "title 5",body: "I'm Body 5"}).then(getPosts)
