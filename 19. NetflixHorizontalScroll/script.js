const centerdiv = document.getElementById('centerdiv');

fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
.then((data)=> {
  return data.json();
}).then((data)=>{
  data.map((val)=>{
    key = val.id;
    let img = document.createElement('img');
    img.src = `https://picsum.photos/200/350?random=${val.id}`;
    centerdiv.appendChild(img);
  })
})