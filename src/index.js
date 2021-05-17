import { createStore } from "redux";

const plus = document.querySelector('.add');
const minus = document.querySelector('.minus')
const number = document.querySelector('.number')


// Reducer 은 데이터를 수정하는 함수이다.
// 리턴하는 것은 우리의 app의 데이터가 된다.
// 유일하게 데이터를 바꿀 수 있는 곳

const ADD = "ADD"
const MINUS = "MINUS"
const reducer = (count = 0, action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count
  }
};

// where i store data
const store = createStore(reducer);
console.log(store)

const onChange = () => {
  console.log('there was a change on the store')
  number.innerHTML = store.getState()
}

// subscribe : store안에 있는 변화들을 알 수 있게 해 준다.
store.subscribe(onChange);

const handleAdd = () => {
  store.dispatch({ type: ADD })
}

const handleMinus = () => {
  store.dispatch({ type: MINUS })
}

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// console.log(store.getState())  // reducer의 리턴값을 가져온다


// action객체가 dispatch 라는 메소드에 전달이 되고, 
// dispatch가 reducer를 호출해서 새로운 state값을 만들어 낸다.