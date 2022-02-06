import { useState } from 'react';

const ToogleTheme = () => {
  const [isShowed, setIsShowed] = useState(false);

  function showIconTheme() {
    setIsShowed(!isShowed);
  }

  return (
    <>
      <input
        type="checkbox"
        className="checkbox"
        onChange={showIconTheme}
        id="checkbox"
      />
      <label htmlFor="checkbox" className="label">
        <i
          style={{
            color: isShowed ? '#d5d5d5' : '#111',
          }}
          className="fas fa-moon"
        ></i>
        <i
          style={{
            color: !isShowed ? 'yellow' : '#111',
          }}
          className="fas fa-sun"
        ></i>
        <div className="ball" />
      </label>

      <style jsx>
        {`
          .checkbox {
            opacity: 0;
            position: absolute;
          }

          .label {
            margin-left: 20px;
            width: 60px;
            height: 26px;
            background-color: #111;
            display: flex;
            border-radius: 50px;
            align-items: center;
            justify-content: space-between;
            padding: 5px;
            position: relative;
            transform: scale(1.3);
          }

          .ball {
            width: 22px;
            height: 22px;
            background-color: white;
            position: absolute;
            top: 2px;
            left: 2px;
            border-radius: 50%;
            transition: transform 0.2s linear;
          }

          /*  target the elemenent after the label*/
          .checkbox:checked + .label .ball {
            transform: translateX(34px);
          }

          .fa-moon {
            color: #d5d5d5;
            width: 20px;
            height: 22px;
            transition: all 0.2s linear;
          }

          .fa-sun {
            color: yellow;
            width: 20px;
            height: 22px;
            transition: all 0.2s linear;
          }
        `}
      </style>
    </>
  );
};

export { ToogleTheme };
