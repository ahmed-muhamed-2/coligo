import { http } from './httpServices';

const QUIZES_SERVICE = 'http://test.coligolms.com/api/quiz';
// const QUIZES_SERVICE = 'https://jsonplaceholder.typicode.com/todos';
const LISTQUIZES = http.get(QUIZES_SERVICE);

export default LISTQUIZES;



