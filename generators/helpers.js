/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */
/* eslint-disable no-undef */
module.exports = {
  setLowerCase: plop =>
    plop.setHelper('stringLowerCase', str => {
      return str.toLowerCase();
    }),
  setCamelize: plop =>
    plop.setHelper('camelizer', str => {
      let string = str.replace(/\W+(.)/g, (_, chr) => {
        return chr.toUpperCase();
      });

      string = string[0].toUpperCase() + string.substring(1);

      return string;
    }),
  setKebabler: plop =>
    plop.setHelper('kebabler', str =>
      str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    )
};
