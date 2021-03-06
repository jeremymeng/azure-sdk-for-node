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
 * The Edifact agreement envelope settings.
 *
 */
class EdifactEnvelopeSettings {
  /**
   * Create a EdifactEnvelopeSettings.
   * @property {string} [groupAssociationAssignedCode] The group association
   * assigned code.
   * @property {string} [communicationAgreementId] The communication agreement
   * id.
   * @property {boolean} applyDelimiterStringAdvice The value indicating
   * whether to apply delimiter string advice.
   * @property {boolean} createGroupingSegments The value indicating whether to
   * create grouping segments.
   * @property {boolean} enableDefaultGroupHeaders The value indicating whether
   * to enable default group headers.
   * @property {string} [recipientReferencePasswordValue] The recipient
   * reference password value.
   * @property {string} [recipientReferencePasswordQualifier] The recipient
   * reference password qualifier.
   * @property {string} [applicationReferenceId] The application reference id.
   * @property {string} [processingPriorityCode] The processing priority code.
   * @property {number} interchangeControlNumberLowerBound The interchange
   * control number lower bound.
   * @property {number} interchangeControlNumberUpperBound The interchange
   * control number upper bound.
   * @property {boolean} rolloverInterchangeControlNumber The value indicating
   * whether to rollover interchange control number.
   * @property {string} [interchangeControlNumberPrefix] The interchange
   * control number prefix.
   * @property {string} [interchangeControlNumberSuffix] The interchange
   * control number suffix.
   * @property {string} [senderReverseRoutingAddress] The sender reverse
   * routing address.
   * @property {string} [receiverReverseRoutingAddress] The receiver reverse
   * routing address.
   * @property {string} [functionalGroupId] The functional group id.
   * @property {string} [groupControllingAgencyCode] The group controlling
   * agency code.
   * @property {string} [groupMessageVersion] The group message version.
   * @property {string} [groupMessageRelease] The group message release.
   * @property {number} groupControlNumberLowerBound The group control number
   * lower bound.
   * @property {number} groupControlNumberUpperBound The group control number
   * upper bound.
   * @property {boolean} rolloverGroupControlNumber The value indicating
   * whether to rollover group control number.
   * @property {string} [groupControlNumberPrefix] The group control number
   * prefix.
   * @property {string} [groupControlNumberSuffix] The group control number
   * suffix.
   * @property {string} [groupApplicationReceiverQualifier] The group
   * application receiver qualifier.
   * @property {string} [groupApplicationReceiverId] The group application
   * receiver id.
   * @property {string} [groupApplicationSenderQualifier] The group application
   * sender qualifier.
   * @property {string} [groupApplicationSenderId] The group application sender
   * id.
   * @property {string} [groupApplicationPassword] The group application
   * password.
   * @property {boolean} overwriteExistingTransactionSetControlNumber The value
   * indicating whether to overwrite existing transaction set control number.
   * @property {string} [transactionSetControlNumberPrefix] The transaction set
   * control number prefix.
   * @property {string} [transactionSetControlNumberSuffix] The transaction set
   * control number suffix.
   * @property {number} transactionSetControlNumberLowerBound The transaction
   * set control number lower bound.
   * @property {number} transactionSetControlNumberUpperBound The transaction
   * set control number upper bound.
   * @property {boolean} rolloverTransactionSetControlNumber The value
   * indicating whether to rollover transaction set control number.
   * @property {boolean} isTestInterchange The value indicating whether the
   * message is a test interchange.
   * @property {string} [senderInternalIdentification] The sender internal
   * identification.
   * @property {string} [senderInternalSubIdentification] The sender internal
   * sub identification.
   * @property {string} [receiverInternalIdentification] The receiver internal
   * identification.
   * @property {string} [receiverInternalSubIdentification] The receiver
   * internal sub identification.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EdifactEnvelopeSettings
   *
   * @returns {object} metadata of EdifactEnvelopeSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EdifactEnvelopeSettings',
      type: {
        name: 'Composite',
        className: 'EdifactEnvelopeSettings',
        modelProperties: {
          groupAssociationAssignedCode: {
            required: false,
            serializedName: 'groupAssociationAssignedCode',
            type: {
              name: 'String'
            }
          },
          communicationAgreementId: {
            required: false,
            serializedName: 'communicationAgreementId',
            type: {
              name: 'String'
            }
          },
          applyDelimiterStringAdvice: {
            required: true,
            serializedName: 'applyDelimiterStringAdvice',
            type: {
              name: 'Boolean'
            }
          },
          createGroupingSegments: {
            required: true,
            serializedName: 'createGroupingSegments',
            type: {
              name: 'Boolean'
            }
          },
          enableDefaultGroupHeaders: {
            required: true,
            serializedName: 'enableDefaultGroupHeaders',
            type: {
              name: 'Boolean'
            }
          },
          recipientReferencePasswordValue: {
            required: false,
            serializedName: 'recipientReferencePasswordValue',
            type: {
              name: 'String'
            }
          },
          recipientReferencePasswordQualifier: {
            required: false,
            serializedName: 'recipientReferencePasswordQualifier',
            type: {
              name: 'String'
            }
          },
          applicationReferenceId: {
            required: false,
            serializedName: 'applicationReferenceId',
            type: {
              name: 'String'
            }
          },
          processingPriorityCode: {
            required: false,
            serializedName: 'processingPriorityCode',
            type: {
              name: 'String'
            }
          },
          interchangeControlNumberLowerBound: {
            required: true,
            serializedName: 'interchangeControlNumberLowerBound',
            type: {
              name: 'Number'
            }
          },
          interchangeControlNumberUpperBound: {
            required: true,
            serializedName: 'interchangeControlNumberUpperBound',
            type: {
              name: 'Number'
            }
          },
          rolloverInterchangeControlNumber: {
            required: true,
            serializedName: 'rolloverInterchangeControlNumber',
            type: {
              name: 'Boolean'
            }
          },
          interchangeControlNumberPrefix: {
            required: false,
            serializedName: 'interchangeControlNumberPrefix',
            type: {
              name: 'String'
            }
          },
          interchangeControlNumberSuffix: {
            required: false,
            serializedName: 'interchangeControlNumberSuffix',
            type: {
              name: 'String'
            }
          },
          senderReverseRoutingAddress: {
            required: false,
            serializedName: 'senderReverseRoutingAddress',
            type: {
              name: 'String'
            }
          },
          receiverReverseRoutingAddress: {
            required: false,
            serializedName: 'receiverReverseRoutingAddress',
            type: {
              name: 'String'
            }
          },
          functionalGroupId: {
            required: false,
            serializedName: 'functionalGroupId',
            type: {
              name: 'String'
            }
          },
          groupControllingAgencyCode: {
            required: false,
            serializedName: 'groupControllingAgencyCode',
            type: {
              name: 'String'
            }
          },
          groupMessageVersion: {
            required: false,
            serializedName: 'groupMessageVersion',
            type: {
              name: 'String'
            }
          },
          groupMessageRelease: {
            required: false,
            serializedName: 'groupMessageRelease',
            type: {
              name: 'String'
            }
          },
          groupControlNumberLowerBound: {
            required: true,
            serializedName: 'groupControlNumberLowerBound',
            type: {
              name: 'Number'
            }
          },
          groupControlNumberUpperBound: {
            required: true,
            serializedName: 'groupControlNumberUpperBound',
            type: {
              name: 'Number'
            }
          },
          rolloverGroupControlNumber: {
            required: true,
            serializedName: 'rolloverGroupControlNumber',
            type: {
              name: 'Boolean'
            }
          },
          groupControlNumberPrefix: {
            required: false,
            serializedName: 'groupControlNumberPrefix',
            type: {
              name: 'String'
            }
          },
          groupControlNumberSuffix: {
            required: false,
            serializedName: 'groupControlNumberSuffix',
            type: {
              name: 'String'
            }
          },
          groupApplicationReceiverQualifier: {
            required: false,
            serializedName: 'groupApplicationReceiverQualifier',
            type: {
              name: 'String'
            }
          },
          groupApplicationReceiverId: {
            required: false,
            serializedName: 'groupApplicationReceiverId',
            type: {
              name: 'String'
            }
          },
          groupApplicationSenderQualifier: {
            required: false,
            serializedName: 'groupApplicationSenderQualifier',
            type: {
              name: 'String'
            }
          },
          groupApplicationSenderId: {
            required: false,
            serializedName: 'groupApplicationSenderId',
            type: {
              name: 'String'
            }
          },
          groupApplicationPassword: {
            required: false,
            serializedName: 'groupApplicationPassword',
            type: {
              name: 'String'
            }
          },
          overwriteExistingTransactionSetControlNumber: {
            required: true,
            serializedName: 'overwriteExistingTransactionSetControlNumber',
            type: {
              name: 'Boolean'
            }
          },
          transactionSetControlNumberPrefix: {
            required: false,
            serializedName: 'transactionSetControlNumberPrefix',
            type: {
              name: 'String'
            }
          },
          transactionSetControlNumberSuffix: {
            required: false,
            serializedName: 'transactionSetControlNumberSuffix',
            type: {
              name: 'String'
            }
          },
          transactionSetControlNumberLowerBound: {
            required: true,
            serializedName: 'transactionSetControlNumberLowerBound',
            type: {
              name: 'Number'
            }
          },
          transactionSetControlNumberUpperBound: {
            required: true,
            serializedName: 'transactionSetControlNumberUpperBound',
            type: {
              name: 'Number'
            }
          },
          rolloverTransactionSetControlNumber: {
            required: true,
            serializedName: 'rolloverTransactionSetControlNumber',
            type: {
              name: 'Boolean'
            }
          },
          isTestInterchange: {
            required: true,
            serializedName: 'isTestInterchange',
            type: {
              name: 'Boolean'
            }
          },
          senderInternalIdentification: {
            required: false,
            serializedName: 'senderInternalIdentification',
            type: {
              name: 'String'
            }
          },
          senderInternalSubIdentification: {
            required: false,
            serializedName: 'senderInternalSubIdentification',
            type: {
              name: 'String'
            }
          },
          receiverInternalIdentification: {
            required: false,
            serializedName: 'receiverInternalIdentification',
            type: {
              name: 'String'
            }
          },
          receiverInternalSubIdentification: {
            required: false,
            serializedName: 'receiverInternalSubIdentification',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EdifactEnvelopeSettings;
