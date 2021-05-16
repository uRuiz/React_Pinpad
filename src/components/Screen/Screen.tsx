import './Screen.scss';

interface iScreenProps {
  password: string;
  lockScreen: boolean;
}

export const Screen = ({password, lockScreen}: iScreenProps) => {
  const regex = /[\s\S](?!$)/g;
  const encryptedPassword = (password === 'ERROR' || password === 'OK')? password : password.replace(regex, '*');

  return (
    <div className='input-container'>
      <input type='text' disabled value={encryptedPassword}/>
    </div>
  )
}