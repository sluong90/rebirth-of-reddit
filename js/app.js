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

request('https://www.reddit.com/r/travel.json', function travel(data){
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
        authorBox.innerHTML = '{ ' + 'Posted by: ' +  data.data.children[i].data.author + ' }';
        postBox.appendChild(authorBox);
        
        var imgPost = document.createElement('img');
        imgPost.className = 'image';
        imgPost.src = data.data.children[i].data.url
        postBox.appendChild(imgPost);
        

        var descBox = document.createElement('div');
        descBox.className = 'comments';
        descBox.innerHTML = data.data.children[i].data.selftext;
        postBox.appendChild(descBox);


        var allUrl = data.data.children[i].data.url;
        // console.log(allUrl);
        var x = allUrl.endsWith('/');
        // console.log('not an image',x)
        var getImgPost = document.getElementsByClassName('image');
        // console.log('img post', getImgPost)
        if(x){
            getImgPost[i].src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/768px-No_image_available.svg.png';
        }
       
    
        
    }
    
    request('https://www.reddit.com/r/art.json', function(data) {
          console.log('art data', data);
          var getArt = document.getElementById('art');
          getArt.onclick = function(){
              alert('Not yet available.');
          }
          
        });

    request('https://www.reddit.com/r/food.json', function(data) {
            console.log('food data', data);
            var getFood = document.getElementById('food');
            getFood.onclick = function(){
                alert('Not yet available.');
            }
            
          });

    request('https://www.reddit.com/r/Jokes.json', function(data) {
            console.log('jokes data', data);
            var getJoke = document.getElementById('jokes');
            getJoke.onclick = function(){
                alert('Not yet available.');
            }
            
          });
    
   
})



var nav = document.createElement('div');
nav.id = 'navigation';
document.body.appendChild(nav);

var createArt = document.createElement('div');
createArt.id = 'art';
createArt.innerHTML = 'Art';
nav.appendChild(createArt);

var createFood = document.createElement('div');
createFood.id = 'food';
createFood.innerHTML = 'Food';
nav.appendChild(createFood);

var createJoke = document.createElement('div');
createJoke.id = 'jokes';
createJoke.innerHTML = 'Jokes';
nav.appendChild(createJoke);

var createContainer = document.createElement('div');
createContainer.id = 'container';
document.body.appendChild(createContainer);

var banner = document.createElement('img');
banner.id = 'banner';
banner.src = '../myassets/banner'
createContainer.appendChild(banner)
