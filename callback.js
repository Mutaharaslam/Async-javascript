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

// Now Callback comes in

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback();
    }, 2000)
}

// here callback is passed as an argument in reactePosts() function and it executes after function is finished executing.
createPost({title: "title 5",body: "I'm Body 5"}, getPosts)
