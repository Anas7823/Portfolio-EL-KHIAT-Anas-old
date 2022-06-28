/****************************************
 * Feedback
 ***************************************/

const Feedback = {};

Feedback.validate = function(target) {
  target.classList.remove('is-invalid');
  target.classList.add('is-valid');
};

Feedback.invalidate = function(target) {
  target.classList.remove('is-valid', 'is-invalid');
};

Feedback.error = function(target) {
  target.classList.remove('is-valid');
  target.classList.add('is-invalid');
};
