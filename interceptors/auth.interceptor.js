exports.authInterceptor = (req, res, next) => {
  console.log(
    "____________________________________________________________________________________"
  );
  console.log("Check auth headers and add user to req");
  console.log(
    "____________________________________________________________________________________"
  );

  next();
};
