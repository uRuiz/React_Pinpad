import './ButtonKey.scss';

interface iButtonProps {
  number: number;
  onButtonClick: any;
}

export const ButtonKey = (props: iButtonProps) => {
  return (
    <button className="button-key" onClick={() => props.onButtonClick(props.number)}>
        {props.number}
    </button>
  )
}