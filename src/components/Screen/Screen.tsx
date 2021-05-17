import './Screen.scss';
import { SCREEN_MESSAGES } from '../../constants';

interface iScreenProps {
  password: string;
}

export const Screen = ({password}: iScreenProps) => {
  const regex = /[\s\S](?!$)/g;
  const screenMessageValues = Object.values(SCREEN_MESSAGES);
  const encryptedPassword: string = (screenMessageValues.includes(password)) ? password : password.replace(regex, '*');
  let messageColor: string = '';
  if (password === 'ERROR'){
    messageColor = 'input__error';
  } else if (password === 'LOCKED'){
    messageColor = 'input__locked';
  } else if (password === 'OK'){
    messageColor = 'input__ok';
  }

  return (
    <div className='input-container'>
      <input type='text' disabled value={encryptedPassword} className={messageColor}/>
    </div>
  )
}