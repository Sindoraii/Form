/* import */
import Form from "./components/Form";

const root = document.getElementById('root');

/* stub data */
let entity = {
    name: 'Name',
    surname: 'Surname',
    email: 'emailsdsk@gmail.com',
    dateOfBirth: '1994-02-13',
    cardNumber: '7777 7777 7777 7777',
    cardExpiration: '2023-02',
    cardCvc: '123',
}
const FormComponent = new Form(entity,false);
FormComponent.mount(root);
