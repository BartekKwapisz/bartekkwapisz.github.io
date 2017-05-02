'use strict';
var FamilyMember = function (name, surname, status, born, died) {
  this.name = name;
  this.surname = surname;
  this.status = status;
  this.born = born;
  this.died = died;
};
var body = document.getElementsByTagName('body')[0];
var addEventListeners = function (id) {
  var section = document.getElementById(id);
  var remove = section.querySelector('.remove');
  var approve = section.querySelector('.approve');
  var minimize = section.querySelector('.minimize');
  remove.addEventListener('click', function() {
    section.parentNode.removeChild(section);
  }, false);
  approve.addEventListener('click', function() {
    console.log(id);
  }, false);
  minimize.addEventListener('click', function() {
    console.log('minimize');
  }, false);
};
var addMember = function() {
  var section = document.createElement('section');
  section.innerHTML = '<article><i class="demo-icon icon-cancel-circled remove"></i><i class="demo-icon icon-male"></i><i class="demo-icon icon-female"></i><i class="demo-icon icon-minus-circled minimize"></i><p>Born: <br /><input type="text" name="born" class="born" placeholder="31.01.1922"></input></p><p>Died: <br /><input type="text" name="died" class="died" placeholder="empty=alive"></input></p></article><article><p>Name: <br /><input type="text" name="name" class="name" placeholder="John"></input> <br />Surname: <br /><input type="text" name="surname" class="surname" placeholder="Doe"></input> <br />Status: <br /><input type="text" name="status" class="status" placeholder="Nestor"></input></p><i class="demo-icon icon-ok-circled approve"></i></article>';
  section.className = 'family-member';
  section.id = Math.random();
  body.appendChild(section);
  addEventListeners(section.id);
};
document.getElementById('addFamilyMember').addEventListener('click', addMember, false);
