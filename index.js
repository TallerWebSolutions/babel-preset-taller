const presetBabelPolyfill = require('babel-polyfill')
const presetEs2015 = require('es2015')
const presetStage0 = require('stage-0')

const transformDecoratorsLegacy = require('babel-plugin-transform-decorators-legacy')
const transformES3PropertyLiterals = require('babel-plugin-transform-es3-property-literals')
const transformES3MemberExpressionLiterals = require('babel-plugin-transform-es3-member-expression-literals')
const transformRuntime = require('babel-plugin-transform-runtime')

module.exports = {
  presets: [
    presetBabelPolyfill,
    presetEs2015,
    presetStage0
  ],
  plugins: [
    transformDecoratorsLegacy,
    transformES3PropertyLiterals,
    transformES3MemberExpressionLiterals,
    transformRuntime
  ]
};
