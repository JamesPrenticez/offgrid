export interface IUser {
  id: string;
  email: string;
  password_hash: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  profile_picture?: string;
  locale?: string;
  country?: string;
  permissions?: string;
  date_created: Date;
  last_modified: Date;
}