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
 * List of resource links.
 */
class ResourceLinkResult extends Array {
  /**
   * Create a ResourceLinkResult.
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ResourceLinkResult
   *
   * @returns {object} metadata of ResourceLinkResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceLinkResult',
      type: {
        name: 'Composite',
        className: 'ResourceLinkResult',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResourceLinkElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResourceLink'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceLinkResult;