import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Color, Variant } from 'react-bootstrap/esm/types';

export interface IAlertCardProps { header:string, title?:string, text:string, bgStyle:Variant, textColor:Color }

export const AlertCard:React.FC<IAlertCardProps> = ({header, title, text, bgStyle, textColor}) => {
    return (
        <Card
            bg={bgStyle}
            text={textColor}
        >
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          {
              title &&
              <Card.Title>{title}</Card.Title>
          }
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    );
}