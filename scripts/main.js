let myHeading = document.querySelector('h1');

let changeImage = document.querySelector('img');
changeImage.onclick = function(){
    let imgSrc = changeImage.getAttribute('src');
    if(imgSrc === 'img/Little artist III.jpg'){
        changeImage.setAttribute('src','img/Little artist IV.jpg')
    }else{
        changeImage.setAttribute('src','img/Little artist III.jpg')
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = '你好，' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '你好，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }