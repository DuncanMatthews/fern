import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

 
function Subscribe() {

const [isVisible, setIsVisible] = useState(false);

const handleClose = () => {
    setIsVisible(false);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');
 
  const subscribe = async (e) => {
    e.preventDefault();
 
    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
 
    const { error } = await res.json();
 
    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);
 
      return;
    }
 
    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };
 
  return (
    <div className={`popup-wrapper ${isVisible ? 'visible' : ''}`}>
      <div className="popup-content">
      
        <form className="subscribe-form" onSubmit={subscribe}>
          <label htmlFor="email-input" className="subscribe-label">
            {'Email Address'}
          </label>
          <input
            id="email-input"
            name="email"
            placeholder="you@awesome.com"
            ref={inputEl}
            required
            type="email"
            className="subscribe-input"
          />
           <div className="subscribe-message">
            {message ? message : "I'll only send emails when new content is posted. No spam."}
          </div>
          <button type="submit" className="subscribe-button">
            {'✨ Subscribe 💌'}
          </button>
          <a className="subscriber-close-button" onClick={handleClose}>
          No thanks
        </a>
        </form>
      </div>
    </div>

  );
}

export default Subscribe;
