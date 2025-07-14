import { UserInfo } from "../UserInfo/UserInfo";

// Add the required props
export const TodoInfo = ({info, getUser}) => <>
<article className="TodoInfo TodoInfo--completed">
<h2 className="TodoInfo__title">{info.title}</h2>
<UserInfo user = {getUser}/>
</article>
</>;
