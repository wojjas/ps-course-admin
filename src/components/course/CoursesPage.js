import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: null}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});

    // this.setState((prevState) => {
    //   return {course: prevState.course};
    // });
  }

  onClickSave(event) {
    alert(`Saving ${this.state.course.title}`);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Courses</h2>
        <form action={this.onClickSave}>
          <input
            type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title}/>
          <input
            type="submit"
            value="Save"
            onClick={this.onClickSave}/>
        </form>
      </div>
    );
  }
}

export default CoursesPage;

