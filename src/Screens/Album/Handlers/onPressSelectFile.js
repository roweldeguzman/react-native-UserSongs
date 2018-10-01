import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

export default () => async () => {
  DocumentPicker.show({
    filetype: [DocumentPickerUtil.allFiles()],
  },(error,res) => {
    
    console.log(res.uri, res.type, res.fileName, res.fileSize);

  });

}