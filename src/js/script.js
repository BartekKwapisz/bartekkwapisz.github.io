'use strict';
var body = document.getElementsByTagName('body')[0];
var newMember;
function FamilyMember (name, surname, status, born, died) {
  this.name = name;
  this.surname = surname;
  this.status = status;
  this.born = born;
  this.died = died;
}
document.getElementById('addFamilyMember').addEventListener('click', addMember, false);
function addMember() {
  var section = document.createElement('section');
  var shortSection = document.createElement('section');
  section.innerHTML = '<article><i class="demo-icon icon-cancel-circled remove"></i><i class="demo-icon icon-male"></i><i class="demo-icon icon-female"></i><i class="demo-icon icon-minus-circled minimize"></i><p>Born: <br /><input type="text" name="born" class="born" placeholder="31.01.1922"></input></p><p>Died: <br /><input type="text" name="died" class="died" placeholder="empty=alive"></input></p></article><article><p>Name: <br /><input type="text" name="name" class="name" placeholder="John"></input> <br />Surname: <br /><input type="text" name="surname" class="surname" placeholder="Doe"></input> <br />Status: <br /><input type="text" name="status" class="status" placeholder="Nestor"></input></p><i class="demo-icon icon-ok-circled approve"></i></article>';
  shortSection.innerHTML = '<article><i class="demo-icon icon-user"></i><i class="demo-icon icon-export-alt enlarge"></i><p class="short-name">John</p><p class="short-surname">Doe</p></article>';
  section.classList.add('family-member', 'new-input');
  shortSection.classList.add('short-family-member', 'no-display');
  section.id = Math.random();
  shortSection.id = Math.random();
  body.appendChild(section);
  body.appendChild(shortSection);
  addEventListeners(section.id, shortSection.id);
}
function addEventListeners (id, shortID) {
  var section = document.getElementById(id);
  var shortSection = document.getElementById(shortID);
  var remove = section.querySelector('.remove');
  var approve = section.querySelector('.approve');
  var minimize = section.querySelector('.minimize');
  var enlarge = shortSection.querySelector('.enlarge');
  var name = section.querySelector('.name');
  var surname = section.querySelector('.surname');
  var status = section.querySelector('.status');
  var born = section.querySelector('.born');
  var died = section.querySelector('.died');
  var input = section.querySelectorAll('input');
  remove.addEventListener('click', function() {
    section.parentNode.removeChild(section);
  }, false);
  minimize.addEventListener('click', function() {
    shortSection.classList.remove('no-display');
    section.classList.add('no-display');
  }, false);
  enlarge.addEventListener('click', function() {
    section.classList.remove('no-display');
    shortSection.classList.add('no-display');
  }, false);
  approve.addEventListener('click', function() {
    newMember = new FamilyMember(name.value, surname.value, status.value, born.value, died.value);
    section.classList.remove('new-input');
    section.classList.add('approved-input');
    createMember(id, shortID);
  }, false);
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function() {
      if ( section.classList.contains('approved-input') ) {
        section.classList.remove('approved-input');
        section.classList.add('new-input');
      }
    }, false);
  }
}
function createMember (id, shortID) {
  console.log(newMember);
  console.log(id);
  console.log(shortID);
}
