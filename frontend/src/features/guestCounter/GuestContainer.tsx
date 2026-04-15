interface GuestCounterProps {
  label: string;
  sublabel: string;
  required?: boolean;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

import "./GuestContainer.css";

const GuestCounter = ({ label, sublabel, required, value, onDecrement, onIncrement }: GuestCounterProps) => {
  return (<div className="guest-counter">
    <div className="guest-counter__info">
      <span className="guest-counter__label">{label}{required && <span className="guest-counter__required">*</span>}</span>
      <span className="guest-counter__sublabel">{sublabel}</span>
    </div>
    <div className="guest-counter__controls">
      <button className="guest-counter__btn" onClick={onDecrement} type="button">−</button>
      <span className="guest-counter__value">{value}</span>
      <button className="guest-counter__btn" onClick={onIncrement} type="button">+</button>
    </div>
  </div>);
};

export default GuestCounter;