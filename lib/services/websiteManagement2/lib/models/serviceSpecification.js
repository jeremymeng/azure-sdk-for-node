/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Resource metrics service provided by Microsoft.Insights resource provider.
 *
 */
class ServiceSpecification {
  /**
   * Create a ServiceSpecification.
   * @member {array} [metricSpecifications]
   * @member {array} [logSpecifications]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServiceSpecification
   *
   * @returns {object} metadata of ServiceSpecification
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceSpecification',
      type: {
        name: 'Composite',
        className: 'ServiceSpecification',
        modelProperties: {
          metricSpecifications: {
            required: false,
            serializedName: 'metricSpecifications',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MetricSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'MetricSpecification'
                  }
              }
            }
          },
          logSpecifications: {
            required: false,
            serializedName: 'logSpecifications',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'LogSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'LogSpecification'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceSpecification;