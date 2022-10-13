declare module "*.css" {
  const url: {
    readonly [key: string]: string;
  };
  export default url;
}
