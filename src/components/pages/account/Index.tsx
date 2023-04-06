import * as React from "react";
import { IRoute } from "../../../routing/routes.interfaces";
import { SimpleCard } from "../../shared/Cards/SimpleCard";
import { UserForm } from "../../shared/Form/UserForm";
import { USER_DETAIL_QUERY } from "./query";
import { useQuery } from "@apollo/client";
import { UserDetail, UserDetailVariables } from "../../../generated/UserDetail";
import { AlertWrapped } from "../../shared/Alerts/AlertWrapped";
import { useAccountContext } from "../../../contexts/AccountContext";
import { Col, Row } from "react-bootstrap";

interface IIndexProps extends IRoute {}

export const Index: React.FC<IIndexProps> = (props) => {
  const { userId } = useAccountContext();
  const { loading, error, data } = useQuery<UserDetail, UserDetailVariables>(
    USER_DETAIL_QUERY,
    {
      variables: {
        where: { userId: +userId },
      },
    }
  );
  return (
    <>
      {error && (
        <AlertWrapped
          header={error.name}
          text={error.message}
          bgStyle={"danger"}
          textColor={"white"}
        />
      )}
      {data && data.users && data.users.nodes && data.users.nodes[0] && (
        <Row>
          <Col md={{span:8, offset:2}}>
            <SimpleCard header="Account" loading={loading}>
              <UserForm User={data.users.nodes[0]} />
            </SimpleCard>
          </Col>
        </Row>
      )}
    </>
  );
};
