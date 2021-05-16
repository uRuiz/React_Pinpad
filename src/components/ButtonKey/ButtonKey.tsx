import './ButtonKey.scss';

interface iButtonProps {
  value: string;
  onButtonClick: any;
  disabled: boolean
}

export const ButtonKey = ({value, onButtonClick, disabled}: iButtonProps) => {
  return (
    <button className="button__key" disabled={disabled} onClick={() => onButtonClick(value)}>
        {value}
    </button>
  )
}