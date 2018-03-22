const runCodePrettify = () => {
  const pres = document.body.querySelectorAll('pre');
  [].forEach.call(pres, function(el) {
    el.classList.add('prettyprint');
    el.classList.add('linenums');
  });
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;

  script.src = 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
};

export default runCodePrettify;