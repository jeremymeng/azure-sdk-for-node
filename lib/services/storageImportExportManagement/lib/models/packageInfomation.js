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
 * Provides information about the package being shipped by the customer to the
 * Microsoft data center.
 *
 */
class PackageInfomation {
  /**
   * Create a PackageInfomation.
   * @member {string} carrierName The name of the carrier that is used to ship
   * the import or export drives.
   * @member {string} trackingNumber The tracking number of the package.
   * @member {number} driveCount The number of drives included in the package.
   * @member {string} shipDate The date the package is shipped.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PackageInfomation
   *
   * @returns {object} metadata of PackageInfomation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PackageInfomation',
      type: {
        name: 'Composite',
        className: 'PackageInfomation',
        modelProperties: {
          carrierName: {
            required: true,
            serializedName: 'carrierName',
            type: {
              name: 'String'
            }
          },
          trackingNumber: {
            required: true,
            serializedName: 'trackingNumber',
            type: {
              name: 'String'
            }
          },
          driveCount: {
            required: true,
            serializedName: 'driveCount',
            type: {
              name: 'Number'
            }
          },
          shipDate: {
            required: true,
            serializedName: 'shipDate',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PackageInfomation;