/*
 ** Copyright (c) 2022 Oracle and/or its affiliates.
 */

/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const { setGenerateWidget } = require('./generators');
const { setLowerCase, setCamelize, setKebabler } = require('./helpers');

module.exports = function (plop) {
  setLowerCase(plop);
  setKebabler(plop);
  setCamelize(plop);
  setGenerateWidget(plop);
};
