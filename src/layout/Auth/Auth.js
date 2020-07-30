import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Dashboard } from '@/layout';
import * as Helpers from '@/helpers';

const Auth = () => {
  const [text, setText] = useState('');
  const [isVerified, setVerified] = useState(false);
  console.log('vao 1 lan ');
  useEffect(() => {
    setVerified(!!Helpers.getStorage('token'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Helpers.setStorage('token', text);
    setVerified(true);
  };

  if (isVerified) return <Redirect to={'/dashboard'} />;

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
