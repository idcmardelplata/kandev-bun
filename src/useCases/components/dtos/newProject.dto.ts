class NewProjectDto {
  public title: string = "";
  public description: string = "";
  public picture: string ="";


  fromObject(obj: Object):  NewProjectDto {
    let dto = new NewProjectDto();
    dto.title = obj.title;
    dto.description = obj.description;
    dto.picture = obj.picture;
    return dto;
  }

  toObject(): Object {
    //TODO: Crear una excepcion para notificar que el dto esta vacio.
    return  {
      title: this.title,
      description: this.description,
      picture: this.picture
    }
  }
}

export default NewProjectDto;
