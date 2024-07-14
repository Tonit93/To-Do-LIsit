import { templeteToMoveItem } from "./templeteToMove.js";
import Datalist from "./helpers.js";
import { refs } from "./refs.js";

refs.formMove.addEventListener("submit", onSubmit);
refs.list.addEventListener("click", onClickByList);

const addInInitList = () => {
  let listToMove = localStorage.getItem("list");

  if (!listToMove) return;

  listToMove = JSON.parse(listToMove);

  Datalist.initToMove(listToMove);

  const markup = listToMove.map(templeteToMoveItem).join("");
  refs.list.innerHTML = markup;
};
addInInitList();

function onSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const input = form.elements.TaskMoveList;

  const { value } = input;

  const currentToMove = Datalist.addToMoveList(value);

  const markupToMoveItem = templeteToMoveItem(currentToMove);

  refs.list.insertAdjacentHTML("beforeend", markupToMoveItem);

  localStorage.setItem("list", JSON.stringify(Datalist.toMoveList));
  form.reset();
  input.focus();
}

function onClickByList({ target }) {
  // console.log(target);
  if (target.dataset.action === "removeToMove") {
    const buttonRemove = target;

    Datalist.removeToMove(buttonRemove.dataset.id);
    const parentLi = buttonRemove.closest("li.item");
    parentLi.remove();

    localStorage.setItem("list", JSON.stringify(Datalist.toMoveList));
  }

  if (target.dataset.action === "changeStatus") {
    Datalist.changeStatus(target.dataset.id);
    target.classList.toggle("taskDone");
    localStorage.setItem("list", JSON.stringify(Datalist.toMoveList));
  }
}
