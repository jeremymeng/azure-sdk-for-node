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
 * The list of services in the cluster for an application. The list is paged
 * when all of the results cannot fit in a single message. The next set of
 * results can be obtained by executing the same query with the continuation
 * token provided in this list.
 *
 */
class PagedServiceInfoList {
  /**
   * Create a PagedServiceInfoList.
   * @member {string} [continuationToken]
   * @member {array} [items]
   */
  constructor() {
  }

  /**
   * Defines the metadata of PagedServiceInfoList
   *
   * @returns {object} metadata of PagedServiceInfoList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PagedServiceInfoList',
      type: {
        name: 'Composite',
        className: 'PagedServiceInfoList',
        modelProperties: {
          continuationToken: {
            required: false,
            serializedName: 'ContinuationToken',
            type: {
              name: 'String'
            }
          },
          items: {
            required: false,
            serializedName: 'Items',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceInfoElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'ServiceKind',
                      clientName: 'serviceKind'
                    },
                    uberParent: 'ServiceInfo',
                    className: 'ServiceInfo'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PagedServiceInfoList;