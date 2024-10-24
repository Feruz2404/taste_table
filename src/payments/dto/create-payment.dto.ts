export class CreatePaymentDto {
  reservation_id: bigint;
  amount: number;
  payment_method: string;
  payment_status: string;
  transaction_id: string;
  currency: string;
}
