import axios from "axios";
import actions from './actions';

const {
    fetchRequest,
    fetchSuccess,
    fetchError,
    addRequest,
    addSuccess,
    addError,
    deleteRequest,
    deleteSuccess,
    deleteError,
} = actions;

axios.defaults.baseURL = 'http://localhost:4040';

const Fetch = () => dispatch => {
    dispatch(fetchRequest());
    axios
        .get("/contacts")
        .then(({ data }) => dispatch(fetchSuccess(data)))
        .catch(error => dispatch(fetchError(error)));
};

const Add =
    ({ name, number }) =>
        dispatch => {
            const contact = { name, number };
            dispatch(addRequest());
            axios
                .post('/contacts', contact)
                .then(({ data }) => dispatch(addSuccess(data)))
                .catch(error => dispatch(addError(error)));
        };
  

const Delete = id => dispatch => {
    dispatch(deleteRequest());
    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteSuccess(id)))
        .catch(error => dispatch(deleteError(error)));
};

export default {
    Fetch,
    Add,
    Delete,
};