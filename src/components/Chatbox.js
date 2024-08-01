import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFemale, FaRobot } from 'react-icons/fa';
import './Chatbox.css';
import products from './products.json';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setMessages([{
      role: 'assistant',
      content: 'הי ברוכים הבאים ל-Modest in Style, תרשמו איזה מוצר אתם מחפשים בשביל מה וכמה התקציב שלכם ונשמח לתת לכם את המוצר המתאים ביותר.'
    }]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    setIsPending(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            ...messages,
            userMessage,
            { role: 'system', content: `Here is the list of products:\n${products.map(product => `${product.id}: ${product.title} - ${product.price}`).join('\n')}` }
          ],
          temperature: 0.7,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        },
        {
          headers: {
            Authorization: `Bearer sk-None-qwd8jSRlMEwsLcOSd6lfT3BlbkFJRjyWorvzwHallGOOJfPg`,
            'Content-Type': 'application/json',
          }
        }
      );

      const botMessage = response.data.choices[0].message.content;
      const recommendedProductIds = extractProductIds(botMessage);

      const recommendedProducts = products.filter(product => recommendedProductIds.includes(product.id));

      const recommendationMessage = recommendedProducts.map(product => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          <p><strong>{product.title}</strong> - {product.price}</p>
          <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
          <p><a href={product.urf} target="_blank" rel="noopener noreferrer">View Product</a></p>
        </div>
      ));

      setMessages([...messages, userMessage, { role: 'assistant', content: recommendationMessage }]);

    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsPending(false);
    }
  };

  const extractProductIds = (response) => {
    const matches = response.match(/\d+/g);
    return matches ? matches.map(id => parseInt(id, 10)) : [];
  };

  return (
    <div className={`chatbox-wrapper ${isOpen ? 'open' : 'closed'}`}>
      <div className="chatbox-toggle" onClick={() => setIsOpen(!isOpen)}>
        Chat
      </div>
      {isOpen && (
        <div className="chatbox-container">
          <div className="chatbox-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbox-message ${msg.role === 'user' ? 'user' : 'bot'}`}
              >
                {msg.role === 'user' && <FaFemale className="user-icon" />}
                {msg.role === 'assistant' && <FaRobot className="bot-icon" />}
                <p><strong>{msg.role === 'user' ? 'You' : 'מייעץ אלקטרוני'}:</strong> {typeof msg.content === 'string' ? msg.content.split('\n').map((line, i) => <span key={i}>{line}<br /></span>) : msg.content}</p>
              </div>
            ))}
            {isPending && (
              <div className="chatbox-message bot">
                <FaRobot className="bot-icon" />
                <p><strong>מייעץ אלקטרוני:</strong> Typing...</p>
              </div>
            )}
          </div>
          <div className="chatbox-input-container">
            <input
              className="chatbox-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => (e.key === 'Enter' ? handleSend() : null)}
              placeholder="Type your message..."
            />
            <button className="chatbox-button" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
