import React, { useState, useEffect, useRef, useReducer } from 'react';
// import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import useSetInterval from './components/useSetInterval';
const { confirm } = Modal;
interface IReducer {
  [propName: string]: any;
}
function reducer(state = 0, action: IReducer) {
  switch (action.type) {
    case 'add':
      return state + 1;
    default:
      return state;
  }
}
const test: React.FC<{}> = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  const latestCount = useRef(count);
  const handleAlertClick = () => {
    setTimeout(() => {
      confirm({
        title: `You clicked ${count} times`,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }, 3000);
  };
  useEffect(() => {
    latestCount.current = count;
    setTimeout(() => {
      console.log(`You clicked ${latestCount.current} times`);
    }, 3000);
  }, [count]);
  useSetInterval(() => {
    setCount(count + 1);
  });
  useEffect(() => {
    setInterval(
      () =>
        dispatch({
          type: 'add',
          payload: 0,
        }),
      1000,
    );
  }, []);

  return (
    <div>
      <p>{state}</p>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <Button onClick={handleAlertClick}>Show alert</Button>
    </div>
  );
};
export default test;
