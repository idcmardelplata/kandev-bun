import {expect, test, describe} from 'bun:test';
import ProjectUseCase from '../../src/useCases/components/project';
import NewProjectDto from '../../src/useCases/components/dtos/newProject.dto';


describe("Project creation", () => {
  // TODO: Should add project metainformation (as owner by example)
  test.todo("Successful creation of a project");
  test.todo("Project id should be unique");
  test.todo("Project name should be unique in the user space");
  test.todo("should send email invitations to selected users");
  test.todo("When project is created then a default kanban board should be created");

})


