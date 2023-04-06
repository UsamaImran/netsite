import * as React from 'react';
import { NavLink } from 'react-bootstrap';
import { ApiGetRequest } from '../../../services/fetchService';
import { ButtonLoadingSpinner } from '../../../shared/buttons/ButtonSpinner';

export enum DOCUMENT_DOWNLOAD_TYPE {
  Link,
  Button,
}
interface IDocumentDownloadProps {
  documentId: number;
  text: string;
  type: DOCUMENT_DOWNLOAD_TYPE;
}

const DocumentDownload: React.FC<IDocumentDownloadProps> = (props) => {
  const [loading, setLoading] = React.useState(false);

  const documentUrl = React.useMemo(
    (): string =>
      `${process.env.REACT_APP_DOCUMENT_URL}?docId=${props.documentId}`,
    [props.documentId]
  );

  React.useEffect(() => {}, [documentUrl]);

  const fetchDocument = (event: React.MouseEvent) => {
    event.preventDefault();
    setLoading(true);
    new ApiGetRequest(documentUrl)
      .Invoke()
      .then((response) => response.json())
      .then((json: any) => {
        if (json.body) {
          const a = document.createElement('a');
          a.href = json.body;
          console.log(json.body);
          a.download = props.documentId.toString();
          document.body.appendChild(a);

          a.click();
          a.remove();
          setLoading(false);
          return Promise.resolve('File Downloaded');
        }
        return Promise.reject('No response body found');
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <React.Fragment>
      {props.type === DOCUMENT_DOWNLOAD_TYPE.Button ? (
        <ButtonLoadingSpinner
          loadingText='Downloading...'
          loading={loading}
          disabled={props.documentId === 0}
          variant='secondary'
          onClick={fetchDocument}
        >
          View
        </ButtonLoadingSpinner>
      ) : (
        <NavLink
          style={{
            color: '#00c389',
          }}
          onClick={fetchDocument}
        >
          {props.text}
        </NavLink>
      )}
    </React.Fragment>
  );
};

export default DocumentDownload;
