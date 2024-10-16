/** 文件识别 */
export const getFileType = (fileName: string) => {
  if (!fileName) return 'other';
  //根据文件名提取后缀名
  const index = fileName.lastIndexOf('.');
  const ext = fileName.substr(index + 1).toLowerCase();
  const enumsFileType = {
    image: ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', 'svg', 'tiff'],
    pdf: ['pdf'],
    excel: ['xlsx', 'xls'],
    word: ['docx', 'doc'],
    ppt: ['ppt', 'pptx']
  };
  for (const key in enumsFileType) {
    if (enumsFileType[key as keyof typeof enumsFileType].includes(ext)) {
      return key;
    }
  }
  return 'other';
};
