export const typeColor = (type) => {
  switch (type) {
    case 'normal':
      return '#a2bdb6';
    case 'fighting':
      return '#9190dd';
    case 'flying':
      return '#58e095';
    case 'poison':
      return '#0c964a';
    case 'ground':
      return '#8d960c';
    case 'rock':
      return '#6e7a72';
    case 'ghost':
      return '#321672';
    case 'steel':
      return '#596069';
    case 'fire':
      return '#cf534a';
    case 'water':
      return '#4a66e2';
    case 'grass':
      return '#1cd41c';
    case 'electric':
      return '#ece031';
    case 'psychic':
      return '#c2be86';
    case 'ice':
      return '#d2dafc';
    case 'dragon':
      return '#392f52';
    case 'dark':
      return '#0c061a';
    case 'fairy':
      return '#972f78';
    case 'bug':
      return '#7c680c';

    default:
      return '#a2bdb6';
  }
};
