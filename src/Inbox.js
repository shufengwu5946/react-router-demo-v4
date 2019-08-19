import React from "react";
import { Route } from "react-router-dom";
const Inbox = ({ match }) => {
  return (
    <div>
      <h3>Inbox</h3>
      <Route path={`${match.path}/message/:id`} component={Message} />
    </div>
  );
};

// 只适this.props.params.id用于 /message/:id 形式的路由参数
// 若要获取 ?id=yourId 形式的参数，使用this.props.location.query.id
export const Message = ({ match }) => {
  return <h3>Message {match.params.id}</h3>;
};
export default Inbox;
