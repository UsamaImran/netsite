import { DocumentNode } from "@apollo/client";
import { ExecutableDefinitionNode, FieldNode } from "graphql";
import { ApiPostRequest } from "../../services/fetchService";
import { GetToday } from "../../utilities/utilities";

export interface IReportFileInfo {
  uri: string;
  name: string;
}

export abstract class Report<T> {
  protected node: DocumentNode;
  protected variables: T;

  constructor(node: DocumentNode, variables: T) {
    this.node = node;
    this.variables = variables;
  }

  protected BuildNodes = (queryBody: string | undefined) => {
    if (queryBody) {
      let cleanedNodes = queryBody.slice(queryBody.indexOf("nodes") + 5);
      cleanedNodes = cleanedNodes.replace(/[^ -~]+/g, ""); // remove all hidden chars
      cleanedNodes = cleanedNodes.replace(/,/g, ""); // remove commas
      cleanedNodes = cleanedNodes.replace(/[{}]/g, ""); //remove brackets
      cleanedNodes = "{" + cleanedNodes + "}";
      return cleanedNodes;
    }
    return "";
  };

  public BuildExportQuery = async (): Promise<IReportFileInfo> => {
    let definition = this.node.definitions[0] as ExecutableDefinitionNode;
    ///This appears to be a list of queries we should be good with the first.
    let queryName = (definition.selectionSet.selections[0] as FieldNode).name
      .value;

    let nodes = this.BuildNodes(this.node.loc?.source.body);

    let url = process.env.REACT_APP_EXPORT_API as string;
    let body = JSON.stringify({
      nodes,
      variable: JSON.stringify(this.variables),
      queryName,
    });

    return await new ApiPostRequest(url, body as string)
      .Invoke()
      .then((result) => {
        return result.text();
      })
      .then((text) => {
        return {
          uri: text,
          name: queryName + "_" + GetToday() + ".csv",
        } as IReportFileInfo;
      });
  };
}
