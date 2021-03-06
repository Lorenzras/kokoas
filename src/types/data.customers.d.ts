declare namespace CustomerTypes {
  interface Data {
    birthDay: kintone.fieldTypes.Number;
    gender: kintone.fieldTypes.DropDown;
    address2: kintone.fieldTypes.SingleLineText;
    address1: kintone.fieldTypes.SingleLineText;
    postalCode: kintone.fieldTypes.SingleLineText;
    fullName: kintone.fieldTypes.SingleLineText;
    store: kintone.fieldTypes.Number;
    fullNameReading: kintone.fieldTypes.SingleLineText;
    birthMonth: kintone.fieldTypes.Number;
    nationality: kintone.fieldTypes.SingleLineText;
    birthYear: kintone.fieldTypes.Number;
    storeName: kintone.fieldTypes.SingleLineText;
    agents: {
      type: 'SUBTABLE';
      value: {
        id: string;
        value: {
          employeeName: kintone.fieldTypes.SingleLineText;
          agentType: kintone.fieldTypes.SingleLineText;
          employeeId: kintone.fieldTypes.Number;
        };
      }[];
    };
    contacts: {
      type: 'SUBTABLE';
      value: {
        id: string;
        value: {
          contactValue: kintone.fieldTypes.SingleLineText;
          contactType: kintone.fieldTypes.SingleLineText;
          classification: kintone.fieldTypes.SingleLineText;
        };
      }[];
    };
  }
  interface SavedData extends Data {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
