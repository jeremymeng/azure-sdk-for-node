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
 * Description of the WCF relay resource.
 *
 * @extends models['Resource']
 */
class WcfRelay extends models['Resource'] {
  /**
   * Create a WcfRelay.
   * @member {boolean} [isDynamic] Returns true if the relay is dynamic;
   * otherwise, false.
   * @member {date} [createdAt] The time the WCF relay was created.
   * @member {date} [updatedAt] The time the namespace was updated.
   * @member {number} [listenerCount] The number of listeners for this relay.
   * Note that min :1 and max:25 are supported.
   * @member {string} [relayType] WCF relay type. Possible values include:
   * 'NetTcp', 'Http'
   * @member {boolean} [requiresClientAuthorization] Returns true if client
   * authorization is needed for this relay; otherwise, false.
   * @member {boolean} [requiresTransportSecurity] Returns true if transport
   * security is needed for this relay; otherwise, false.
   * @member {string} [userMetadata] The usermetadata is a placeholder to store
   * user-defined string data for the WCF Relay endpoint. For example, it can
   * be used to store descriptive data, such as list of teams and their contact
   * information. Also, user-defined configuration settings can be stored.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WcfRelay
   *
   * @returns {object} metadata of WcfRelay
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WcfRelay',
      type: {
        name: 'Composite',
        className: 'WcfRelay',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          isDynamic: {
            required: false,
            readOnly: true,
            serializedName: 'properties.isDynamic',
            type: {
              name: 'Boolean'
            }
          },
          createdAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdAt',
            type: {
              name: 'DateTime'
            }
          },
          updatedAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.updatedAt',
            type: {
              name: 'DateTime'
            }
          },
          listenerCount: {
            required: false,
            readOnly: true,
            serializedName: 'properties.listenerCount',
            constraints: {
              InclusiveMaximum: 25,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          relayType: {
            required: false,
            serializedName: 'properties.relayType',
            type: {
              name: 'Enum',
              allowedValues: [ 'NetTcp', 'Http' ]
            }
          },
          requiresClientAuthorization: {
            required: false,
            serializedName: 'properties.requiresClientAuthorization',
            type: {
              name: 'Boolean'
            }
          },
          requiresTransportSecurity: {
            required: false,
            serializedName: 'properties.requiresTransportSecurity',
            type: {
              name: 'Boolean'
            }
          },
          userMetadata: {
            required: false,
            serializedName: 'properties.userMetadata',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WcfRelay;