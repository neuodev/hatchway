const sortValues = ['id', 'reads', 'likes', 'popularity'];
const directions = ['asc', 'desc'];
module.exports.validSortByParam = function (sortBy) {
  return sortValues.find(value => value === sortBy);
};
module.exports.validDirectionParam = function (direction) {
  return directions.find(value => value === direction);
};
