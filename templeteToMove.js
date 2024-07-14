export const templeteToMoveItem = ({ task, id, isCompleted }) => {
  return `
      <li class="item">
      <h3 class="TaskMoveList ${isCompleted ? "taskDone" : ""}" 
      data-action='changeStatus'
      data-id="${id}"
      >
      ${task}
      </h3> 
  
      <button 
      type="button" 
      class="buttonRemove"
      data-action='removeToMove'
      data-id="${id}" >
      <img src="./img/deletelist.png" alt="">
      </button>
      
      </li>
  `;
};
