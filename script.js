import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 20,
  duration: '30s',
};

export default () => {
  http.get('http://ec2-3-133-97-46.us-east-2.compute.amazonaws.com:8153/reviews/helpful/1');
  sleep(1);
}