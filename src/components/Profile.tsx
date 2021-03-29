import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/Profile.module.css';

import { signIn, signOut, useSession } from 'next-auth/client'

export function Profile(){

    const { level } = useContext(ChallengesContext);

    const [session, loading] = useSession();

    return(
        <div className={styles.profileContainer}>
            <img src={session.user.image} alt={session.user.name} />
            
            <div>
                <strong>{session.user.name}</strong>
                
                <p>
                <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}