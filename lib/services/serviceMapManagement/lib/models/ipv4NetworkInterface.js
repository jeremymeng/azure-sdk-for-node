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
 * Describes an IPv4 network interface.
 *
 */
class Ipv4NetworkInterface {
  /**
   * Create a Ipv4NetworkInterface.
   * @member {string} ipAddress IPv4 address.
   * @member {string} [subnetMask] IPv4 subnet mask. Default value:
   * '255.255.255.255' .
   */
  constructor() {
  }

  /**
   * Defines the metadata of Ipv4NetworkInterface
   *
   * @returns {object} metadata of Ipv4NetworkInterface
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Ipv4NetworkInterface',
      type: {
        name: 'Composite',
        className: 'Ipv4NetworkInterface',
        modelProperties: {
          ipAddress: {
            required: true,
            serializedName: 'ipAddress',
            type: {
              name: 'String'
            }
          },
          subnetMask: {
            required: false,
            serializedName: 'subnetMask',
            defaultValue: '255.255.255.255',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Ipv4NetworkInterface;