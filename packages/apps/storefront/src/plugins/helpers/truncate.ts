export const truncate = ({ content, capit }: { content: string; capit: number }) => {
  let string = '';
  if (content.length < capit) {
    return content;
  }

  for (let i = 0; i < capit; i++) {
    string += content[i];
  }
  string += '...';

  return string;
};
