import {Typography} from "../src/components/Typography/Typography";
import {caller} from "../server/routes";
import {getRandomCharactersPage} from "../src/utils";
import {CharacterCard} from "../src/components/CharacterCard/CharacterCard";

import styles from './page.module.scss'

export default async function RootPage() {
  const charactersResponse = await caller.getCharacters({params: {page: getRandomCharactersPage()}})
  const characters = charactersResponse.response.results.slice(0, 9);
  return (
      <section>
        <Typography variant='title-1' tag='h1'>Rick and Morty</Typography>
        <ul className={styles.characters_container}>
          <li>
            {characters.map((character: Character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
          </li>
        </ul>
      </section>
  )
}
