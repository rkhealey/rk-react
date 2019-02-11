import { css } from 'styled-components';

export default theme =>
  css`
  .react-datepicker-component.rk-datepicker {
    position: relative;

    input {
      background: white;
      border: 1px solid ${theme.colorBorder};
      border-radius: 4px;
      display: block;
      font-size: 1rem;
      margin: 10px 0;
      outline: none;
      padding: 1rem;
      transition: box-shadow 0.3s ease;
      width: 100%;
  
      &:focus {
        box-shadow: 0 0 5px ${theme.colorSecondary};
      }
    }
  }
  .react-datepicker-component .button-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
  }

  .input-button {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    padding-right: 2rem;
    text-align: right;
    width: 100%;
  }

  .react-datepicker {
    color: ${theme.colorText};
  }
  
  .react-datepicker-input .input-button .material-icons {
    &:after {
      color: ${theme.colorMute};
      content: "date_range";
      display: block;
      font-family: inherit;
      font-size: 24px;
      margin-left: 1rem;
    }
  }

  .react-datepicker .react-datepicker-top .button-left,
  .react-datepicker .react-datepicker-top .button-right {
    display: block;
    height: 1.25rem;
    position: relative;
    width: 3rem;
  }
  .react-datepicker .react-datepicker-top .button-right:after,
  .react-datepicker .react-datepicker-top .button-left:after {
    content: 'arrow_forward';
    color: ${theme.colorBold};
    cursor: pointer;
    direction: ltr;
    display: inline-block;
    font-family: 'Material Icons';
    font-size: 24px;
    font-style: normal;
    font-weight: lighter;
    letter-spacing: normal;
    line-height: 1;
    position:absolute;
    right: 0;
    text-transform: none;
    white-space: nowrap;
    word-wrap: normal;
  }
  .react-datepicker .react-datepicker-top .button-left:after {
    content: 'arrow_back';
    left: 0;
    right: auto;
  }
  
  .react-datepicker.floating {
    background: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 1rem;
    position: absolute;
    right: 0;
  }
  .react-datepicker .week-days {
    color: ${theme.colorBold};
    display: flex;
    font-size: 0.85rem;
  }
  .react-datepicker .react-datepicker-row {
    display: flex;
  }
  .react-datepicker-top .display {
    display: flex;
  }
  .react-datepicker-button {
    margin-bottom: 1rem;
  }
  .react-datepicker-button.button-label {
    color: ${theme.colorBold};
    cursor: pointer;
    text-align: center;
  }
  .react-datepicker-body .react-datepicker-row {
    border: 1px solid ${theme.colorMute};
    border-bottom: 0;
  }
  .react-datepicker-body .react-datepicker-row:last-child {
    border-bottom: 1px solid ${theme.colorMute};
  }
  .react-datepicker-body .react-datepicker-picker {
    align-items: center;
    border-right: 1px solid ${theme.colorMute};
    cursor: pointer;
    display: flex;
    justify-content: center;
    min-height: 40px;
    width: 40px;
  }
  .react-datepicker-body .react-datepicker-picker:last-child {
    border-right: 0;
  }
  .react-datepicker-picker.day.current.selected {
    background-color: ${theme.colorPrimary};
    color: ${theme.colorWhite};
  }
`;
