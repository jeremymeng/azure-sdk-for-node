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
 * Role assignment properties.
 *
 */
class RoleAssignmentProperties {
  /**
   * Create a RoleAssignmentProperties.
   * @member {string} [roleDefinitionId] The role definition ID used in the
   * role assignment.
   * @member {string} [principalId] The principal ID assigned to the role. This
   * maps to the ID inside the Active Directory. It can point to a user,
   * service principal, or security group.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RoleAssignmentProperties
   *
   * @returns {object} metadata of RoleAssignmentProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RoleAssignmentProperties',
      type: {
        name: 'Composite',
        className: 'RoleAssignmentProperties',
        modelProperties: {
          roleDefinitionId: {
            required: false,
            serializedName: 'roleDefinitionId',
            type: {
              name: 'String'
            }
          },
          principalId: {
            required: false,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RoleAssignmentProperties;
