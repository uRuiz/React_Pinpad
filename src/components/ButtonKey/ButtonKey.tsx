import './ButtonKey.scss';

interface iButtonProps {
  value: string;
  onButtonClick: any;
  disabled: boolean
}

export const ButtonKey = (props: iButtonProps) => {
  return (
    <button className="button__key" disabled={props.disabled} onClick={() => props.onButtonClick(props.value)}>
        {props.value}
    </button>
  )
}