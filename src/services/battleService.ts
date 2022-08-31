import axios from "axios";
import * as fighterRepository from "../repositories/fighterRepository";

export async function battle(firstUser: string, secondUser: string) {
  const firstUserRepository = await getRepositoryFighter(firstUser);
  const secondtUserRepository = await getRepositoryFighter(secondUser);

  const firstFighter = await getFighter(firstUser);
  const secondFighter = await getFighter(secondUser);

  return 'funcão paara retornar as constantes acima';
}

async function getRepositoryFighter(username: string) {
  const { data } = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  return data;
}

async function getFighter(username: string) {
  const fighter = await fighterRepository.findByUsername(username);

  if (!fighter) {
    const addFighter = await fighterRepository.insertFighter(username);
    return { id: addFighter.id, username, wins: 0, losses: 0, draws: 0 };
  }
  return fighter;
}
