import _ from 'lodash';

const transformOptions = (data = [], icon = null) => {
  if (!_.isArray(data)) {
    throw new Error('fancy select data should be an array');
  }
  return _.map(data, (obj, index) => {
    // set default icon
    if (!_.isNull(icon) && _.isNull(_.get(obj, 'icon', null))) {
      _.assign(obj, { icon });
    }
    // if no group is set, give each object a unique identifier
    if (_.isNull(_.get(obj, 'group', null))) {
      _.assign(obj, { group: index });
    }
    // if no value property is set, create one from the label
    if (_.isNull(_.get(obj, 'value', null))) {
      const value = _.kebabCase(`${obj.group}-${obj.label}`);
      _.assign(obj, { value });
    }

    return obj;
  });
};

const groupOptions = (data, icon) => {
  const result = [];
  const grouped = _.groupBy(transformOptions(data, icon), obj => obj.group);

  _.forEach(_.keys(grouped), (key) => {
    const obj = {
      label: key,
      options: grouped[key],
    };

    result.push(obj);
  });

  return result;
};

export {
  transformOptions,
  groupOptions,
};
