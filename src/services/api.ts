import axios from "axios";

const API_URL = "http://192.168.0.3:3333";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

interface Ad {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: string;
  hourStart: string;
  hourEnd: string;
}

export async function getAdsByGame(id: string, fn: (data: Ad[]) => void) {
  return await fetch(`${API_URL}/games/${id}/ads`)
    .then((response) => response.json())
    .then((data) => fn(data))
    .catch((err) => console.log(err));
}

export async function getGames2(fn: (data: Game[]) => void) {
  const response = await axios.get(API_URL);
  return fn(response.data);
}

export async function getGames(fn: (data: Game[]) => void) {
  return await fetch(`${API_URL}/games`)
    .then((response) => response.json())
    .then((data) => fn(data))
    .catch((err) => console.log(err));
}

export async function getDiscordByAd(id: string, fn: (data: string) => void) {
  return await fetch(`${API_URL}/ads/${id}/discord`)
    .then((response) => response.json())
    .then((data) => fn(data.discord))
    .catch((err) => console.log(err));
}
