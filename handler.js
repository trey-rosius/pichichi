"use strict";

module.exports.hello = async (event) => {

  const timestamp = Math.round(new Date().getTime() / 1000);
  return {
    statusCode: 200,
    body: JSON.stringify({
        message: "Automate all things!",
        timestamp: timestamp,
      },
      null,
      2
    ),
  };
};
