import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form
} from "reactstrap";
import AddTagsModal from "./AddTagsModal";

class CreatePostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      unmountOnClose: true,
      postTitleField: "",
      postDescriptionField: "",
      postLinksField: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={e => e.preventDefault()}>
          <Button color="secondary" onClick={this.toggle}>
            Post Something
          </Button>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          unmountOnClose={this.state.unmountOnClose}
          size="lg"
        >
          <ModalHeader toggle={this.toggle}>Post Something</ModalHeader>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <ModalBody>
              <Input
                type="text"
                name="postTitleField"
                value={this.state.postTitleField}
                onChange={e => this.handleChange(e)}
                placeholder="Title"
              />
              <Input
                type="textarea"
                placeholder="Description"
                rows={3}
                name="postDescriptionField"
                value={this.state.postDescriptionField}
                onChange={e => this.handleChange(e)}
              />
              <Input
                type="text"
                placeholder="Links (optional)"
                name="postLinksField"
                value={this.state.postLinksField}
                onChange={e => this.handleChange(e)}
              />
              <AddTagsModal />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" type="submit" onClick={this.toggle}>
                Create Post
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default CreatePostModal;