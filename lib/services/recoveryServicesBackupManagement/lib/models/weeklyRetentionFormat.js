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
 * Weekly retention format.
 *
 */
class WeeklyRetentionFormat {
  /**
   * Create a WeeklyRetentionFormat.
   * @member {array} [daysOfTheWeek] List of days of the week.
   * @member {array} [weeksOfTheMonth] List of weeks of month.
   */
  constructor() {
  }

  /**
   * Defines the metadata of WeeklyRetentionFormat
   *
   * @returns {object} metadata of WeeklyRetentionFormat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WeeklyRetentionFormat',
      type: {
        name: 'Composite',
        className: 'WeeklyRetentionFormat',
        modelProperties: {
          daysOfTheWeek: {
            required: false,
            serializedName: 'daysOfTheWeek',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DayOfWeekElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
                  }
              }
            }
          },
          weeksOfTheMonth: {
            required: false,
            serializedName: 'weeksOfTheMonth',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'WeekOfMonthElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'First', 'Second', 'Third', 'Fourth', 'Last' ]
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = WeeklyRetentionFormat;