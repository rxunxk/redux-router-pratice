import React from "react";
import "../Styles/Home.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../actionCreatorsIndex";

const Home = () => {
  const data = useSelector((state) => state.data);
  const title = useSelector((state) => state.title);
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);

  //functions
  const getPosts = () => {
    actions.showTitle("Posts");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        actions.callAPI(JSON.stringify(json));
      });
  };

  const getTodos = () => {
    actions.showTitle("Todos");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        actions.callAPI(JSON.stringify(json));
      });
  };

  const getUsers = () => {
    actions.showTitle("Users");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        actions.callAPI(JSON.stringify(json));
      });
  };

  return (
    <>
      <h1> Welcome to Home page</h1>
      {/* <p style={{ backgroundColor: "#fee7e6", padding: "5px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p> */}
      <div className="btn-box">
        <button onClick={getPosts}>Posts</button>
        <button onClick={getTodos}>Todos</button>
        <button onClick={getUsers}>Users</button>
      </div>
      <div className="data-container">
        <h1>{title}</h1>
        {data}
      </div>
    </>
  );
};

export default Home;
