import * as React from 'react';
import { useState } from 'react';
import { ApiGetRequest } from '../../services/fetchService';
import { ButtonLoadingSpinner } from '../../shared/buttons/ButtonSpinner';
import { IReportFileInfo } from '../types/baseReport';

interface IExportButtonProps { disabled: boolean, isLoadingCallback?: () => boolean, export: () => Promise<IReportFileInfo> }

export const ExportButton: React.FC<IExportButtonProps> = (props) => {
  const [loading, setLoading] = useState(false);

  const getExport = async () => {
    setLoading(true);

    let fileInfo = await props.export();

    await new ApiGetRequest(fileInfo.uri).Invoke()
      .then(response => {
        if (response.ok) {
          response.blob().then((blob: any) => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = fileInfo.name;
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();
            a.remove();  //afterwards we remove the element again   
          });
        }

        setLoading(false);
      })
  }

  return (
    <>
      {
        <ButtonLoadingSpinner loadingText="Exporting..." loading={loading} disabled={props.disabled || loading} variant="secondary" onClick={() => getExport()}>Export</ButtonLoadingSpinner>
      }
    </>
  );
}
