const loadSchema = (name: string) => `${__dirname}/${name}.gql`

const bookSchema = loadSchema("book");

export  {
  bookSchema,
}
