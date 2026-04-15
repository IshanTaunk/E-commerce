import "./Dropdown.css";

export interface DropdownOption<Value extends string | number = string> {
  displayText: string;
  value: Value;
  isEnabled: boolean;
}

export interface DropdownProps<Value extends string | number>{
    options: Array<DropdownOption<Value>>;
    placeholder?: string;
    onChange?: (value: Value) => void;
  onOpen?: () => void;
}

const Dropdown = <Value extends string | number>({
    options, 
    placeholder = "Select an option",
  onChange,
  onOpen
}:DropdownProps<Value>) => {
    const iterableList: Array<DropdownOption<Value>> = Array.isArray(options)?options:[];
  return (
    <div className="dropdown-container">
    <select
      className="dropdown-select"
      defaultValue=""
      onFocus={onOpen}
            onChange={e => onChange?.(e.target.value as Value)}>
            <option value="" disabled>{placeholder}</option>
            {iterableList.map((option:DropdownOption<Value>)=>{
                return <option key={option.value} value={option.value}>{option.displayText}</option>
            })}
        </select>
    </div>
  )
}

export default Dropdown