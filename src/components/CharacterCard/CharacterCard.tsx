import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '../../utils';
import { Typography } from '../Typography/Typography';
import { CharacterStatus } from '../CharacterStatus/CharacterStatus';

import styles from './CharacterContainter.module.scss';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image src={character.image} alt={character.name} fill />
      </div>
      <div className={styles.info}>
        <div>
          <CharacterStatus species={character.species} status={character.status} />
        </div>
        <Typography tag='h2' variant='title-2'>
          <Link href={`${ROUTES.CHARACTER}/${character.id}`}>{character.name}</Link>
        </Typography>
        <div className={styles.data}>
          <Typography tag='span' variant='sub-title-2'>
            Last known location:
          </Typography>

          <Typography tag='span' variant='body-1'>
            <a href='#'>{character.location.name}</a>
          </Typography>
        </div>
      </div>
    </div>
);