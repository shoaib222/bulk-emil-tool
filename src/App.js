import React, { useState } from 'react';
import './App.css';

function App() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [recipientList, setRecipientList] = useState('');

  const sendEmails = async () => {
    // Send the data to the backend for processing (will be implemented in Node.js)
    const response = await fetch('http://localhost:3001/send-emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subject, message, recipientList }),
    });

    if (response.ok) {
      console.log('Emails sent successfully!');
    } else {
      console.error('Error sending emails');
    }
  };

  return (
    <div className="App">
      <h1>Bulk Email Tool</h1>
      <label>
        Subject:
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <label>
        Recipient List (comma-separated email addresses):
        <textarea value={recipientList} onChange={(e) => setRecipientList(e.target.value)} />
      </label>
      <button onClick={sendEmails}>Send Emails</button>
    </div>
  );
}

export default App;
