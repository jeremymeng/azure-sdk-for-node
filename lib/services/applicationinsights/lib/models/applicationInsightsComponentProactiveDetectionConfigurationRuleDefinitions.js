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
 * Static definitions of the ProactiveDetection configuration rule (same values
 * for all components).
 *
 */
class ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions {
  /**
   * Create a ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions.
   * @member {string} [name] The rule name
   * @member {string} [displayName] The rule name as it is displayed in UI
   * @member {string} [description] The rule description
   * @member {string} [helpUrl] URL which displays aditional info about the
   * proactive detection rule
   * @member {boolean} [isHidden] A flag indicating whether the rule is hidden
   * (from the UI)
   * @member {boolean} [isEnabledByDefault] A flag indicating whether the rule
   * is enabled by default
   * @member {boolean} [isInPreview] A flag indicating whether the rule is in
   * preview
   * @member {boolean} [supportsEmailNotifications] A flag indicating whether
   * email notifications are supported for detections for this rule
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions
   *
   * @returns {object} metadata of ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationInsightsComponentProactiveDetectionConfiguration_RuleDefinitions',
      type: {
        name: 'Composite',
        className: 'ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'Name',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'DisplayName',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'Description',
            type: {
              name: 'String'
            }
          },
          helpUrl: {
            required: false,
            serializedName: 'HelpUrl',
            type: {
              name: 'String'
            }
          },
          isHidden: {
            required: false,
            serializedName: 'IsHidden',
            type: {
              name: 'Boolean'
            }
          },
          isEnabledByDefault: {
            required: false,
            serializedName: 'IsEnabledByDefault',
            type: {
              name: 'Boolean'
            }
          },
          isInPreview: {
            required: false,
            serializedName: 'IsInPreview',
            type: {
              name: 'Boolean'
            }
          },
          supportsEmailNotifications: {
            required: false,
            serializedName: 'SupportsEmailNotifications',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions;
