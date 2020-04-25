import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useField } from "../hooks";
import { addFriend, removeFriend } from "../data/friends";

export default function Friends() {
  const { friends, filters } = useSelector((state) => ({
    friends: state.friends,
    filters: state.filters,
  }));
  const dispatch = useDispatch();
  const nameField = useField("");
  const ageField = useField("");
  const addFriendHandler = () => {
    dispatch(addFriend(nameField.value, ageField.value));
  };
  const removeFriendHandler = (id) => (e) => {
    dispatch(removeFriend(id));
  };
  return (
    <>
      name: <input type="text" {...nameField} />
      age: <input type="text" {...ageField} />
      <button onClick={addFriendHandler}>Add friend</button>
      <ul>
        {friends
          .filter((friend) => (filters.isEven ? friend.age % 2 === 0 : true))
          .filter((friend) => (filters.isAdult ? friend.age >= 18 : true))
          .filter((friend) =>
            filters.startsWith.state
              ? friend.fn[0] === filters.startsWith.letter
              : true
          )
          .map((friend) => (
            <li key={friend.id}>
              {friend.fn} - age: {friend.age} -
              <button onClick={removeFriendHandler(friend.id)}>
                Remove friend
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
