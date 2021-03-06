'use strict';
var body = document.getElementsByTagName('body')[0];
function FamilyMember (id, shortID, sex, name, surname, status, born, died) {
  this.id = id;
  this.shortID = shortID;
  this.sex = sex;
  this.name = name;
  this.surname = surname;
  this.status = status;
  this.born = born;
  this.died = died;
}
var pairs = [], //[[id,shortID,posX,posY], [id,shortID,posX,posY], ...]
  numberOfCreatedFamilyMembers = 0,
  mouseOverInput = false;
document.getElementById('addFamilyMember').addEventListener('click', addMember, false);
function addMember() {
  numberOfCreatedFamilyMembers++;
  var section = document.createElement('section');
  var shortSection = document.createElement('section');
  section.innerHTML = '<article><i class="demo-icon icon-cancel-circled remove"></i><i class="demo-icon icon-male"></i><i class="demo-icon icon-female"></i><i class="demo-icon icon-minus-circled minimize"></i><p>Born: <br /><input type="text" name="born" class="born" placeholder="31.01.1922"></input></p><p>Died: <br /><input type="text" name="died" class="died" placeholder="empty=alive"></input></p></article><article class="right"><p>Name: <br /><input type="text" name="name" class="name" placeholder="John"></input> <br />Surname: <br /><input type="text" name="surname" class="surname" placeholder="Doe"></input> <br />Status: <br /><input type="text" name="status" class="status" placeholder="Nestor"></input></p><i class="demo-icon icon-ok-circled approve"></i></article>';
  shortSection.innerHTML = '<article><i class="demo-icon icon-user"></i><i class="demo-icon icon-export-alt enlarge"></i><p class="short-name">John</p><p class="short-surname">Doe</p></article>';
  section.classList.add('family-member', 'new-input');
  shortSection.classList.add('short-family-member', 'no-display');
  section.id = Math.random();
  shortSection.id = Math.random();
  body.appendChild(section);
  body.appendChild(shortSection);
  addEventListeners(section.id, shortSection.id);
  var randomNumberX = Math.random() * 400,
    randomNumberY = Math.random() * 400,
    transformCSSValue = 'translateX(' + randomNumberX + 'px) translateY(' + randomNumberY + 'px)';
  section.style.transform = transformCSSValue;
  shortSection.style.transform = transformCSSValue;
  pairs.push( [section.id, shortSection.id, randomNumberX, randomNumberY] );
}
function addEventListeners (id, shortID) {
  var section = document.getElementById(id),
    shortSection = document.getElementById(shortID),
    remove = section.querySelector('.remove'),
    approve = section.querySelector('.approve'),
    minimize = section.querySelector('.minimize'),
    enlarge = shortSection.querySelector('.enlarge'),
    name = section.querySelector('.name'),
    shortName = shortSection.querySelector('.short-name'),
    surname = section.querySelector('.surname'),
    shortSurname = shortSection.querySelector('.short-surname'),
    status = section.querySelector('.status'),
    born = section.querySelector('.born'),
    died = section.querySelector('.died'),
    input = section.querySelectorAll('input'),
    male = section.querySelector('.icon-male'),
    female = section.querySelector('.icon-female'),
    sex = 'unknown';
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function() {
      if ( section.classList.contains('approved-input') ) {
        section.classList.remove('approved-input');
        section.classList.add('new-input');
      }
    }, false);
    input[i].addEventListener('mouseenter', function() {
      mouseOverInput = true;
    }, false);
    input[i].addEventListener('mouseleave', function() {
      mouseOverInput = false;
    }, false);
  }
  section.addEventListener('mousedown', onDragStart, false);
  shortSection.addEventListener('mousedown', onDragStart, false);
  remove.addEventListener('click', function() {
    for ( var i = 0; i < pairs.length; i++) {
      if (pairs[i][0] === id) pairs.splice(i,1);
    }
    section.parentNode.removeChild(section);
    shortSection.parentNode.removeChild(shortSection);
  }, false);
  minimize.addEventListener('click', function() {
    shortSection.classList.remove('no-display');
    section.classList.add('no-display');
    shortName.innerText = name.value;
    shortSurname.innerText = surname.value;
  }, false);
  enlarge.addEventListener('click', function() {
    section.classList.remove('no-display');
    shortSection.classList.add('no-display');
  }, false);
  approve.addEventListener('click', function() {
    window['familyMemberNumber'+numberOfCreatedFamilyMembers] = new FamilyMember(id, shortID, sex, name.value, surname.value, status.value, born.value, died.value);
    section.classList.remove('new-input');
    section.classList.add('approved-input');
    createMember(id, shortID);
    if ( died.value === '' ) {
      section.classList.add('alive');
      shortSection.classList.add('alive');
    } else {
      section.classList.remove('alive');
      shortSection.classList.remove('alive');
    }
  }, false);
  male.addEventListener('click', function() {
    female.classList.remove('chosen-sex');
    male.classList.add('chosen-sex');
    sex = 'male';
  }, false);
  female.addEventListener('click', function() {
    male.classList.remove('chosen-sex');
    female.classList.add('chosen-sex');
    sex = 'female';
  }, false);
}
function createMember (id, shortID) {
  // console.log(newMember);
  // console.log(id);
  // console.log(shortID);
}
// from youtu.be/dMQIVfY9hXc
var draggedEl,
  onDragStart,
  onDrag,
  onDragEnd,
  grabPointY,
  grabPointX;

onDragStart = function (ev) {
  var boundingClientRect;
  if (mouseOverInput) {
    return;
  }

  draggedEl = this;

  boundingClientRect = draggedEl.getBoundingClientRect();

  grabPointY = boundingClientRect.top - ev.clientY;
  grabPointX = boundingClientRect.left - ev.clientX;
};

var rect, posX, posY, closestX, closestY;
onDrag = function (ev) {
  if (!draggedEl) {
    return;
  }

  posX = ev.clientX + grabPointX,
  posY = ev.clientY + grabPointY;

  if (posX < 0) {
    posX = 0;
  }

  if (posY < 0) {
    posY = 0;
  }
  rect = draggedEl.getBoundingClientRect();
  draggedEl.style.transform = 'translateX(' + posX + 'px) translateY(' + posY + 'px)';
  var transformRelatedSection;
  for ( var i = 0; i < pairs.length; i++) {
    if ( draggedEl.id === pairs[i][0] ) {
      transformRelatedSection = document.getElementById(pairs[i][1]);
      pairs[i][2] = posX;
      pairs[i][3] = posY;
    } else if ( draggedEl.id === pairs[i][1] ) {
      transformRelatedSection = document.getElementById(pairs[i][0]);
      pairs[i][2] = posX;
      pairs[i][3] = posY;
    }
  }
  transformRelatedSection.style.transform = 'translateX(' + posX + 'px) translateY(' + posY + 'px)';
  var distance = [];
  for ( var j = 0; j < pairs.length; j++) {
    if (pairs.length > 1) {
      distance.push((Math.abs(pairs[j][2] - posX) + Math.abs(pairs[j][3] - posY)));
    }
  }
  var removeZeroFromDistance = distance.filter(function(item) {
    return item !== 0;
  });
  var smallestDistance = Math.min.apply(Math, removeZeroFromDistance);
  var indexOfPairArrayWithSmallestDistance = distance.indexOf(smallestDistance);
  closestX = pairs[indexOfPairArrayWithSmallestDistance][2];
  closestY = pairs[indexOfPairArrayWithSmallestDistance][3];
  // console.log(rect.top, rect.right, rect.bottom, rect.left);
};

onDragEnd = function () {
  draggedEl = null;
  grabPointX = null;
  grabPointY = null;
};

document.addEventListener('mousemove', onDrag, false);
document.addEventListener('mouseup', onDragEnd, false);
// var started = false;
function setup() {
   createCanvas(windowWidth, windowHeight);
  //  noLoop();
}
function draw() {
  // if(started){
  background(170, 98, 98);
  line(closestX, closestY-50, posX+50, posY-50);

  // }
}
// function start(){
//    started = true;
//    loop();
// }
