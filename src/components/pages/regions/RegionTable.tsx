import * as React from 'react';
import { Table } from 'react-bootstrap';
import {ItestData} from './Index';


interface IRegionTableProps { 
   TestData: ItestData[];
 }

export const RegionTable:React.FC<IRegionTableProps> = (props) => {
    return (
      <>
            <Table responsive>
                <thead>
                    <tr>
                      <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                  props.TestData &&
                  props.TestData.map((row, i) => {
                      return (
                        <tr key={"regions" + i}>
                            <td className="small">{row.Name}</td>
                        </tr>
                      )
                    })}
                </tbody>
            </Table>
      </>
    );
}
