exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "My home route check",
    }),
  };
};

exports.sai = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "sai kumar deployed!",
    }),
  };
};
