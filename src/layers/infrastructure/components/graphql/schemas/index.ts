 const _loadSchema = async (name: string): Promise<string> => {
  let file = Bun.file(`${__dirname}/${name}.gql`);
  return await file.text();
} 

const taskSchema = await _loadSchema("task")

export  {
   taskSchema
};
