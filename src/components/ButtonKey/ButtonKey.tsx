import './ButtonKey.scss';

interface iButtonProps {
  value: string;
  onButtonClick: any;
}

export const ButtonKey = (props: iButtonProps) => {
  return (
    <button className="button__key" onClick={() => props.onButtonClick(props.value)}>
        {props.value}
    </button>
  )
}