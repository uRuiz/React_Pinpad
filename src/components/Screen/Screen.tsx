import './Screen.scss';

const SCREEN_MESSAGES = ['OK', 'ERROR', 'LOCKED']

interface iScreenProps {
  password: string;
}

export const Screen = ({password}: iScreenProps) => {
  const regex = /[\s\S](?!$)/g;
  const encryptedPassword = (SCREEN_MESSAGES.includes(password)) ? password : password.replace(regex, '*');

  return (
    <div className='input-container'>
      <input type='text' disabled value={encryptedPassword}/>
    </div>
  )
}