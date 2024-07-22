export default interface Server {
  start(port: number): Promise<void>;
};
