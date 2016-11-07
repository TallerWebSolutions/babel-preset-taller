const presetEs2015 = require('babel-preset-es2015')
const presetStage0 = require('babel-preset-stage-0')

const transformDecoratorsLegacy = require('babel-plugin-transform-decorators-legacy')
const transformES3PropertyLiterals = require('babel-plugin-transform-es3-property-literals')
const transformES3MemberExpressionLiterals = require('babel-plugin-transform-es3-member-expression-literals')
const transformRuntime = require('babel-plugin-transform-runtime')

module.exports = {
  presets: [
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
