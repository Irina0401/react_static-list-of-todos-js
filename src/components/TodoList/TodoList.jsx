import { TodoInfo } from "../TodoInfo/TodoInfo";

// Add the required props
export const TodoList = ({list, getUsers}) => <>
<section className="TodoList">
  {list.map (l => (
<TodoInfo info = {l} key = {l.id} getUsers = {getUsers}/>
  ))}
    </section>
</>;
