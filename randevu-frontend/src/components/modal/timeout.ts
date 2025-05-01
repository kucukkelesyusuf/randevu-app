function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const cn = async (className: string, delay: number = 1000):Promise<string> => {
  await sleep(delay);
  return className;
};
