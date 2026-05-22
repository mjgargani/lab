async function imgLoader(sources: string[]) {
  if (['test'].includes(import.meta.env.MODE)) return Promise.resolve(true);

  const promises: Array<Promise<Array<string | boolean>>> = [];

  sources.forEach((currentSrc) =>
    promises.push(
      new Promise((res, rej) => {
        const img = new Image();
        img.onload = () => {
          res([currentSrc, true]);
        };

        img.onerror = () => {
          rej(new Error(`'${currentSrc}' is not loaded`));
        };

        img.src = currentSrc;
      }),
    ),
  );

  return Promise.all(promises);
}

export default imgLoader;
