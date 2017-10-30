const moment = require.requireActual("moment");

export default (timestamp = [2000]) => {
  return moment(timestamp);
};
