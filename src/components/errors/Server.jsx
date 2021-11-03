import React from "react";

const ErrorServer = ({text}) => {
  const msg = text || 'Возникла ошибка при загрузке данных...';
  
  return (
    <div className="error">
      {msg}
    </div>
  )
}

export default ErrorServer;