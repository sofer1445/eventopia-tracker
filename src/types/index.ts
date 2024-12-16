export interface Transaction {
  companyName: string;
  transactionDate: string;
  transactionTime: string;
  transactionNumber: string;
  employeeName: string;
  groupName: string;
  businessName: string;
  transactionType: string;
  amountOwed: number;
}

export interface Event {
  eventType: string;
  eventDate: string;
  details: string;
  startTime: string;
  endTime: string;
  dishCount: number;
  participantCount: number;
  confirmerName: string;
  rank: string;
  role: string;
  confirmationDate: string;
}