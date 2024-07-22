/* Crear un nuevo proyecto. */
/* Notificar a los usuarios seleccionados para que participen en el proyecto. */
import NewProjectDto from './dtos/newProject.dto';

class Project {
    //TODO: Project debe ser un singleton.
  private static projects: Object[];

  private static _instance: Project;

  private constructor() { }

  public static getInstance(): Project {
    if(!Project._instance) {
      Project._instance = new Project();
    }
    return Project._instance;
  }

  create(dto: NewProjectDto) {
    Project.projects.push(dto);
  }
  listAll(): Object[] {
    return Project.projects;
  }



}


class ProjectUseCase {
  private project: Project;

  constructor() {
    this.project = Project.getInstance();
    
  }

  create(projectInfo: NewProjectDto) {
    // Dado que los datos van a llegar desde un DTO, tengo que deserializarlos y transformarlos
    // en ProjectInformation.

    // verificar que no exista un proyecto con el mismo nombre en ese espacio de usuario
    // Verificar que no exista un poyecto con id duplicado
    // Almacenar la informacion del proyecto dentro de la db.
    this.project.create(projectInfo);
  }

  // Permite obtener un listado de usuarios de la plataforma
  // para invitarlos al proyecto. Esto debe hacerse desde el dominio
  // puesto que es logica de dominio y una responsabilidad diferente.

  listAll(): Object[] {
    return this.project.listAll();
  }

}

export default ProjectUseCase;
