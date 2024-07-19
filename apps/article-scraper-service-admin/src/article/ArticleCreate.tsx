import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ArticleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};