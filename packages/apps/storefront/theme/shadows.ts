const androidDepth = {
  penumbra: ['0px 0px 15px', '0px 1px 5px 1px']
};

const generateShadow = (elevation: number) => {
  return { boxShadow: `${androidDepth.penumbra[elevation]} rgba(0, 0, 0, 0.1)` };
};

export { generateShadow };
