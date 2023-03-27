import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Если вы хотите начать измерение производительности в своем приложении, передайте функцию
// Для регистрации результатов (например: reportWebVitals(console.log))
// Или отправить на конечную точку аналитики.
reportWebVitals();
