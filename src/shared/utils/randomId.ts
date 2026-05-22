const randomId = (name: string, production = false) =>
  production || ['development', 'test'].includes(import.meta.env.MODE)
    ? `${name}_${Date.now()}${Math.round(Math.random() * 1000)}`
    : undefined;

export default randomId;
