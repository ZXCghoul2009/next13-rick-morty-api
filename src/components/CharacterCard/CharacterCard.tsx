import Image from 'next/image'
import {Typography} from '../index';

import styles from './CharacterContainter.module.scss'


interface CharacterCardProps {
  character: Character,

}

const CharacterCard:React.FC<CharacterCardProps> = ({character}) => {
  return (
      <div className={styles.container}>
        <Image src={character.image} alt={character.name} layout={'fill'}/>
        <Typography tag={'h2'} variant={"title-2"}>{character.name}</Typography>
      </div>
  );
};

export default CharacterCard;