import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ArticleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
