import React from 'react';
import confirm from '../accets/confirm-icon.svg'

export const Success = ({ count }) => {
   return (
      <div class="success-block">
         <img src={confirm} alt="Success" />
         <h3>Успішно!</h3>
         <p>Всім {count} користувачам відправлено запрошення</p>
         <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
      </div>
   );
};