import { http } from './httpServices';

const ANNOUNCMENT_SERVICE = 'http://test.coligolms.com/api/announcement';
// const ANNOUNCMENT_SERVICE = 'https://jsonplaceholder.typicode.com/todos';
const realAnnouncment = http.get(ANNOUNCMENT_SERVICE);

export default realAnnouncment;



