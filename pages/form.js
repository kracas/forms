import Form from "react-jsonschema-form"
import schema from "./schema"
import uiSchema from "./UISchema"
import ReactDOM from 'react-dom';


ReactDOM.render((
    <Form schema={schema} uiSchema={uiSchema} />
  ), document.getElementById("app"));

