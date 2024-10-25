import styles from "./todoitem.module.css";
export default function TodoItem({ item, setTodos, todos }) {
  function handleClick(item) {
    console.log("button clicked on", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handlePress(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  let isComp = item.done ? styles.completed : "";

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <span className={ isComp} onClick={() => handlePress(item.name)}>
          <i>{item.name}</i>
        </span>
        <span>
          <button
            className={styles.delButton}
            onClick={() => handleClick(item)}
          >
            Delete
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
