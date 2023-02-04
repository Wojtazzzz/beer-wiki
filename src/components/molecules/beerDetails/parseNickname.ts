const regex = /(?<=\<).+?(?=\>)/;

export const parseNickname = (nickname?: string) => {
  return regex.exec(nickname ?? '')?.[0];
};
