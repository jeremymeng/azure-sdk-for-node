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
 * Subscription information.
 *
 */
class Subscription {
  /**
   * Create a Subscription.
   * @property {string} [id] The fully qualified ID for the subscription. For
   * example, /subscriptions/00000000-0000-0000-0000-000000000000.
   * @property {string} [subscriptionId] The subscription ID.
   * @property {string} [displayName] The subscription display name.
   * @property {string} [state] The subscription state. Possible values are
   * Enabled, Warned, PastDue, Disabled, and Deleted. Possible values include:
   * 'Enabled', 'Warned', 'PastDue', 'Disabled', 'Deleted'
   * @property {object} [subscriptionPolicies] The subscription policies.
   * @property {string} [subscriptionPolicies.locationPlacementId] The
   * subscription location placement ID. The ID indicates which regions are
   * visible for a subscription. For example, a subscription with a location
   * placement Id of Public_2014-09-01 has access to Azure public regions.
   * @property {string} [subscriptionPolicies.quotaId] The subscription quota
   * ID.
   * @property {string} [subscriptionPolicies.spendingLimit] The subscription
   * spending limit. Possible values include: 'On', 'Off', 'CurrentPeriodOff'
   * @property {string} [authorizationSource] The authorization source of the
   * request. Valid values are one or more combinations of Legacy, RoleBased,
   * Bypassed, Direct and Management. For example, 'Legacy, RoleBased'.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Subscription
   *
   * @returns {object} metadata of Subscription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Subscription',
      type: {
        name: 'Composite',
        className: 'Subscription',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          subscriptionId: {
            required: false,
            readOnly: true,
            serializedName: 'subscriptionId',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            readOnly: true,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'state',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Warned', 'PastDue', 'Disabled', 'Deleted' ]
            }
          },
          subscriptionPolicies: {
            required: false,
            serializedName: 'subscriptionPolicies',
            type: {
              name: 'Composite',
              className: 'SubscriptionPolicies'
            }
          },
          authorizationSource: {
            required: false,
            serializedName: 'authorizationSource',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Subscription;