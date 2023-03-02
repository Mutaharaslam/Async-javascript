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

function getPosts(){
    setTimeout (() => {
        let outPut = '';
        posts.forEach((post, index) => {
            outPut += `<h4>${post.title}</h4> <p>${post.body} </p>`
        });
        document.body.innerHTML = outPut;
    }, 1000);
}
getPosts();
