import './Screen.scss';

const SCREEN_MESSAGES = ['OK', 'ERROR', 'LOCKED']

interface iScreenProps {
  password: string;
}

export const Screen = ({password}: iScreenProps) => {
  const regex = /[\s\S](?!$)/g;
  const encryptedPassword = (SCREEN_MESSAGES.includes(password)) ? password : password.replace(regex, '*');
  let messageColor;
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