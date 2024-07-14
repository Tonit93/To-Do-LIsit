const Datalist = {
  toMoveList: [],

  initToMove(list) {
    this.toMoveList = list;
  },

  addToMoveList(task) {
    const newToMove = {
      id: Date.now().toString(),
      task,
      isCompleted: false,
    };

    this.toMoveList = [...this.toMoveList, newToMove];
    return newToMove;
  },

  changeStatus(id) {
    this.toMoveList = this.toMoveList.map((tomove) => {
      if (tomove.id === id) {
        return { ...tomove, isCompleted: !tomove.isCompleted };
      }

      return tomove;
    });
  },
  removeToMove(id) {
    this.toMoveList = this.toMoveList.filter((tomove) => tomove.id !== id);
  },
};
export default Datalist;
