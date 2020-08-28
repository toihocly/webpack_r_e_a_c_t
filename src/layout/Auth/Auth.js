import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Helpers from '@/helpers';
import { USER_ROLE, TOKEN } from '@/constants';

const Auth = () => {
  const history = useHistory();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === 'ADMIN' || text === 'USER' || text === 'IT') {
      Helpers.setStorage(TOKEN, text);
      Helpers.setStorage(USER_ROLE, text);
      history.push('/dashboard');
    } else {
      alert('FAIL!!! Value valid is ADMIN / USER / IT');
    }
  };

  return (
    <div>
      <h2>AUTH PAGE</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <h4>ENTER YOUR TOKEN JWT</h4>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
    </div>
  );
};

export { Auth };
