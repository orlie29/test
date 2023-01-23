import Component from '@glimmer/component';

export default class ProjectsFilterComponent extends Component {
  get results() {
    let { projects, query } = this.args;

    if (query) {
      projects = projects.filter((project) => project.title.includes(query));
    }

    return projects;
  }
}
