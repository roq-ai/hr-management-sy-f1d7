import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PayrollInterface {
  id?: string;
  payroll_information: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface PayrollGetQueryInterface extends GetQueryInterface {
  id?: string;
  payroll_information?: string;
  user_id?: string;
}
