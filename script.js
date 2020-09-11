//jshint esversion:6

/*
Author: Anthony Noel
-This page uses the drag and drop API to arrange a group of list items. Drag and drop to sort the movies titles from best to worst.
Future Dev:
-Add a number to it that gets updated
-Refactor this code


*/

let targetText;
let src;


const dragStartHandler = (ev) => {
  console.log("Being dragged");
  //ev.preventDefault();
  ev.dataTransfer.setData("text/plain",ev.target.innerText);
  ev.dataTransfer.dropEffect = "move";
};

const dragOverHandler = (ev) => {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
};

const dropHandler = (ev) => {
  targetText = ev.target.textContent;
  //console.log("The drop target has the text of"+ev.target.innerText);
  ev.preventDefault();
  //Get the previous data saved in the dataTransfer object
  const data = ev.dataTransfer.getData("text/plain");

  console.log(data);
  ev.target.innerText = data;
};

const dragEndHandler = (ev)=> {
  console.log(targetText);
  //If the dropEffect property has the value none during a dragend, then the drag was cancelled.
  if(targetText) {
    ev.target.innerText = targetText;
    //clear the text for the next one
    targetText = '';
  }
};

const initPage = () => {
  //Add an eventlistener to all the li so they can be dragged
  document.querySelectorAll("li").forEach(element => element.addEventListener("dragstart",dragStartHandler));
  document.querySelectorAll("li").forEach(element => element.addEventListener("dragend",dragEndHandler));

  //Add 2 event listeners to the drop area as required: ondrop, ondragover
  document.querySelector("ol").addEventListener("dragover",dragOverHandler);
  document.querySelector("ol").addEventListener("drop",dropHandler);

};

initPage();
