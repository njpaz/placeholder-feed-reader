export default function () {
  this.namespace = '/api';

  this.get('/feeds');

  this.get('/feeds/:id');
}
