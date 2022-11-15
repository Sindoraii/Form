/* import */
import Form from "./components/Form";

/* init */
const root = document.getElementById('root');
const FormComponent = new Form({name:'myName', surname:"mySurname"},false);

FormComponent.mount(root);
