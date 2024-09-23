// MENU BAR

const menuBtn = document.querySelector('#menu');
const menuList = document.querySelector('#menuList');

menuType();

window.addEventListener('resize', () => {
  menuType();
});

menuBtn.addEventListener('click', () => {
  if (menuList.style.display === 'none' || menuList.style.display === '') {
    showMenuList();
  } else {
    hideMenuList();
  }
});

function showMenuList() {
  menuList.style.display = 'flex';
  menuList.style.flexDirection = 'column';
  menuBtn.textContent = 'Schowaj menu';
};

function hideMenuList() {
  menuList.style.display = 'none';
  menuBtn.textContent = 'Menu';
};

function menuType() {
  if (window.innerWidth < 400) {
    hideMenuList();
    menuBtn.style.display = 'block';
  } else {
    showMenuList();
    menuBtn.style.display = 'none';
    menuList.style.flexDirection = 'row';
    menuList.style.justifyContent = 'space-around';
  }
};

//MORE ABOUT ME

const btnMoreAboutMe = document.querySelector('#btnMoreAboutMe');
const paragraphMoreAboutMe = document.querySelector('.hidden');

btnMoreAboutMe.addEventListener('click', () => {
  if (paragraphMoreAboutMe.style.display === 'none' || paragraphMoreAboutMe.style.display === '') {
    showMoreAboutMe();
  } else {
    showLessAboutMe();
  }
});

function showMoreAboutMe() {
  paragraphMoreAboutMe.style.display = 'block';
  btnMoreAboutMe.textContent = 'mniej o mnie';
}

function showLessAboutMe() {
  paragraphMoreAboutMe.style.display = 'none';
  btnMoreAboutMe.textContent = 'więcej o mnie';
}

// ACTIVITIES

const activities = document.getElementsByTagName('h2')
const contents = document.getElementsByClassName('activityBoxContent')
let activitiesArray = [];
let clickedElement;
let clickCounter = [];
const activityBox = document.getElementsByClassName('activityBox');
let activityBoxArray = [];

document.addEventListener('click', (event)=> {
    clickedElement = event.target.outerHTML;
    if ( clickedElement === activitiesArray[getActivityIndex()] ) {
        turnActivityInfo();
    }
});

for (let i = 0; i < activityBox.length; i++) {
    activityBoxArray.push(activityBox[i].outerHTML);
}

for (let i = 0; i < activities.length; i++) {
    activitiesArray.push(activities[i].outerHTML);
}

for (let i = 0; i < activities.length; i++) {
    clickCounter.push(0);
}

function getActivityIndex() {
  return activitiesArray.indexOf(clickedElement)
}

function turnActivityInfo(){
  clickCounter[getActivityIndex()] += 1
  if (clickCounter[getActivityIndex()] % 2 === 1){
    contents[getActivityIndex()].style.display = 'block';
    activityBox[getActivityIndex()].style.flex = 'none';
    activityBox[getActivityIndex()].style.width = '95%';
  } else {
    contents[getActivityIndex()].style.display = 'none'
    activityBox[getActivityIndex()].style.flex = '1';
  }
}
