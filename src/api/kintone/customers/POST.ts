import { CUSTOMER_APPID } from '../../../helpers/constants';
import { KintoneRecord } from '../config';
import { RecordParam, AddRecordResult, AddRecordsResult } from './customers';


/**
 * Adds multiple records
 *
 * @param record Field codes and values are specified in this object.
 * @returns array of record object containing id and revision.
 */
export const addCustomer = async (record : RecordParam = {}) : Promise<AddRecordResult> => {
  try {
    return {
      ok: true,
      result: await KintoneRecord.addRecord({ app: CUSTOMER_APPID, record }),
    };
  } catch (error) {
    return { ok: false, result: error };
  }
};

/**
 * Adds multiple customers to an app.
 *
 * @param records
 * @returns an array of objects that include id and revision of created records.
 */
export const addCustomers  = async (records : RecordParam[]) : Promise<AddRecordsResult> => {
  try {
    return {
      ok: true,
      result: await KintoneRecord.addRecords({ app: CUSTOMER_APPID, records }),
    };
  } catch (error) {
    return { ok: false, result: error };
  }
};