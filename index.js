/* import */
import Form from "./components/Form";

/* init */
const root = document.getElementById('root');
const FormComponent = new Form({name:'Vanya',surname:'Ivanov'},false);

FormComponent.mount(root);
