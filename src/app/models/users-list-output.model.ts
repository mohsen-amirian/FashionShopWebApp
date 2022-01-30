import { UserModel } from "./user.model";

export class UsersListOutputModel {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data?: UserModel[];
}
