export const scrollIntoView = (id: string, offset: number = 100) => {
  const top = document.querySelector(id)
    ? //@ts-ignore
      document.querySelector(id).getBoundingClientRect().top - document.body.getBoundingClientRect().top - offset
    : undefined;
  window.scrollTo({
    behavior: 'smooth',
    top: top,
  });
};
