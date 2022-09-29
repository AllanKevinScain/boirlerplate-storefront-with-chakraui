/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */
/* eslint-disable no-undef */
module.exports = {
  setLowerCase: plop =>
    plop.setHelper('stringLowerCase', str => {
      return str.toLowerCase();
    })
};
