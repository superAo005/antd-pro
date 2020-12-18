import React, { useState, useEffect, useRef } from 'react';
// import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
const { confirm } = Modal;

const test: React.FC<{}> = () => {
  const [count, setCount] = useState(0);
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

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <Button onClick={handleAlertClick}>Show alert</Button>
    </div>
  );
};
export default test;
