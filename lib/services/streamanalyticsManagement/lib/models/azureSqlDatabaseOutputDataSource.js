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
 * Describes an Azure SQL database output data source.
 *
 * @extends models['OutputDataSource']
 */
class AzureSqlDatabaseOutputDataSource extends models['OutputDataSource'] {
  /**
   * Create a AzureSqlDatabaseOutputDataSource.
   * @member {string} [server] The name of the SQL server containing the Azure
   * SQL database. Required on PUT (CreateOrReplace) requests.
   * @member {string} [database] The name of the Azure SQL database. Required
   * on PUT (CreateOrReplace) requests.
   * @member {string} [user] The user name that will be used to connect to the
   * Azure SQL database. Required on PUT (CreateOrReplace) requests.
   * @member {string} [password] The password that will be used to connect to
   * the Azure SQL database. Required on PUT (CreateOrReplace) requests.
   * @member {string} [table] The name of the table in the Azure SQL database.
   * Required on PUT (CreateOrReplace) requests.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureSqlDatabaseOutputDataSource
   *
   * @returns {object} metadata of AzureSqlDatabaseOutputDataSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Microsoft.Sql/Server/Database',
      type: {
        name: 'Composite',
        className: 'AzureSqlDatabaseOutputDataSource',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          server: {
            required: false,
            serializedName: 'properties.server',
            type: {
              name: 'String'
            }
          },
          database: {
            required: false,
            serializedName: 'properties.database',
            type: {
              name: 'String'
            }
          },
          user: {
            required: false,
            serializedName: 'properties.user',
            type: {
              name: 'String'
            }
          },
          password: {
            required: false,
            serializedName: 'properties.password',
            type: {
              name: 'String'
            }
          },
          table: {
            required: false,
            serializedName: 'properties.table',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureSqlDatabaseOutputDataSource;