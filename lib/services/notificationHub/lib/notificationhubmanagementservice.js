//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

// Module dependencies.
var util = require('util');

var NotificationHubServiceBase = require('./notificationhubservicebase');

var azureCommon = require('azure-common');
var azureutil = azureCommon.util;
var Constants = azureCommon.Constants;

var notificationHubResult = require('./models/notificationhubresult');

/**
* Creates a new NotificationHubManagementService object.
*
* The azure module will read the environment variables AZURE_SERVICEBUS_NAMESPACE and AZURE_SERVICEBUS_ACCESS_KEY
* for information required to connect to your Microsoft Azure Service Bus.
* If these environment variables are not set, you must specify the account information
* when creating a NotificationHubManagementService object.
* @class
* The NotificationHubManagementService can be used to manage Notification Hubs, you must use
* the {@link NotificationHubService} to send messages to mobile devices.
* @constructor
* @augments {ServiceClient}
*
* @param {string} [configOrNamespaceOrConnectionString]  The service bus namespace or the connection string.
* @param {string} [accessKey]                    The password. Only necessary if no connection string passed.
* @param {string} [issuer]                       The issuer.
* @param {string} [acsNamespace]                 The acs namespace. Usually the same as the sb namespace with "-sb" suffix.
* @param {string} [host]                         The host address.
* @param {object} [authenticationProvider]       The authentication provider.
*/
function NotificationHubManagementService(configOrNamespaceOrConnectionString, accessKey, issuer, acsNamespace, host, authenticationProvider) {
  NotificationHubManagementService['super_'].call(this,
    configOrNamespaceOrConnectionString,
    accessKey,
    issuer,
    acsNamespace,
    host,
    authenticationProvider);
}

util.inherits(NotificationHubManagementService, NotificationHubServiceBase);

/**
* Validates a hub name.
* @ignore
*
* @param {string} topic The hub name.
* @return {undefined}
*/
function validateHubName(hub) {
  if (!azureutil.objectIsString(hub) || azureutil.stringIsEmpty(hub)) {
    throw new Error('Notification hub name must be a non empty string.');
  }
}

/**
* Creates a notification hub.
*
* @param {string}             hubPath                   A string object that represents the name of the notification hub.
* @param {object}             [options]                 The request options or callback function.
* @param {object}             [options.wns]             An object with the key value pairs for the WNS credentials.
* @param {object}             [options.apns]            An object with the key value pairs for the APNS credentials.
* @param {object}             [options.gcm]             An object with the key value pairs for the GCM credentials.
* @param {object}             [options.mpns]            An object with the key value pairs for the MPNS credentials.
* @param {Function(error, result, response)} callback   `error` will contain information
*                                                       if an error occurs; otherwise `result` will contain
*                                                       the new notification hub information.
*                                                       `response` will contain information related to this operation.
* @return {undefined}
*
* @example
* var azure = require('azure');
* var serviceBusService = azure.createNotificationHubManagementService();
* serviceBusService.createNotificationHub('hubName', function (error) {
*   if (!error) {
*     // Notification hub created successfully
*   }
* });
*/
NotificationHubManagementService.prototype.createNotificationHub = function (hubPath, optionsOrCallback, callback) {
  validateHubName(hubPath);

  this._createResource(hubPath, notificationHubResult, null, optionsOrCallback, callback);
};

/**
* Gets a notification hub.
*
* @param {string}             hubPath                  A string object that represents the name of the notification hub.
* @param {Function(error, result, response)} callback  `error` will contain information
*                                                                             if an error occurs; otherwise `result` will contain
*                                                                             the notification hub information.
*                                                                             `response` will contain information related to this operation.
* @return {undefined}
*/
NotificationHubManagementService.prototype.getNotificationHub = function (hubPath, callback) {
  validateHubName(hubPath);

  var validateResult = function (responseObject) {
    if (!responseObject.error && !(responseObject.response.body && responseObject.response.body.entry)) {
      responseObject.error = new Error();
      responseObject.error.code = Constants.ServiceBusErrorCodeStrings.NOTIFICATION_HUB_NOT_FOUND;
      responseObject.error.details = 'Invalid Notification Hub';

      return false;
    }

    return true;
  };


  this._getResource(hubPath, notificationHubResult, [ validateResult ], callback);
};

/**
* Returns a list of notification hubs.
*
* @param {object}             [options]                 The request options or callback function.
* @param {int}                [options.top]             The number of topics to fetch.
* @param {int}                [options.skip]            The number of topics to skip.
* @param {Function(error, result, response)} callback   `error` will contain information
*                                                       if an error occurs; otherwise `result` will contain
*                                                       the list of notification hubs.
*                                                       `response` will contain information related to this operation.
* @return {undefined}
*/
NotificationHubManagementService.prototype.listNotificationHubs = function (optionsOrCallback, callback) {
  this._listResources('/$Resources/NotificationHubs', notificationHubResult, null, optionsOrCallback, callback);
};

/**
* Deletes a notification hub.
*
* @param {string}             hubPath          A string object that represents the name of the notification hub.
* @param {Function(error, response)} callback  `error` will contain information
*                                              if an error occurs; otherwise `response` will contain information related to this operation.
* @return {undefined}
*/
NotificationHubManagementService.prototype.deleteNotificationHub = function (hubPath, callback) {
  validateHubName(hubPath);

  this._deleteResource(hubPath, callback);
};

module.exports = NotificationHubManagementService;
