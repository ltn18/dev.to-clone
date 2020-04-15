import React, { useContext, useState } from 'react';
import { Container, Form, Badge, Button } from 'react-bootstrap';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';

import withAuth from '../../hoc/authHoc';
import authCtx from "../../contexts/auth";

import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

const titleStyle = {
  border: 0,
  fontSize: 36,
}

const tagStyle = {
  border: 0,
  width: 200,
}

const NewPost = () => {
  const { authUser } = useContext(authCtx);

  const [content, setContent] = useState({ text: "", html: "" });
  const [tags, setTags] = useState([]);

  const [isPreview, setPreview] = useState(false);

  const addTags = event => {
    if (event.keyCode === 13) {
      const splitTags = event.target.value.split(" ");
      for (let i = 0; i < splitTags.length; i++) {
        if (!tags.includes(splitTags[i])) {
          setTags(tags.concat(splitTags));
        }
      }
      event.target.value = "";
    }
  }

  const removeTag = tag => {
    setTags(tags.filter((item) => item !== tag));
  }

  return (
    <>
      <Container>
        <Form.Control
          type="text"
          className="no-focus text-center code my-5"
          style={titleStyle}
          placeholder="Enter post title ..."
        />
        <div className="text-right font-italic code my-3">
          by <b>{authUser.user.username}</b>
        </div>
        <div className="d-flex justify-content-center align-items-center code my-3">
          <span>Tags: </span>
          {tags.map((tag) => (
            <Badge variant="info" key={tag} className="mx-1" onClick={() => { removeTag(tag) }}>
              {"#" + tag}
            </Badge>
          ))}
          <Form.Control
            type="text"
            className="no-focus text-center code"
            style={tagStyle}
            placeholder="Add new tags"
            onKeyUp={e => addTags(e)}
          />
        </div>

        <MdEditor
          renderHTML={(text) => mdParser.render(text)}
          style={{ height: 500 }}
          value={content.text}
          onChange={value => setContent(value)}
        />
      </Container>
      <div className="d-flex justify-content-center align-items-center bg-light fixed-bottom py-3">
        <Button
          className="mx-2"
          variant="secondary"
          onClick={() => setPreview(!isPreview)}
        >
          {isPreview ? "Edit" : "Preview"}
        </Button>
        <Button className="mx-2" variant="primary">Save</Button>
      </div>
    </>
  )
}

export default withAuth(NewPost); // using higher order function;
