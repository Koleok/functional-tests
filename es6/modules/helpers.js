export default ({
  _
}) => {
  const container = {

    /**
     * Split a key name by '.' and return an object of
     * accordingly nested and with the original
     * value at its core
     *
     * @param  {String} key The nested key ex. 'level1.level2.level3'
     * @param  {Any}    val The value of the key
     * @return {Object}     Nested result ex. { level1: { level2: { level3: val } } }
     */
    mapKey: ({
      key, val
    }) => _.set({}, key, val),

    /**
     * Map any properties with nested keys to the implied
     * heirarchy
     *
     * @param {Object} obj
     * @return {Object}
     */
    mapDottedKeys: obj =>
      _.reduce(obj, (result, val, key) => ({
        ...result,
        ...container.mapKey({
          key, val
        })
      }), {}),
  }

  return container;
};
