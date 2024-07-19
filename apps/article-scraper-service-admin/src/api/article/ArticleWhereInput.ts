import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ArticleWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  text?: StringNullableFilter;
};
