console.log('hello');


const request = (url, callback) => {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', function(data){
        const resData = JSON.parse(data.target.responseText);
        callback(resData);
    });
    oReq.open('GET', url);
    oReq.send();
}

request('https://www.reddit.com/r/travel.json', function(data){
    console.log('data', data);
    console.log('data data', data.data);
    console.log('data children', data.data.children)
    for(var i=0; i<data.data.children.length; i++){
        var postBox = document.createElement('div');
        postBox.className = 'post';
        createContainer.appendChild(postBox);

        var titleBox = document.createElement('div');
        titleBox.className = 'title';
        titleBox.innerHTML = data.data.children[i].data.title;
        postBox.appendChild(titleBox);

        var authorBox = document.createElement('div');
        authorBox.className = 'author';
        authorBox.innerHTML = 'Posted by: ' + data.data.children[i].data.author;
        postBox.appendChild(authorBox);

        var imgPost = document.createElement('img');
        imgPost.className = 'image';
        imgPost.src = data.data.children[i].data.url
        postBox.appendChild(imgPost);

        var descBox = document.createElement('div');
        descBox.className = 'comments';
        descBox.innerHTML = data.data.children[i].data.selftext;
        postBox.appendChild(descBox);

        
    }
  


})


var createContainer = document.createElement('div');
createContainer.id = 'container';
document.body.appendChild(createContainer);

var createRandom = document.createElement('div');
createRandom.id = 'random';
createRandom.innerHTML = 'Random';
createContainer.appendChild(createRandom);

var createBoards = document.createElement('div');
createBoards.id = 'board';
createBoards.innerHTML = 'My Boards';
createContainer.appendChild(createBoards);

var createApp = document.createElement('div');
createApp.id = 'app';
createApp.innerHTML = 'Get The App';
createContainer.appendChild(createApp);
