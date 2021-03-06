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

/**
 * Array of CloudEndpoint
 */
class CloudEndpointArray extends Array {
  /**
   * Create a CloudEndpointArray.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CloudEndpointArray
   *
   * @returns {object} metadata of CloudEndpointArray
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CloudEndpointArray',
      type: {
        name: 'Composite',
        className: 'CloudEndpointArray',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CloudEndpointElementType',
                  type: {
                    name: 'Composite',
                    className: 'CloudEndpoint'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CloudEndpointArray;
