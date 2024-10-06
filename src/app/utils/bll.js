import { del, get, post, put } from './axios';

export const upload = async (files, returnUrl = false, fileId) => {
  if (!files) return { error: 'No file selected.' };

  let formData = new FormData();
  fileId && formData.append('fileId', fileId);
  console.log(fileId, "fielid")

  Array.from(files).forEach((file) => {
    formData.append('files', file);
  });

  const response = await post('/api/upload', formData, true);

  if (response?.success) {
    const data = response.data.uploads?.map(({ id, url }) => returnUrl ? { id, url } : id);
    return (data.length === 1) ? data[0] : data;
  } else {
    return { error: response.error };
  }
};

export const getHTML = async (url) => (await get(url, true)).text;

export const getMonograph = (file) => getHTML(
  `/api/${file.url.replace(process.env.NEXT_PUBLIC_DATOCMS_STORAGE_URL, "")}`
);
