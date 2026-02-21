import { useState } from 'react';
import { postData } from '../api';

export default function Forms({ activeTab, refresh }) {
  const [emailTo, setEmailTo] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const submit = async () => {
    setError('');

    try {
      if (activeTab === 'email') {
        if (!emailTo) {
          setError('Email is required');
          return;
        }

        if (!isValidEmail(emailTo)) {
          setError('Please enter a valid email address');
          return;
        }

        await postData('email', { emailTo });
        setEmailTo('');
      } else {
        if (!mobileNumber || !message) {
          setError('All fields are required');
          return;
        }

        if (mobileNumber.length !== 10) {
          setError('Please enter a valid 10-digit mobile number');
          return;
        }

        await postData(activeTab, { mobileNumber, message });
        setMobileNumber('');
        setMessage('');
      }

      refresh();
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  const isDisabled =
    activeTab === 'email'
      ? !emailTo
      : !mobileNumber || !message;

  return (
    <div className="form-card">
      <h3>Send {activeTab.toUpperCase()}</h3>

      {activeTab === 'email' ? (
        <input
          type="email"
          placeholder="Email address"
          value={emailTo}
          onChange={(e) => setEmailTo(e.target.value)}
        />
      ) : (
        <>
          <input
            type="tel"
            placeholder="Mobile number"
            value={mobileNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              setMobileNumber(value);
            }}
            maxLength={10}
          />
          <input
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </>
      )}

      {error && <p className="error-text">{error}</p>}

      <button onClick={submit} disabled={isDisabled}>
        Submit
      </button>
    </div>
  );
}