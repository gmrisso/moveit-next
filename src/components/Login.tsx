import { useContext } from 'react';

import { signIn, useSession } from 'next-auth/client';

import styles from '../styles/components/Login.module.css';

export function Login() {
 
  return (
    <div className={styles.LoginContainer}>
        <div className={styles.Symbol} />

        <div className={styles.LoginSide}>

            <div className={styles.Logo} />

            <div className={styles.Welcome}>Bem-vindo</div>

            <div className={styles.Start}>Faça login para começar</div>

            <div className={styles.BtSignin}>
                <button 
                    type="button"
                    className={styles.LoginButton}
                    onClick={() => signIn()}>Logar
                </button>
            </div>

            
        </div>
        
    </div>
  );
}
