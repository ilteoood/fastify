// This file is autogenerated by build/build-validation.js, do not edit
/* istanbul ignore file */
// constant needed for customRule0 to work
const self = {}

'use strict';
var validate = (function() {
  var refVal = [];
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict';
    var vErrors = null;
    var errors = 0;
    if (rootData === undefined) rootData = data;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      if (data.connectionTimeout === undefined) data.connectionTimeout = 0;
      if (data.keepAliveTimeout === undefined) data.keepAliveTimeout = 5000;
      if (data.bodyLimit === undefined) data.bodyLimit = 1048576;
      if (data.caseSensitive === undefined) data.caseSensitive = true;
      if (data.ignoreTrailingSlash === undefined) data.ignoreTrailingSlash = false;
      if (data.disableRequestLogging === undefined) data.disableRequestLogging = false;
      if (data.maxParamLength === undefined) data.maxParamLength = 100;
      if (data.onProtoPoisoning === undefined) data.onProtoPoisoning = "error";
      if (data.onConstructorPoisoning === undefined) data.onConstructorPoisoning = "ignore";
      if (data.pluginTimeout === undefined) data.pluginTimeout = 10000;
      if (data.requestIdHeader === undefined) data.requestIdHeader = "request-id";
      if (data.requestIdLogLabel === undefined) data.requestIdLogLabel = "reqId";
      var errs__0 = errors;
      var valid1 = true;
      for (var key0 in data) {
        var isAdditional0 = !(false || validate.schema.properties.hasOwnProperty(key0));
        if (isAdditional0) {
          delete data[key0];
        }
      }
      if (valid1) {
        var data1 = data.connectionTimeout;
        var errs_1 = errors;
        if ((typeof data1 !== "number" || (data1 % 1) || data1 !== data1)) {
          var dataType1 = typeof data1;
          var coerced1 = undefined;
          if (dataType1 == 'boolean' || data1 === null || (dataType1 == 'string' && data1 && data1 == +data1 && !(data1 % 1))) coerced1 = +data1;
          if (coerced1 === undefined) {
            validate.errors = [{
              keyword: 'type',
              dataPath: (dataPath || '') + '.connectionTimeout',
              schemaPath: '#/properties/connectionTimeout/type',
              params: {
                type: 'integer'
              },
              message: 'should be integer'
            }];
            return false;
          } else {
            data1 = coerced1;
            data['connectionTimeout'] = coerced1;
          }
        }
        var valid1 = errors === errs_1;
        if (valid1) {
          var data1 = data.keepAliveTimeout;
          var errs_1 = errors;
          if ((typeof data1 !== "number" || (data1 % 1) || data1 !== data1)) {
            var dataType1 = typeof data1;
            var coerced1 = undefined;
            if (dataType1 == 'boolean' || data1 === null || (dataType1 == 'string' && data1 && data1 == +data1 && !(data1 % 1))) coerced1 = +data1;
            if (coerced1 === undefined) {
              validate.errors = [{
                keyword: 'type',
                dataPath: (dataPath || '') + '.keepAliveTimeout',
                schemaPath: '#/properties/keepAliveTimeout/type',
                params: {
                  type: 'integer'
                },
                message: 'should be integer'
              }];
              return false;
            } else {
              data1 = coerced1;
              data['keepAliveTimeout'] = coerced1;
            }
          }
          var valid1 = errors === errs_1;
          if (valid1) {
            var data1 = data.bodyLimit;
            var errs_1 = errors;
            if ((typeof data1 !== "number" || (data1 % 1) || data1 !== data1)) {
              var dataType1 = typeof data1;
              var coerced1 = undefined;
              if (dataType1 == 'boolean' || data1 === null || (dataType1 == 'string' && data1 && data1 == +data1 && !(data1 % 1))) coerced1 = +data1;
              if (coerced1 === undefined) {
                validate.errors = [{
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.bodyLimit',
                  schemaPath: '#/properties/bodyLimit/type',
                  params: {
                    type: 'integer'
                  },
                  message: 'should be integer'
                }];
                return false;
              } else {
                data1 = coerced1;
                data['bodyLimit'] = coerced1;
              }
            }
            var valid1 = errors === errs_1;
            if (valid1) {
              var data1 = data.caseSensitive;
              var errs_1 = errors;
              if (typeof data1 !== "boolean") {
                var dataType1 = typeof data1;
                var coerced1 = undefined;
                if (data1 === 'false' || data1 === 0 || data1 === null) coerced1 = false;
                else if (data1 === 'true' || data1 === 1) coerced1 = true;
                if (coerced1 === undefined) {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.caseSensitive',
                    schemaPath: '#/properties/caseSensitive/type',
                    params: {
                      type: 'boolean'
                    },
                    message: 'should be boolean'
                  }];
                  return false;
                } else {
                  data1 = coerced1;
                  data['caseSensitive'] = coerced1;
                }
              }
              var valid1 = errors === errs_1;
              if (valid1) {
                var data1 = data.http2;
                if (data1 === undefined) {
                  valid1 = true;
                } else {
                  var errs_1 = errors;
                  if (typeof data1 !== "boolean") {
                    var dataType1 = typeof data1;
                    var coerced1 = undefined;
                    if (data1 === 'false' || data1 === 0 || data1 === null) coerced1 = false;
                    else if (data1 === 'true' || data1 === 1) coerced1 = true;
                    if (coerced1 === undefined) {
                      validate.errors = [{
                        keyword: 'type',
                        dataPath: (dataPath || '') + '.http2',
                        schemaPath: '#/properties/http2/type',
                        params: {
                          type: 'boolean'
                        },
                        message: 'should be boolean'
                      }];
                      return false;
                    } else {
                      data1 = coerced1;
                      data['http2'] = coerced1;
                    }
                  }
                  var valid1 = errors === errs_1;
                }
                if (valid1) {
                  var data1 = data.https;
                  if (data1 === undefined) {
                    valid1 = true;
                  } else {
                    var errs_1 = errors;
                    var errs__1 = errors;
                    var valid1 = true;
                    var errs_2 = errors;
                    var errs__2 = errors;
                    var errs_3 = errors;
                    var errs__3 = errors,
                      prevValid3 = false,
                      valid3 = false,
                      passingSchemas3 = null;
                    var errs_4 = errors;
                    if (typeof data1 !== "boolean") {
                      var dataType4 = typeof data1;
                      var coerced4 = undefined;
                      if (data1 === 'false' || data1 === 0 || data1 === null) coerced4 = false;
                      else if (data1 === 'true' || data1 === 1) coerced4 = true;
                      if (coerced4 === undefined) {
                        var err = {};
                        if (vErrors === null) vErrors = [err];
                        else vErrors.push(err);
                        errors++;
                      } else {
                        data1 = coerced4;
                        data['https'] = coerced4;
                      }
                    }
                    var valid4 = errors === errs_4;
                    if (valid4) {
                      valid3 = prevValid3 = true;
                      passingSchemas3 = 0;
                    }
                    var errs_4 = errors;
                    if (data1 !== null) {
                      var dataType4 = typeof data1;
                      var coerced4 = undefined;
                      if (data1 === '' || data1 === 0 || data1 === false) coerced4 = null;
                      if (coerced4 === undefined) {
                        var err = {};
                        if (vErrors === null) vErrors = [err];
                        else vErrors.push(err);
                        errors++;
                      } else {
                        data1 = coerced4;
                        data['https'] = coerced4;
                      }
                    }
                    var valid4 = errors === errs_4;
                    if (valid4 && prevValid3) {
                      valid3 = false;
                      passingSchemas3 = [passingSchemas3, 1];
                    } else {
                      if (valid4) {
                        valid3 = prevValid3 = true;
                        passingSchemas3 = 1;
                      }
                      var errs_4 = errors;
                      if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
                        if (true) {
                          var errs__4 = errors;
                          var valid5 = true;
                          for (var key4 in data1) {
                            var isAdditional4 = !(false || key4 == 'allowHTTP1');
                            if (isAdditional4) {
                              delete data1[key4];
                            }
                          }
                          if (valid5) {
                            var data2 = data1.allowHTTP1;
                            if (data2 === undefined) {
                              valid5 = false;
                              var err = {};
                              if (vErrors === null) vErrors = [err];
                              else vErrors.push(err);
                              errors++;
                            } else {
                              var errs_5 = errors;
                              if (typeof data2 !== "boolean") {
                                var dataType5 = typeof data2;
                                var coerced5 = undefined;
                                if (data2 === 'false' || data2 === 0 || data2 === null) coerced5 = false;
                                else if (data2 === 'true' || data2 === 1) coerced5 = true;
                                if (coerced5 === undefined) {
                                  var err = {};
                                  if (vErrors === null) vErrors = [err];
                                  else vErrors.push(err);
                                  errors++;
                                } else {
                                  data2 = coerced5;
                                  data1['allowHTTP1'] = coerced5;
                                }
                              }
                              var valid5 = errors === errs_5;
                            }
                          }
                        }
                      } else {
                        var err = {};
                        if (vErrors === null) vErrors = [err];
                        else vErrors.push(err);
                        errors++;
                      }
                      var valid4 = errors === errs_4;
                      if (valid4 && prevValid3) {
                        valid3 = false;
                        passingSchemas3 = [passingSchemas3, 2];
                      } else {
                        if (valid4) {
                          valid3 = prevValid3 = true;
                          passingSchemas3 = 2;
                        }
                      }
                    }
                    if (!valid3) {
                      var err = {};
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                    } else {
                      errors = errs__3;
                      if (vErrors !== null) {
                        if (errs__3) vErrors.length = errs__3;
                        else vErrors = null;
                      }
                    }
                    var valid3 = errors === errs_3;
                    if (valid3) {
                      var err = {};
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                    } else {
                      errors = errs__2;
                      if (vErrors !== null) {
                        if (errs__2) vErrors.length = errs__2;
                        else vErrors = null;
                      }
                    }
                    var valid2 = errors === errs_2;
                    errors = errs__1;
                    if (vErrors !== null) {
                      if (errs__1) vErrors.length = errs__1;
                      else vErrors = null;
                    }
                    if (valid2) {
                      var errs_2 = errors;
                      customRule0.errors = null;
                      var errs__2 = errors;
                      var valid2;
                      valid2 = customRule0.call(self, validate.schema.properties.https.then.setDefaultValue, data1, validate.schema.properties.https.then, (dataPath || '') + '.https', data, 'https', rootData);
                      if (data) data1 = data['https'];
                      if (!valid2) {
                        validate.errors = [{
                          keyword: 'setDefaultValue',
                          dataPath: (dataPath || '') + '.https',
                          schemaPath: '#/properties/https/then/setDefaultValue',
                          params: {
                            keyword: 'setDefaultValue'
                          },
                          message: 'should pass "setDefaultValue" keyword validation'
                        }];
                        return false;
                      }
                      var valid2 = errors === errs_2;
                      valid1 = valid2;
                    }
                    if (!valid1) {
                      var err = {
                        keyword: 'if',
                        dataPath: (dataPath || '') + '.https',
                        schemaPath: '#/properties/https/if',
                        params: {
                          failingKeyword: 'then'
                        },
                        message: 'should match "' + 'then' + '" schema'
                      };
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                      validate.errors = vErrors;
                      return false;
                    }
                    var valid1 = errors === errs_1;
                  }
                  if (valid1) {
                    var data1 = data.ignoreTrailingSlash;
                    var errs_1 = errors;
                    if (typeof data1 !== "boolean") {
                      var dataType1 = typeof data1;
                      var coerced1 = undefined;
                      if (data1 === 'false' || data1 === 0 || data1 === null) coerced1 = false;
                      else if (data1 === 'true' || data1 === 1) coerced1 = true;
                      if (coerced1 === undefined) {
                        validate.errors = [{
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.ignoreTrailingSlash',
                          schemaPath: '#/properties/ignoreTrailingSlash/type',
                          params: {
                            type: 'boolean'
                          },
                          message: 'should be boolean'
                        }];
                        return false;
                      } else {
                        data1 = coerced1;
                        data['ignoreTrailingSlash'] = coerced1;
                      }
                    }
                    var valid1 = errors === errs_1;
                    if (valid1) {
                      var data1 = data.disableRequestLogging;
                      var errs_1 = errors;
                      if (typeof data1 !== "boolean") {
                        var dataType1 = typeof data1;
                        var coerced1 = undefined;
                        if (data1 === 'false' || data1 === 0 || data1 === null) coerced1 = false;
                        else if (data1 === 'true' || data1 === 1) coerced1 = true;
                        if (coerced1 === undefined) {
                          validate.errors = [{
                            keyword: 'type',
                            dataPath: (dataPath || '') + '.disableRequestLogging',
                            schemaPath: '#/properties/disableRequestLogging/type',
                            params: {
                              type: 'boolean'
                            },
                            message: 'should be boolean'
                          }];
                          return false;
                        } else {
                          data1 = coerced1;
                          data['disableRequestLogging'] = coerced1;
                        }
                      }
                      var valid1 = errors === errs_1;
                      if (valid1) {
                        var data1 = data.maxParamLength;
                        var errs_1 = errors;
                        if ((typeof data1 !== "number" || (data1 % 1) || data1 !== data1)) {
                          var dataType1 = typeof data1;
                          var coerced1 = undefined;
                          if (dataType1 == 'boolean' || data1 === null || (dataType1 == 'string' && data1 && data1 == +data1 && !(data1 % 1))) coerced1 = +data1;
                          if (coerced1 === undefined) {
                            validate.errors = [{
                              keyword: 'type',
                              dataPath: (dataPath || '') + '.maxParamLength',
                              schemaPath: '#/properties/maxParamLength/type',
                              params: {
                                type: 'integer'
                              },
                              message: 'should be integer'
                            }];
                            return false;
                          } else {
                            data1 = coerced1;
                            data['maxParamLength'] = coerced1;
                          }
                        }
                        var valid1 = errors === errs_1;
                        if (valid1) {
                          var data1 = data.onProtoPoisoning;
                          var errs_1 = errors;
                          if (typeof data1 !== "string") {
                            var dataType1 = typeof data1;
                            var coerced1 = undefined;
                            if (dataType1 == 'number' || dataType1 == 'boolean') coerced1 = '' + data1;
                            else if (data1 === null) coerced1 = '';
                            if (coerced1 === undefined) {
                              validate.errors = [{
                                keyword: 'type',
                                dataPath: (dataPath || '') + '.onProtoPoisoning',
                                schemaPath: '#/properties/onProtoPoisoning/type',
                                params: {
                                  type: 'string'
                                },
                                message: 'should be string'
                              }];
                              return false;
                            } else {
                              data1 = coerced1;
                              data['onProtoPoisoning'] = coerced1;
                            }
                          }
                          var valid1 = errors === errs_1;
                          if (valid1) {
                            var data1 = data.onConstructorPoisoning;
                            var errs_1 = errors;
                            if (typeof data1 !== "string") {
                              var dataType1 = typeof data1;
                              var coerced1 = undefined;
                              if (dataType1 == 'number' || dataType1 == 'boolean') coerced1 = '' + data1;
                              else if (data1 === null) coerced1 = '';
                              if (coerced1 === undefined) {
                                validate.errors = [{
                                  keyword: 'type',
                                  dataPath: (dataPath || '') + '.onConstructorPoisoning',
                                  schemaPath: '#/properties/onConstructorPoisoning/type',
                                  params: {
                                    type: 'string'
                                  },
                                  message: 'should be string'
                                }];
                                return false;
                              } else {
                                data1 = coerced1;
                                data['onConstructorPoisoning'] = coerced1;
                              }
                            }
                            var valid1 = errors === errs_1;
                            if (valid1) {
                              var data1 = data.pluginTimeout;
                              var errs_1 = errors;
                              if ((typeof data1 !== "number" || (data1 % 1) || data1 !== data1)) {
                                var dataType1 = typeof data1;
                                var coerced1 = undefined;
                                if (dataType1 == 'boolean' || data1 === null || (dataType1 == 'string' && data1 && data1 == +data1 && !(data1 % 1))) coerced1 = +data1;
                                if (coerced1 === undefined) {
                                  validate.errors = [{
                                    keyword: 'type',
                                    dataPath: (dataPath || '') + '.pluginTimeout',
                                    schemaPath: '#/properties/pluginTimeout/type',
                                    params: {
                                      type: 'integer'
                                    },
                                    message: 'should be integer'
                                  }];
                                  return false;
                                } else {
                                  data1 = coerced1;
                                  data['pluginTimeout'] = coerced1;
                                }
                              }
                              var valid1 = errors === errs_1;
                              if (valid1) {
                                var data1 = data.requestIdHeader;
                                var errs_1 = errors;
                                if (typeof data1 !== "string") {
                                  var dataType1 = typeof data1;
                                  var coerced1 = undefined;
                                  if (dataType1 == 'number' || dataType1 == 'boolean') coerced1 = '' + data1;
                                  else if (data1 === null) coerced1 = '';
                                  if (coerced1 === undefined) {
                                    validate.errors = [{
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.requestIdHeader',
                                      schemaPath: '#/properties/requestIdHeader/type',
                                      params: {
                                        type: 'string'
                                      },
                                      message: 'should be string'
                                    }];
                                    return false;
                                  } else {
                                    data1 = coerced1;
                                    data['requestIdHeader'] = coerced1;
                                  }
                                }
                                var valid1 = errors === errs_1;
                                if (valid1) {
                                  var data1 = data.requestIdLogLabel;
                                  var errs_1 = errors;
                                  if (typeof data1 !== "string") {
                                    var dataType1 = typeof data1;
                                    var coerced1 = undefined;
                                    if (dataType1 == 'number' || dataType1 == 'boolean') coerced1 = '' + data1;
                                    else if (data1 === null) coerced1 = '';
                                    if (coerced1 === undefined) {
                                      validate.errors = [{
                                        keyword: 'type',
                                        dataPath: (dataPath || '') + '.requestIdLogLabel',
                                        schemaPath: '#/properties/requestIdLogLabel/type',
                                        params: {
                                          type: 'string'
                                        },
                                        message: 'should be string'
                                      }];
                                      return false;
                                    } else {
                                      data1 = coerced1;
                                      data['requestIdLogLabel'] = coerced1;
                                    }
                                  }
                                  var valid1 = errors === errs_1;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate.errors = [{
        keyword: 'type',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/type',
        params: {
          type: 'object'
        },
        message: 'should be object'
      }];
      return false;
    }
    validate.errors = vErrors;
    return errors === 0;
  };
})();
validate.schema = {
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "connectionTimeout": {
      "type": "integer",
      "default": 0
    },
    "keepAliveTimeout": {
      "type": "integer",
      "default": 5000
    },
    "bodyLimit": {
      "type": "integer",
      "default": 1048576
    },
    "caseSensitive": {
      "type": "boolean",
      "default": true
    },
    "http2": {
      "type": "boolean"
    },
    "https": {
      "if": {
        "not": {
          "oneOf": [{
            "type": "boolean"
          }, {
            "type": "null"
          }, {
            "type": "object",
            "additionalProperties": false,
            "required": ["allowHTTP1"],
            "properties": {
              "allowHTTP1": {
                "type": "boolean"
              }
            }
          }]
        }
      },
      "then": {
        "setDefaultValue": true
      }
    },
    "ignoreTrailingSlash": {
      "type": "boolean",
      "default": false
    },
    "disableRequestLogging": {
      "type": "boolean",
      "default": false
    },
    "maxParamLength": {
      "type": "integer",
      "default": 100
    },
    "onProtoPoisoning": {
      "type": "string",
      "default": "error"
    },
    "onConstructorPoisoning": {
      "type": "string",
      "default": "ignore"
    },
    "pluginTimeout": {
      "type": "integer",
      "default": 10000
    },
    "requestIdHeader": {
      "type": "string",
      "default": "request-id"
    },
    "requestIdLogLabel": {
      "type": "string",
      "default": "reqId"
    }
  }
};
validate.errors = null;
module.exports = validate;

function customRule0 (schemaParamValue, validatedParamValue, validationSchemaObject, currentDataPath, validatedParamObject, validatedParam) {
  validatedParamObject[validatedParam] = schemaParamValue
  return true
}

module.exports.defaultInitOptions = {"connectionTimeout":0,"keepAliveTimeout":5000,"bodyLimit":1048576,"caseSensitive":true,"disableRequestLogging":false,"ignoreTrailingSlash":false,"maxParamLength":100,"onProtoPoisoning":"error","onConstructorPoisoning":"ignore","pluginTimeout":10000,"requestIdHeader":"request-id","requestIdLogLabel":"reqId"}