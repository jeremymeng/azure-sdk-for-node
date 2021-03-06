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
 * A reference data set provides metadata about the events in an environment.
 * Metadata in the reference data set will be joined with events as they are
 * read from event sources. The metadata that makes up the reference data set
 * is uploaded or modified through the Time Series Insights data plane APIs.
 *
 * @extends models['TrackedResource']
 */
class ReferenceDataSetResource extends models['TrackedResource'] {
  /**
   * Create a ReferenceDataSetResource.
   * @member {array} keyProperties The list of key properties for the reference
   * data set.
   * @member {string} [dataStringComparisonBehavior] The reference data set key
   * comparison behavior can be set using this property. By default, the value
   * is 'Ordinal' - which means case sensitive key comparison will be performed
   * while joining reference data with events or while adding new reference
   * data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be
   * used. Possible values include: 'Ordinal', 'OrdinalIgnoreCase'
   * @member {string} [provisioningState] Provisioning state of the resource.
   * Possible values include: 'Accepted', 'Creating', 'Updating', 'Succeeded',
   * 'Failed', 'Deleting'
   * @member {date} [creationTime] The time the resource was created.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ReferenceDataSetResource
   *
   * @returns {object} metadata of ReferenceDataSetResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReferenceDataSetResource',
      type: {
        name: 'Composite',
        className: 'ReferenceDataSetResource',
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
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          keyProperties: {
            required: true,
            serializedName: 'properties.keyProperties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReferenceDataSetKeyPropertyElementType',
                  type: {
                    name: 'Composite',
                    className: 'ReferenceDataSetKeyProperty'
                  }
              }
            }
          },
          dataStringComparisonBehavior: {
            required: false,
            serializedName: 'properties.dataStringComparisonBehavior',
            type: {
              name: 'Enum',
              allowedValues: [ 'Ordinal', 'OrdinalIgnoreCase' ]
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'Enum',
              allowedValues: [ 'Accepted', 'Creating', 'Updating', 'Succeeded', 'Failed', 'Deleting' ]
            }
          },
          creationTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = ReferenceDataSetResource;
