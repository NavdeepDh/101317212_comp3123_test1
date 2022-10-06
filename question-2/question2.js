const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({'message': 'delayed success!'});
    }, 500);
});

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({'error': 'delayed exception!'});
    }, 500);
});

resolvedPromise.then(ResolveRes => {console.log(ResolveRes);});
rejectedPromise
  .then((RejectRes) => console.log(RejectRes))
  .catch((error) => console.log(error));