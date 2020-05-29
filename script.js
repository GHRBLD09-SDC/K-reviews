import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 30,
  duration: '5s',
};

const localHelpful = 'http://localhost:8154/reviews/helpful/1';
const ec2Helpful = 'http://ec2-3-133-97-46.us-east-2.compute.amazonaws.com:8153/reviews/helpful/1';

export default () => {
  const res = http.get(localHelpful);
  check(res, {
    'is status 204': (r) => r.status === 204,
  });
  sleep(1);
};
